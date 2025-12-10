"use server";

export async function submitTalentForm(formData: FormData) {
  // Extract data from FormData
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    instagram: formData.get("instagram"),
    tiktok: formData.get("tiktok"),
    youtube: formData.get("youtube"),
    followers: formData.get("followers"),
    categories: formData.get("categories"),
    message: formData.get("message"),
    agreeToPrivacy: formData.get("agreeToPrivacy") === "on",
  };

  console.log("Talent Form Submitted (Server):", data);
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Here you would typically:
  // 1. Validate data (e.g. using Zod)
  // 2. Send email (e.g. Resend/SendGrid)
  // 3. Save to DB
}

export async function submitBrandForm(formData: FormData) {
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    budget: formData.get("budget"),
    company: formData.get("company"),
    jobTitle: formData.get("jobTitle"),
    categories: formData.get("categories"),
    message: formData.get("message"),
    agreeToPrivacy: formData.get("agreeToPrivacy") === "on",
  };

  console.log("Brand Form Submitted (Server):", data);
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
