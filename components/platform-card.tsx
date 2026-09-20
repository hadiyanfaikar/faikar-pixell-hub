"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Platform } from "@/data/platforms";
import { PlatformIcon } from "./platform-icon";
import { retroAudio } from "@/lib/retro-audio";
import { ExternalLink, Star, Sparkles } from "lucide-react";

interface PlatformCardProps {
  platform: Platform;
  onFavoriteToggle?: (id: string, isFav: boolean) => void;
  isFavorited?: boolean;
}

export function PlatformCard({ platform, onFavoriteToggle, isFavorited = false }: PlatformCardProps) {
  const [favorite, setFavorite] = useState(isFavorited);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    retroAudio.playClickSound();
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !favorite;
    setFavorite(nextState);
    if (nextState) {
      retroAudio.playCoinSound();
    } else {
      retroAudio.playClickSound();
    }
    if (onFavoriteToggle) {
      onFavoriteToggle(platform.id, nextState);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={() => {
        setIsHovered(true);
        retroAudio.playClickSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full bg-slate-900/80 backdrop-blur-sm border-2 border-slate-700/80 hover:border-amber-400 p-5 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#ca8a04] transition-all select-none"
      style={{
        boxShadow: isHovered
          ? `0 10px 25px -5px ${platform.bgGlow}, 4px 4px 0 0 #0f172a`
          : "4px 4px 0 0 #0f172a",
      }}
    >
      {/* Top Header: Category & Favorite */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span
          className="font-pixel text-[9px] uppercase tracking-wider px-2 py-0.5 border"
          style={{
            borderColor: `${platform.color}66`,
            color: platform.color,
            backgroundColor: `${platform.color}15`,
          }}
        >
          {platform.category}
        </span>

        {/* Favorite Bookmark Button */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          title={favorite ? "Remove from Saved Items" : "Save Item to Inventory"}
          aria-label={favorite ? "Remove from Favorites" : "Add to Favorites"}
          className="cursor-pointer text-slate-500 hover:text-amber-400 transition-colors p-1"
        >
          <Star
            className={`w-4 h-4 transition-transform group-hover:scale-110 ${
              favorite ? "text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" : ""
            }`}
          />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex items-start gap-3.5 mb-3">
        {/* Power-up Item Box Icon */}
        <div
          className="w-12 h-12 shrink-0 border-2 flex items-center justify-center relative shadow-[2px_2px_0_0_#0f172a] transition-transform group-hover:rotate-3"
          style={{
            borderColor: platform.color,
            backgroundColor: "#090d16",
            color: platform.color,
          }}
        >
          <PlatformIcon name={platform.icon} className="w-6 h-6" />
          {platform.featured && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-none border border-slate-900 animate-pulse" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-pixel text-xs md:text-sm text-slate-100 font-bold tracking-wide truncate group-hover:text-amber-300 transition-colors">
              {platform.name}
            </h3>
            {platform.stat && (
              <span className="text-[9px] bg-slate-800 text-slate-300 font-mono px-1.5 py-0.5 border border-slate-700">
                {platform.stat}
              </span>
            )}
          </div>
          {platform.handle && (
            <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
              {platform.handle}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-xs leading-relaxed mb-5 flex-1 line-clamp-3">
        {platform.description}
      </p>

      {/* Action / Link Button */}
      <a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCardClick}
        className="w-full mt-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 font-pixel text-[10px] tracking-wider uppercase border border-slate-600 bg-slate-800/90 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-500 transition-colors shadow-[2px_2px_0_0_#0f172a] group-hover:border-slate-500"
        style={{
          borderColor: isHovered ? platform.color : undefined,
        }}
      >
        <span>{platform.actionText || "OPEN PLATFORM"}</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
}
