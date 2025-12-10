"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full md:w-auto px-8 py-3 bg-cream text-black font-semibold rounded-xl hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "SENDING..." : "SEND"}
    </button>
  );
}
