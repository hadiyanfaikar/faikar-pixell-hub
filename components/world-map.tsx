"use client";

import React from "react";
import { motion } from "framer-motion";
import { WORLD_CATEGORIES } from "@/data/platforms";
import { retroAudio } from "@/lib/retro-audio";
import { Compass, Sparkles, Castle, ArrowRight } from "lucide-react";

export function WorldMapNav() {
  const handleJump = (id: string) => {
    retroAudio.playWarpSound();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-slate-950/80 border-y-2 border-slate-800 py-6 px-4 select-none relative overflow-hidden">
      {/* Subtle Pixel Cloud Decorations in Background */}
      <div className="absolute top-2 left-10 opacity-20 pointer-events-none hidden sm:block">
        <div className="w-16 h-5 bg-sky-300 rounded-none shadow-[4px_4px_0_0_#38bdf8]" />
      </div>
      <div className="absolute bottom-2 right-12 opacity-20 pointer-events-none hidden sm:block">
        <div className="w-20 h-6 bg-sky-300 rounded-none shadow-[4px_4px_0_0_#38bdf8]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400 animate-spin" />
            <span className="font-pixel text-xs text-white uppercase tracking-wider">
              WORLD OVERVIEW & STAGE SELECT
            </span>
          </div>
          <span className="text-[10px] font-pixel text-slate-400 hidden md:inline">
            CLICK ANY STAGE TO WARP INSTANTLY
          </span>
        </div>

        {/* Horizontal Map Track */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {WORLD_CATEGORIES.map((world, idx) => (
            <React.Fragment key={world.id}>
              <motion.button
                type="button"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ y: 1 }}
                onClick={() => handleJump(`world-${world.id}`)}
                className="shrink-0 p-3 bg-slate-900 border-2 border-slate-700 hover:border-amber-400 text-left cursor-pointer shadow-[3px_3px_0_0_#0f172a] transition-all group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-pixel text-[8px] px-1.5 py-0.5 border"
                    style={{
                      borderColor: world.accentColor,
                      color: world.accentColor,
                      backgroundColor: `${world.accentColor}15`,
                    }}
                  >
                    {world.worldNumber}
                  </span>
                  <span className="font-pixel text-[10px] text-slate-200 group-hover:text-amber-300">
                    {world.worldName}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono line-clamp-1 max-w-[140px]">
                  {world.themeTitle}
                </p>
              </motion.button>

              {idx < WORLD_CATEGORIES.length - 1 && (
                <div className="shrink-0 text-slate-700 font-pixel text-[10px]">
                  →
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Final Castle Gate */}
          <div className="shrink-0 text-slate-700 font-pixel text-[10px]">→</div>
          <motion.button
            type="button"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ y: 1 }}
            onClick={() => handleJump("the-castle")}
            className="shrink-0 p-3 bg-amber-950/40 border-2 border-amber-500/80 hover:border-amber-300 text-left cursor-pointer shadow-[3px_3px_0_0_#78350f] transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-pixel text-[8px] px-1.5 py-0.5 border border-amber-400 text-amber-300 bg-amber-400/10">
                FINAL
              </span>
              <span className="font-pixel text-[10px] text-amber-300 group-hover:text-white flex items-center gap-1">
                <Castle className="w-3 h-3" />
                THE CASTLE
              </span>
            </div>
            <p className="text-[10px] text-amber-400/80 font-mono">
              Contact & Social Hub
            </p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
