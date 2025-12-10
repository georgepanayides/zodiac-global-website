import { submitTalentForm } from "@/lib/actions";
import SubmitButton from "@/components/ui/buttons/SubmitButton";

export default function TalentForm() {
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-zodiac bg-white text-zodiac placeholder:text-gray-400";

  return (
    <form action={submitTalentForm} className="space-y-4">
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
      <SubmitButton />
    </form>
  );
}
