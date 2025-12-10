import { submitBrandForm } from "@/lib/actions";
import SubmitButton from "@/components/ui/buttons/SubmitButton";

export default function BrandForm() {
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-white/40 bg-white/5 text-white placeholder:text-white/30 transition-colors";

  return (
    <form action={submitBrandForm} className="space-y-4">
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

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="budget"
          placeholder="Project Budget"
          className={inputClasses}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
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
        placeholder="How can we help you?"
        rows={4}
        className={`${inputClasses} resize-none`}
        required
      />
      <SubmitButton />
    </form>
  );
}
