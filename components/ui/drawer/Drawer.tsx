"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "right" | "bottom";
  className?: string;
}

export function Drawer({
  isOpen,
  onClose,
  children,
  position = "right",
  className = "",
}: DrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const variants = {
    left: { x: "-100%" },
    right: { x: "100%" },
    bottom: { y: "100%" },
  };

  const activeVariants = {
    left: { x: 0 },
    right: { x: 0 },
    bottom: { y: 0 },
  };

  const drawerClasses = {
    left: "top-0 left-0 h-full w-full md:w-[400px]",
    right: "top-0 right-0 h-full w-full md:w-[400px]",
    bottom: "bottom-0 left-0 w-full h-[80vh] rounded-t-3xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={variants[position]}
            animate={activeVariants[position]}
            exit={variants[position]}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed bg-zodiac-950 border-l border-white/10 z-[70] shadow-2xl ${drawerClasses[position]} ${className}`}
          >
            <div className="h-full flex flex-col">
              <div className="p-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <IoClose size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 pt-0">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
