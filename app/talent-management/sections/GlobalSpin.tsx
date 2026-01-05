"use client";

import { motion } from "motion/react";

export default function GlobalSpin() {
  // Hardcoded positions for notifications to ensure consistent server/client rendering
  const notifications = [
    { x: 35, y: 35, delay: 0 },
    { x: 65, y: 45, delay: 1.2 },
    { x: 45, y: 65, delay: 2.4 },
    { x: 55, y: 25, delay: 0.8 },
    { x: 25, y: 55, delay: 3.0 },
    { x: 75, y: 55, delay: 1.8 },
  ];

  return (
    <div className="absolute -top-[30%] -left-[30%] w-[180%] h-[180%] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
      <motion.div 
        className="w-full h-full"
        initial={{ rotate: -23.5 }} // Earth's tilt
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
           {/* Globe Outline */}
           <circle cx="50" cy="50" r="40" stroke="#E4E2DD" strokeWidth="0.5" fill="none" opacity="0.5" />
           
           {/* Static Meridians */}
           {[10, 20, 30].map((rx, i) => (
              <ellipse
                  key={i}
                  cx="50"
                  cy="50"
                  rx={rx}
                  ry="40"
                  stroke="#E4E2DD"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.5"
              />
           ))}
           <line x1="50" y1="10" x2="50" y2="90" stroke="#E4E2DD" strokeWidth="0.5" opacity="0.5" />
           
           {/* Latitude Lines */}
           <ellipse cx="50" cy="50" rx="40" ry="10" stroke="#E4E2DD" strokeWidth="0.5" fill="none" opacity="0.3" />
           <ellipse cx="50" cy="50" rx="40" ry="25" stroke="#E4E2DD" strokeWidth="0.5" fill="none" opacity="0.3" />
           <line x1="10" y1="50" x2="90" y2="50" stroke="#E4E2DD" strokeWidth="0.5" opacity="0.3" />

           {/* Popping Notifications */}
           {notifications.map((notif, i) => (
             <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0, y: 5 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5], y: [5, 0, 0, -5] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: notif.delay,
                    ease: "backOut"
                }}
             >
                {/* Notification Bubble */}
                <rect 
                    x={notif.x - 5} 
                    y={notif.y - 3.5} 
                    width="10" 
                    height="7" 
                    rx="2" 
                    fill="#E4E2DD" 
                    stroke="#4D0011"
                    strokeWidth="0.2"
                />
                {/* Heart Icon */}
                <path 
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="#4D0011"
                    transform={`translate(${notif.x - 2.5}, ${notif.y - 2.5}) scale(0.2)`}
                />
             </motion.g>
           ))}
        </svg>
      </motion.div>
    </div>
  );
}
