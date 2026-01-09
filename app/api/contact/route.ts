import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      type, 
      firstName, 
      lastName, 
      email, 
      phone, 
      message, 
      _honey, // Honeypot field
      ...otherFields 
    } = body;

    // 1. Honeypot Check
    if (_honey) {
      console.warn("Potential spam detected (honeypot filled).");
      // Pretend to succeed to fool the bot
      return NextResponse.json({ success: true, message: "Message sent!" });
    }

    // 2. Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Format Email Content based on Form Type
    const subject = `New ${type === 'brand' ? 'Brand' : 'Talent'} Inquiry: ${firstName} ${lastName}`;
    
    // Construct the data table for the email body
    const extraRows = Object.entries(otherFields).map(([key, value]) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; text-transform: capitalize;">${key.replace(/([A-Z])/g, ' $1').trim()}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${value || '-'}</td>
      </tr>
    `).join('');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Website Inquiry</h2>
        <p><strong>Type:</strong> ${type === 'brand' ? 'Brand Partnership' : 'Talent Application'}</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          ${extraRows}
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <h3 style="margin-top: 0; font-size: 16px;">Message:</h3>
          <p style="white-space: pre-wrap;">${message || 'No message provided.'}</p>
        </div>
      </div>
    `;

    // 4. Send Email
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL, // Where to receive inquiries
      replyTo: email,
      subject: subject,
      html: htmlContent,
      text: `New inquiry from ${firstName} ${lastName} (${email}).\n\n${message}`, // Fallback
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
