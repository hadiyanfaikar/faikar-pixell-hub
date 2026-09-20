"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlatformIcon } from "./platform-icon";
import { retroAudio } from "@/lib/retro-audio";
import { ExternalLink, Headphones, Disc3, Sparkles } from "lucide-react";

interface SpotifyHeroCardProps {
  url?: string;
  onOpen?: () => void;
}

export function SpotifyHeroCard({
  url = "https://open.spotify.com",
  onOpen,
}: SpotifyHeroCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    retroAudio.playCoinSound();
    if (onOpen) onOpen();
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => {
        setIsHovered(true);
        retroAudio.playClickSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border-4 border-emerald-500/80 p-6 sm:p-8 shadow-[8px_8px_0_0_#064e3b] relative select-none group"
    >
      {/* Decorative Pixel Corners */}
      <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-emerald-400" />
      <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-emerald-400" />
      <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 bg-emerald-400" />
      <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 bg-emerald-400" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/* Glowing Animated Spotify Icon Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1DB954] text-black border-2 border-emerald-300 flex items-center justify-center relative shadow-[4px_4px_0_0_#022c22] shrink-0">
            <PlatformIcon name="spotify" className="w-9 h-9 sm:w-11 sm:h-11" />
            <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-slate-950"></span>
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-950 border border-emerald-500 text-emerald-400 font-pixel text-[9px] mb-1.5">
              <Headphones className="w-3 h-3 animate-pulse" />
              <span>PRIMARY AUDIO PLATFORM</span>
            </div>

            <h3 className="font-pixel text-lg sm:text-2xl text-white font-bold tracking-wide group-hover:text-emerald-300 transition-colors">
              SPOTIFY HUB
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
              Explore Hadiyan&apos;s daily listening rotation, curated playlists, synthwave collections, and chill study beats.
            </p>
          </div>
        </div>

        {/* CTA Launch Button */}
        <div className="w-full md:w-auto shrink-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-pixel text-xs tracking-wider border-2 border-emerald-300 shadow-[4px_4px_0_0_#064e3b] hover:shadow-[6px_6px_0_0_#064e3b] transition-all cursor-pointer font-bold active:translate-y-1"
          >
            <PlatformIcon name="spotify" className="w-4 h-4" />
            <span>OPEN SPOTIFY PROFILE</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
