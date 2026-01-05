"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href: string;
}

export default function AnimatedButton({ children, className = "", onClick, href }: AnimatedButtonProps) {
  return (
    <Link href={href} passHref>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-4 bg-white text-black rounded-full font-bold text-lg tracking-tight hover:bg-gray-100 transition-colors ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </Link>
  );
}
