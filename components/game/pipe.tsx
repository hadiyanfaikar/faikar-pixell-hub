"use client";

import React from "react";
import { motion } from "framer-motion";
import { retroAudio } from "@/lib/retro-audio";
import { ArrowDown, Compass } from "lucide-react";

interface PipeProps {
  targetId: string;
  label?: string;
  sublabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WarpPipe({
  targetId,
  label = "WARP PIPE",
  sublabel = "ENTER NEXT ZONE",
  className = "",
  size = "md",
}: PipeProps) {
  const handleWarp = () => {
    retroAudio.playWarpSound();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heights = {
    sm: "h-20 w-24",
    md: "h-28 w-32",
    lg: "h-36 w-40",
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <motion.button
        type="button"
        onClick={handleWarp}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ y: 2 }}
        className="group relative cursor-pointer focus:outline-none flex flex-col items-center"
        aria-label={`Warp to ${label}`}
      >
        {/* Floating warp prompt badge */}
        <div className="mb-2 bg-emerald-950/90 border border-emerald-400 text-emerald-300 px-2.5 py-1 text-[9px] font-pixel shadow-[2px_2px_0_0_#064e3b] flex items-center gap-1.5 transition-transform group-hover:-translate-y-1">
          <ArrowDown className="w-3 h-3 text-emerald-400 animate-bounce" />
          <span>{label}</span>
        </div>

        {/* Pixel Warp Pipe SVG Art */}
        <div className={`${heights[size]} relative flex flex-col items-center`}>
          {/* Pipe Rim Top */}
          <div className="w-full h-8 bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-900 border-4 border-[#064e3b] rounded-none shadow-[inset_0_4px_0_#6ee7b7,inset_-4px_0_0_#064e3b,0_4px_0_#022c22] relative flex items-center justify-center">
            {/* Top dark opening */}
            <div className="w-[85%] h-3 bg-emerald-950 border border-emerald-900/60 rounded-sm shadow-inner flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400/40 animate-ping" />
            </div>
          </div>

          {/* Pipe Body */}
          <div className="w-[80%] flex-1 bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-900 border-x-4 border-b-4 border-[#064e3b] shadow-[inset_4px_0_0_#6ee7b7,inset_-4px_0_0_#064e3b] flex flex-col justify-center items-center">
            {/* Pipe texture highlight */}
            <div className="w-1.5 h-12 bg-emerald-300/40 rounded-full blur-[0.5px]" />
          </div>
        </div>
      </motion.button>

      {sublabel && (
        <span className="mt-1 text-[9px] font-pixel text-emerald-400/80 uppercase tracking-wider">
          {sublabel}
        </span>
      )}
    </div>
  );
}
