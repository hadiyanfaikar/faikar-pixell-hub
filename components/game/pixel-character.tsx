"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retroAudio } from "@/lib/retro-audio";
import { Sparkles, Heart } from "lucide-react";

interface PixelCharacterProps {
  className?: string;
  size?: number;
}

export function PixelCharacter({ className = "", size = 160 }: PixelCharacterProps) {
  const [isJumping, setIsJumping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const greetings = [
    "Hey there! I'm Hadiyan!",
    "Welcome to my Digital World!",
    "Feel free to click around & collect coins!",
    "Looking for my Spotify or GitHub?",
    "Press Enter World below to explore!",
    "You found my secret jump! +50 EXP",
  ];

  const handleCharacterClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setClickCount((prev) => prev + 1);
    setShowBubble(true);

    retroAudio.playJumpSound();
    setTimeout(() => {
      retroAudio.playCoinSound();
    }, 120);

    setTimeout(() => {
      setIsJumping(false);
    }, 450);

    setTimeout(() => {
      setShowBubble(false);
    }, 3200);
  };

  const currentGreeting = greetings[(clickCount - 1) % greetings.length] || greetings[0];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: -15, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute -top-16 z-40 bg-slate-900 border-2 border-sky-400 text-sky-200 px-3.5 py-2 shadow-[4px_4px_0_0_#0f172a] rounded-none font-pixel text-[10px] leading-relaxed max-w-xs text-center flex items-center gap-2 pointer-events-none"
          >
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0 animate-bounce" />
            <span>{currentGreeting}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Pixel Character Body */}
      <motion.button
        type="button"
        onClick={handleCharacterClick}
        animate={
          isJumping
            ? { y: [-35, 0], scaleY: [1.1, 0.9, 1] }
            : { y: [0, -6, 0] }
        }
        transition={
          isJumping
            ? { duration: 0.45, ease: "easeOut" }
            : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
        }
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="cursor-pointer focus:outline-none relative group"
        aria-label="Hadiyan Pixel Character - Click to Jump"
      >
        {/* Glow behind character */}
        <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full scale-75 group-hover:scale-100 transition-transform" />

        {/* 100% Original Pixel Art SVG of Hadiyan */}
        {/* Modern tech creator: Dark spiky hair, VR/glasses/headset, dark navy hoodie with neon teal & gold trim, modern high-top sneakers */}
        <svg
          width={size}
          height={size * 1.25}
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pixelated drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] relative z-10"
        >
          {/* Hair - Dark Charcoal / Jet Black Spikes */}
          <rect x="10" y="3" width="12" height="3" fill="#1e293b" />
          <rect x="8" y="5" width="16" height="3" fill="#1e293b" />
          <rect x="7" y="6" width="3" height="4" fill="#0f172a" />
          <rect x="9" y="4" width="3" height="2" fill="#334155" /> {/* Hair highlight */}
          <rect x="22" y="6" width="3" height="4" fill="#0f172a" />
          <rect x="13" y="2" width="6" height="2" fill="#1e293b" /> {/* Top hair tuft */}

          {/* Head / Face - Warm Skin Tone */}
          <rect x="9" y="8" width="14" height="10" fill="#fed7aa" />
          <rect x="10" y="7" width="12" height="2" fill="#fed7aa" />

          {/* Tech Glasses / Shades - Neon Cyan Frame with reflective lens */}
          <rect x="8" y="10" width="16" height="4" fill="#0284c7" />
          <rect x="9" y="11" width="6" height="2" fill="#38bdf8" /> {/* Left Lens */}
          <rect x="10" y="11" width="2" height="1" fill="#ffffff" /> {/* Lens glare */}
          <rect x="17" y="11" width="6" height="2" fill="#38bdf8" /> {/* Right Lens */}
          <rect x="18" y="11" width="2" height="1" fill="#ffffff" /> {/* Lens glare */}

          {/* Audio Headset - Over Ear Studio Cans (Orange/Gold accent) */}
          <rect x="6" y="9" width="3" height="6" fill="#f59e0b" />
          <rect x="23" y="9" width="3" height="6" fill="#f59e0b" />
          <rect x="7" y="10" width="1" height="4" fill="#fef08a" />
          <rect x="24" y="10" width="1" height="4" fill="#fef08a" />
          <rect x="8" y="4" width="2" height="5" fill="#475569" /> {/* Headband L */}
          <rect x="22" y="4" width="2" height="5" fill="#475569" /> {/* Headband R */}
          <rect x="10" y="3" width="12" height="1" fill="#475569" /> {/* Headband Arch */}

          {/* Cheeks & Friendly Smile */}
          <rect x="10" y="14" width="2" height="1" fill="#fca5a5" />
          <rect x="20" y="14" width="2" height="1" fill="#fca5a5" />
          <rect x="14" y="15" width="4" height="1" fill="#ea580c" /> {/* Smile */}
          <rect x="13" y="14" width="6" height="1" fill="#ea580c" />

          {/* Torso - Stylish Modern Navy & Cyberpunk Teal Hoodie */}
          <rect x="9" y="18" width="14" height="11" fill="#0f172a" />
          <rect x="8" y="19" width="16" height="9" fill="#1e293b" />
          <rect x="13" y="18" width="6" height="10" fill="#0284c7" /> {/* Teal Center Zip */}
          <rect x="15" y="19" width="2" height="9" fill="#38bdf8" /> {/* Neon zipper glow */}

          {/* Hoodie Drawstrings / Details */}
          <rect x="12" y="20" width="1" height="5" fill="#facc15" />
          <rect x="19" y="20" width="1" height="5" fill="#facc15" />

          {/* Left Arm & Hand (Waving slightly) */}
          <rect x="5" y="19" width="3" height="7" fill="#1e293b" />
          <rect x="4" y="25" width="4" height="3" fill="#fed7aa" /> {/* Left Hand */}

          {/* Right Arm & Hand */}
          <rect x="24" y="19" width="3" height="7" fill="#1e293b" />
          <rect x="24" y="25" width="4" height="3" fill="#fed7aa" /> {/* Right Hand */}

          {/* Belt / Waist */}
          <rect x="9" y="28" width="14" height="2" fill="#0284c7" />
          <rect x="14" y="28" width="4" height="2" fill="#facc15" /> {/* Belt Buckle */}

          {/* Legs / Pants - Dark Cargo Slacks */}
          <rect x="10" y="30" width="5" height="6" fill="#1e293b" />
          <rect x="17" y="30" width="5" height="6" fill="#1e293b" />
          <rect x="15" y="30" width="2" height="5" fill="#090d16" /> {/* Leg split */}

          {/* Modern High-Top Sneakers - White & Cyan with Gold Soles */}
          <rect x="8" y="36" width="7" height="3" fill="#f8fafc" />
          <rect x="7" y="38" width="8" height="2" fill="#0284c7" />
          <rect x="7" y="39" width="8" height="1" fill="#facc15" /> {/* Sole */}

          <rect x="17" y="36" width="7" height="3" fill="#f8fafc" />
          <rect x="17" y="38" width="8" height="2" fill="#0284c7" />
          <rect x="17" y="39" width="8" height="1" fill="#facc15" /> {/* Sole */}
        </svg>

        {/* Small shadow underneath */}
        <div className="w-20 h-3 bg-black/40 rounded-full mx-auto -mt-1 blur-[1px]" />
      </motion.button>

      {/* Interactive Helper Label */}
      <span className="mt-2 text-[9px] font-pixel text-slate-400/90 tracking-widest uppercase flex items-center gap-1">
        <Sparkles className="w-2.5 h-2.5 text-amber-400" />
        HADIYAN (CLICK TO JUMP)
      </span>
    </div>
  );
}
