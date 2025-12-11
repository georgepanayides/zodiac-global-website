"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({ children, className = "", onClick }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
