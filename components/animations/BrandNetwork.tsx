"use client";

import { motion } from "motion/react";

export default function BrandNetwork() {
  // Node positions (x, y in percentages)
  const nodes = [
    { x: 20, y: 30 },
    { x: 50, y: 20 },
    { x: 80, y: 40 },
    { x: 30, y: 70 },
    { x: 70, y: 80 },
  ];

  // Connections between nodes (indices)
  const connections = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [1, 3]
  ];

  return (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connections */}
        {connections.map(([start, end], i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${nodes[start].x}%`}
            y1={`${nodes[start].y}%`}
            x2={`${nodes[end].x}%`}
            y2={`${nodes[end].y}%`}
            stroke="url(#gradient-line)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.2, 
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill="#E4E2DD" // Cream
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1 + 0.5,
              type: "spring"
            }}
          />
        ))}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4D0011" stopOpacity="0" />
            <stop offset="50%" stopColor="#E4E2DD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4D0011" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
