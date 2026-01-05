import React from "react";

interface ChipProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export function Chip({
  label,
  onClick,
  active = false,
  className = "",
}: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
        ${
          active
            ? "bg-zodiac-900 text-cream-100 border-zodiac-700"
            : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
        }
        ${className}
      `}
    >
      {label}
    </button>
  );
}

interface ChipGroupProps {
  items: string[];
  selectedItems?: string[];
  onSelect?: (item: string) => void;
  className?: string;
}

export function ChipGroup({
  items,
  selectedItems = [],
  onSelect,
  className = "",
}: ChipGroupProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          active={selectedItems.includes(item)}
          onClick={() => onSelect?.(item)}
        />
      ))}
    </div>
  );
}
