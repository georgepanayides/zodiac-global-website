"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoChevronDown } from "react-icons/io5";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-medium text-cream-100 group-hover:text-zodiac-400 transition-colors">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white/40 group-hover:text-zodiac-400"
        >
          <IoChevronDown size={24} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/60 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
