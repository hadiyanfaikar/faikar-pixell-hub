"use client";

import React, { useState, useEffect } from "react";
import { retroAudio } from "@/lib/retro-audio";
import { Volume2, VolumeX, Sparkles, Trophy } from "lucide-react";
import { PixelCoin } from "./coin";

interface HudProps {
  coins: number;
  score: number;
  currentWorld?: string;
  onCoinClick?: () => void;
}

export function RetroHud({ coins, score, currentWorld = "WORLD 1-1", onCoinClick }: HudProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [timeString, setTimeString] = useState("00:00:00");

  useEffect(() => {
    setIsMuted(retroAudio.getMuted());
    const unsub = retroAudio.onMuteChange((muted) => setIsMuted(muted));

    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => {
      unsub();
      clearInterval(interval);
    };
  }, []);

  const handleToggleSound = () => {
    const nextState = retroAudio.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <div className="w-full bg-[#090d16]/90 backdrop-blur-md border-b-2 border-slate-800 text-slate-200 px-4 py-2 sticky top-0 z-50 font-pixel text-[10px] md:text-xs tracking-wider shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        {/* PLAYER INFO */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-amber-400 font-bold">HADIYAN</span>
          <span className="text-slate-400 font-mono text-[11px]">
            {score.toString().padStart(6, "0")}
          </span>
        </div>

        {/* COINS */}
        <div className="flex items-center gap-1.5 shrink-0 bg-slate-900/80 px-2.5 py-1 rounded-sm border border-slate-800">
          <PixelCoin size="sm" onCollect={onCoinClick} />
          <span className="text-amber-300 font-mono font-bold">
            x{coins.toString().padStart(2, "0")}
          </span>
        </div>

        {/* ACTIVE WORLD */}
        <div className="hidden sm:flex items-center gap-1 shrink-0 text-sky-400">
          <span>ZONE:</span>
          <span className="text-white font-bold">{currentWorld}</span>
        </div>

        {/* TIME */}
        <div className="hidden md:flex items-center gap-1 shrink-0 text-slate-400">
          <span>TIME:</span>
          <span className="text-emerald-400 font-mono">{timeString}</span>
        </div>

        {/* SOUND FX TOGGLE */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleToggleSound}
            aria-label={isMuted ? "Unmute 8-Bit Audio" : "Mute Audio"}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-none border transition-colors cursor-pointer ${
              isMuted
                ? "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200"
                : "bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            }`}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[9px]">SFX: OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span className="hidden lg:inline text-[9px]">SFX: ON</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
