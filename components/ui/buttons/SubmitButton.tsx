"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  isLoading?: boolean;
}

export default function SubmitButton({ isLoading }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const isSubmitting = isLoading || pending;

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full md:w-1/3 px-8 py-3 bg-cream text-zodiac font-semibold rounded-lg hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
    >
      {isSubmitting ? "SENDING..." : "SEND"}
    </button>
  );
}
