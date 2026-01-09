"use client";

import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { motion, AnimatePresence } from "motion/react";
import BrandForm from "@/components/ui/forms/BrandForm";
import TalentForm from "@/components/ui/forms/TalentForm";

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState<"brand" | "talent">("brand");

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="p-1 bg-white/5 rounded-full border border-white/10 inline-flex relative">
              {[
                { id: "brand", label: "I'm a Brand" },
                { id: "talent", label: "I'm a Creator" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "brand" | "talent")}
                  className={`px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 relative z-10 cursor-pointer ${
                    activeTab === tab.id ? "text-zodiac-800 font-semibold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeContactTab"
                      className="absolute inset-0 bg-white rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Forms */}
          <div className="md:bg-white/5 md:border border-white/10 rounded-3xl md:p-12 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "brand" ? <BrandForm /> : <TalentForm />}
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
