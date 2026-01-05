import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)] ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoItem({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
}: BentoItemProps) {
  return (
    <div
      className={`
        bg-white/5 border border-white/10 rounded-3xl p-6 
        hover:bg-white/10 transition-colors duration-300
        flex flex-col justify-between
        ${colSpan > 1 ? `md:col-span-${colSpan}` : ""}
        ${rowSpan > 1 ? `md:row-span-${rowSpan}` : ""}
        ${className}
      `}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  );
}
