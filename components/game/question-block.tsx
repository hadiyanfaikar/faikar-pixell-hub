"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retroAudio } from "@/lib/retro-audio";
import { Sparkles, MessageSquare } from "lucide-react";

interface QuestionBlockProps {
  onHit?: () => void;
  className?: string;
  label?: string;
}

const SECRET_MESSAGES = [
  "Welcome to Hadiyan's Digital Hub!",
  "Nice to see you here!",
  "Keep exploring the worlds!",
  "You found a secret item! +200 PTS",
  "Thanks for visiting!",
  "Tip: Spotify is in high rotation today.",
  "Hadiyan is currently crafting cool new digital projects.",
  "Check out the Arcade Dungeon for gaming handles!",
];

export function QuestionBlock({ onHit, className = "", label }: QuestionBlockProps) {
  const [hits, setHits] = useState(0);
  const [isBumping, setIsBumping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [poppingCoin, setPoppingCoin] = useState(false);

  const handleHit = () => {
    if (isBumping) return;
    setIsBumping(true);
    setHits((prev) => prev + 1);

    retroAudio.playBlockHitSound();
    setTimeout(() => {
      retroAudio.playCoinSound();
    }, 90);

    setPoppingCoin(true);
    const msg = SECRET_MESSAGES[Math.floor(Math.random() * SECRET_MESSAGES.length)];
    setCurrentMessage(msg);

    if (onHit) onHit();

    setTimeout(() => {
      setIsBumping(false);
      setPoppingCoin(false);
    }, 400);
  };

  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {/* Pop-up Secret Speech Balloon */}
      <AnimatePresence>
        {currentMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute -top-16 z-50 bg-slate-900/95 border-2 border-amber-400 text-amber-200 px-3 py-1.5 rounded-none shadow-[4px_4px_0_0_#0f172a] max-w-xs text-center font-pixel text-[10px] leading-tight flex items-center gap-1.5 pointer-events-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-spin" />
            <span>{currentMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popping Star / Coin from top */}
      <AnimatePresence>
        {poppingCoin && (
          <motion.div
            initial={{ y: 0, opacity: 1, scale: 0.5 }}
            animate={{ y: -45, opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -top-4 font-pixel text-amber-300 text-xs font-bold pointer-events-none z-40"
          >
            ⭐ BONUS!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question Block Body */}
      <motion.button
        type="button"
        onClick={handleHit}
        animate={isBumping ? { y: [-12, 0] } : { y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Hit Mystery Block"
        className="w-12 h-12 relative cursor-pointer select-none rounded-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400"
        style={{
          boxShadow: "0 4px 0 #78350f, inset 2px 2px 0 #fef08a, inset -2px -2px 0 #78350f",
        }}
      >
        {/* Pixel Question Block Pattern */}
        <div className="w-full h-full bg-[#f59e0b] border-2 border-[#b45309] flex items-center justify-center relative">
          {/* Rivets at 4 corners */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-[#78350f]" />
          <div className="absolute top-1 right-1 w-1 h-1 bg-[#78350f]" />
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#78350f]" />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#78350f]" />

          {/* Glowing pixel "?" */}
          <span className="font-pixel text-slate-900 font-black text-xl drop-shadow-[1px_1px_0_#fef08a] select-none">
            ?
          </span>
        </div>
      </motion.button>

      {label && (
        <span className="mt-2 text-[10px] font-pixel text-slate-400 tracking-wider flex items-center gap-1">
          <MessageSquare className="w-3 h-3 text-amber-400" />
          {label}
        </span>
      )}
    </div>
  );
}
