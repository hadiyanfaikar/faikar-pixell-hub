"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retroAudio } from "@/lib/retro-audio";

interface CoinProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  onCollect?: () => void;
}

export function PixelCoin({ size = "md", className = "", onCollect }: CoinProps) {
  const [floatingBonus, setFloatingBonus] = useState<number[]>([]);

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const handleCollect = () => {
    retroAudio.playCoinSound();
    const id = Date.now() + Math.random();
    setFloatingBonus((prev) => [...prev, id]);
    if (onCollect) onCollect();
    setTimeout(() => {
      setFloatingBonus((prev) => prev.filter((item) => item !== id));
    }, 900);
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <motion.button
        type="button"
        onClick={handleCollect}
        whileHover={{ scale: 1.15, rotateY: 180 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Collect Coin"
        className={`${sizeClasses[size]} cursor-pointer relative focus:outline-none transition-transform`}
      >
        {/* Pixel Coin SVG Art */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_8px_rgba(234,179,8,0.5)]"
        >
          {/* Outer Border */}
          <rect x="5" y="1" width="6" height="2" fill="#78350F" />
          <rect x="5" y="13" width="6" height="2" fill="#78350F" />
          <rect x="2" y="4" width="2" height="8" fill="#78350F" />
          <rect x="12" y="4" width="2" height="8" fill="#78350F" />
          <rect x="3" y="2" width="3" height="2" fill="#78350F" />
          <rect x="10" y="2" width="3" height="2" fill="#78350F" />
          <rect x="3" y="12" width="3" height="2" fill="#78350F" />
          <rect x="10" y="12" width="3" height="2" fill="#78350F" />

          {/* Golden Body */}
          <rect x="4" y="3" width="8" height="10" fill="#EAB308" />
          <rect x="3" y="4" width="10" height="8" fill="#EAB308" />

          {/* Highlights */}
          <rect x="5" y="3" width="3" height="2" fill="#FEF08A" />
          <rect x="4" y="4" width="2" height="4" fill="#FEF08A" />

          {/* Center Rib/Detail */}
          <rect x="7" y="5" width="2" height="6" fill="#CA8A04" />
          <rect x="8" y="5" width="1" height="5" fill="#FEF08A" />
        </svg>
      </motion.button>

      {/* Floating "+1" Animation */}
      <AnimatePresence>
        {floatingBonus.map((id) => (
          <motion.span
            key={id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -36, scale: 1.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute -top-3 font-pixel text-xs text-amber-300 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-none z-50 whitespace-nowrap"
          >
            +100
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
