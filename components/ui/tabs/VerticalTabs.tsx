"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function VerticalTabs({
  tabs,
  defaultTab,
  className = "",
}: VerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={`flex flex-col md:flex-row gap-8 ${className}`}>
      {/* Tab List */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-4 text-left text-sm font-semibold transition-all rounded-xl relative
              ${
                activeTab === tab.id
                  ? "text-zodiac-400 bg-white/5"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeVerticalTab"
                className="absolute left-0 top-0 bottom-0 w-1 bg-zodiac-500 rounded-l-xl"
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 min-h-[300px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block animate-in fade-in slide-in-from-bottom-4 duration-500" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
