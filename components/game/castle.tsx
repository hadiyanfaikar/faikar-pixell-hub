"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Flag } from "lucide-react";

interface CastleProps {
  className?: string;
}

export function PixelCastle({ className = "" }: CastleProps) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Animated Flag on Top Tower */}
      <motion.div
        animate={{
          rotate: [0, 4, -4, 0],
          x: [0, 2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "easeInOut",
        }}
        className="relative z-20 -mb-2"
      >
        <div className="flex items-start">
          {/* Flagpole */}
          <div className="w-1.5 h-10 bg-slate-400 border border-slate-700 shadow-sm" />
          {/* Pennant / Flag */}
          <div className="h-6 w-10 bg-gradient-to-r from-amber-400 to-rose-500 border-t-2 border-r-2 border-b-2 border-amber-600 shadow-md flex items-center justify-center -ml-0.5">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
      </motion.div>

      {/* 100% Original Castle Pixel Art SVG */}
      <svg
        width="220"
        height="180"
        viewBox="0 0 44 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pixelated drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
      >
        {/* Central High Keep / Tower */}
        <rect x="17" y="5" width="10" height="15" fill="#334155" />
        <rect x="17" y="5" width="2" height="15" fill="#475569" /> {/* Highlight */}
        <rect x="25" y="5" width="2" height="15" fill="#1e293b" /> {/* Shadow */}

        {/* Central Tower Battlements */}
        <rect x="16" y="3" width="12" height="2" fill="#475569" />
        <rect x="16" y="1" width="3" height="2" fill="#475569" />
        <rect x="21" y="1" width="2" height="2" fill="#475569" />
        <rect x="25" y="1" width="3" height="2" fill="#475569" />

        {/* Left Flanking Tower */}
        <rect x="6" y="10" width="10" height="20" fill="#334155" />
        <rect x="6" y="10" width="2" height="20" fill="#475569" />
        <rect x="14" y="10" width="2" height="20" fill="#1e293b" />
        {/* Left Battlements */}
        <rect x="5" y="8" width="12" height="2" fill="#475569" />
        <rect x="5" y="6" width="3" height="2" fill="#475569" />
        <rect x="10" y="6" width="2" height="2" fill="#475569" />
        <rect x="14" y="6" width="3" height="2" fill="#475569" />

        {/* Right Flanking Tower */}
        <rect x="28" y="10" width="10" height="20" fill="#334155" />
        <rect x="28" y="10" width="2" height="20" fill="#475569" />
        <rect x="36" y="10" width="2" height="20" fill="#1e293b" />
        {/* Right Battlements */}
        <rect x="27" y="8" width="12" height="2" fill="#475569" />
        <rect x="27" y="6" width="3" height="2" fill="#475569" />
        <rect x="32" y="6" width="2" height="2" fill="#475569" />
        <rect x="36" y="6" width="3" height="2" fill="#475569" />

        {/* Main Curtain Wall Center */}
        <rect x="16" y="18" width="12" height="15" fill="#1e293b" />

        {/* Arrow Slits / Windows */}
        <rect x="21" y="8" width="2" height="4" fill="#090d16" />
        <rect x="10" y="14" width="2" height="4" fill="#090d16" />
        <rect x="32" y="14" width="2" height="4" fill="#090d16" />

        {/* Grand Arched Portal / Entrance */}
        <rect x="19" y="24" width="6" height="9" fill="#090d16" />
        <rect x="20" y="22" width="4" height="2" fill="#090d16" />
        {/* Portal Keystone & Torches */}
        <rect x="21" y="21" width="2" height="1" fill="#f59e0b" />
        <rect x="18" y="26" width="1" height="2" fill="#ea580c" />
        <rect x="25" y="26" width="1" height="2" fill="#ea580c" />
        <rect x="18" y="25" width="1" height="1" fill="#facc15" /> {/* Torch fire L */}
        <rect x="25" y="25" width="1" height="1" fill="#facc15" /> {/* Torch fire R */}

        {/* Stone Brick Textures */}
        <rect x="8" y="20" width="3" height="1" fill="#475569" />
        <rect x="12" y="24" width="2" height="1" fill="#1e293b" />
        <rect x="30" y="22" width="3" height="1" fill="#475569" />
        <rect x="34" y="26" width="2" height="1" fill="#1e293b" />
        <rect x="18" y="14" width="3" height="1" fill="#475569" />

        {/* Castle Foundation / Cobblestone Base */}
        <rect x="2" y="33" width="40" height="3" fill="#0f172a" />
        <rect x="4" y="34" width="6" height="1" fill="#334155" />
        <rect x="16" y="34" width="8" height="1" fill="#334155" />
        <rect x="30" y="34" width="8" height="1" fill="#334155" />
      </svg>
    </div>
  );
}
