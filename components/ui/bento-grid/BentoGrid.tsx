import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: ReactNode;
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
  const colSpanClass =
    {
      1: "",
      2: "md:col-span-2",
      3: "md:col-span-3",
      4: "md:col-span-4",
    }[colSpan] ?? "";

  const rowSpanClass =
    {
      1: "",
      2: "md:row-span-2",
      3: "md:row-span-3",
      4: "md:row-span-4",
    }[rowSpan] ?? "";

  return (
    <div
      className={`
        bg-white/5 border border-white/10 rounded-3xl p-6 
        hover:bg-white/10 transition-colors duration-300
        flex flex-col justify-between
        ${colSpanClass}
        ${rowSpanClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
