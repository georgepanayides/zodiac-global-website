"use client";

import { useState } from "react";
import SubmitButton from "@/components/ui/buttons/SubmitButton";

export default function TalentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-white/40 bg-white/5 text-white placeholder:text-white/30 transition-colors";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data: Record<string, FormDataEntryValue | string> = { type: 'talent' };
    
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Application sent successfully! We will be in touch soon.' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to send application. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Status Message */}
      {status.type && (
        <div className={`p-4 rounded-lg mb-4 text-sm font-medium ${
          status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
        }`}>
          {status.message}
        </div>
      )}

      {/* Honeypot field - hidden from users */}
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className={inputClasses}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className={inputClasses}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className={inputClasses}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={inputClasses}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          name="instagram"
          placeholder="Instagram Link"
          className={inputClasses}
        />
        <input
          type="text"
          name="tiktok"
          placeholder="TikTok Link"
          className={inputClasses}
        />
        <input
          type="text"
          name="youtube"
          placeholder="YouTube Link"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="followers"
          placeholder="Combined Followers"
          className={inputClasses}
        />
        <input
          type="text"
          name="categories"
          placeholder="Creator Categories Interested In"
          className={inputClasses}
        />
      </div>

      <textarea
        name="message"
        placeholder="Leave a note"
        rows={4}
        className={`${inputClasses} resize-none`}
        required
      />
      <SubmitButton isLoading={isLoading} />
    </form>
  );
}
