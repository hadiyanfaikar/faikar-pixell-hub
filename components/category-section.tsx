"use client";

import React from "react";
import { WorldCategory, Platform } from "@/data/platforms";
import { PlatformCard } from "./platform-card";
import { QuestionBlock } from "./game/question-block";
import { PixelCoin } from "./game/coin";
import { WarpPipe } from "./game/pipe";
import { Sparkles, MapPin } from "lucide-react";

interface CategorySectionProps {
  category: WorldCategory;
  platforms: Platform[];
  nextWorldId?: string;
  nextWorldName?: string;
  onCoinCollect?: () => void;
  onBlockHit?: () => void;
}

export function CategorySection({
  category,
  platforms,
  nextWorldId,
  nextWorldName,
  onCoinCollect,
  onBlockHit,
}: CategorySectionProps) {
  return (
    <section
      id={`world-${category.id}`}
      className="w-full py-20 px-4 relative border-t-2 border-slate-800/80"
    >
      {/* Dynamic Background Atmosphere */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${category.skyGradient} pointer-events-none -z-10`}
      />

      <div className="max-w-7xl mx-auto">
        {/* World Title Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="font-pixel text-[10px] px-2.5 py-1 border shadow-[2px_2px_0_0_#0f172a]"
                style={{
                  borderColor: category.accentColor,
                  color: category.accentColor,
                  backgroundColor: `${category.accentColor}15`,
                }}
              >
                {category.worldNumber}
              </span>
              <span className="text-slate-500 font-pixel text-[10px]">///</span>
              <span className="font-pixel text-xs text-slate-300">
                {category.themeTitle}
              </span>
            </div>

            <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide">
              {category.worldName}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              {category.description}
            </p>
          </div>

          {/* Environmental Interactive Game Blocks */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <PixelCoin onCollect={onCoinCollect} size="md" />
            <QuestionBlock onHit={onBlockHit} />
            <PixelCoin onCollect={onCoinCollect} size="md" />
          </div>
        </div>

        {/* Floating Brick Platform Separator */}
        <div className="w-full flex items-center justify-center gap-1 my-6 overflow-hidden select-none opacity-40">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-4 bg-[#78350f] border-t-2 border-l-2 border-[#b45309] border-b-2 border-r-2 border-[#451a03] shadow-sm shrink-0"
            />
          ))}
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>

        {/* Bottom Warp Pipe to proceed to next world */}
        {nextWorldId && (
          <div className="flex justify-center pt-8 pb-4">
            <WarpPipe
              targetId={`world-${nextWorldId}`}
              label={`ENTER ${nextWorldName || "NEXT ZONE"}`}
              sublabel="WARP DOWN"
              size="sm"
            />
          </div>
        )}
      </div>
    </section>
  );
}
