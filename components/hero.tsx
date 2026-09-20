"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelCharacter } from "./game/pixel-character";
import { PixelCoin } from "./game/coin";
import { QuestionBlock } from "./game/question-block";
import { retroAudio } from "@/lib/retro-audio";
import { ArrowDown, Sparkles, Compass, MapPin, Gamepad } from "lucide-react";

interface HeroProps {
  onCoinCollect?: () => void;
  onBlockHit?: () => void;
}

export function HeroSection({ onCoinCollect, onBlockHit }: HeroProps) {
  const handleEnterWorld = () => {
    retroAudio.playWarpSound();
    const elem = document.getElementById("digital-life");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#060a12] via-[#0f1d3a] to-[#090d16] select-none pt-12 pb-16 px-4">
      {/* Background Pixel Stars & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      {/* Animated Floating Clouds */}
      <div className="absolute top-12 left-0 w-full pointer-events-none overflow-hidden h-40">
        {/* Cloud 1 */}
        <motion.div
          animate={{ x: ["-10vw", "110vw"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 flex flex-col items-center opacity-40"
        >
          <div className="w-24 h-6 bg-sky-200 shadow-[4px_4px_0_0_#93c5fd]" />
          <div className="w-36 h-6 bg-sky-200 shadow-[4px_4px_0_0_#93c5fd] -mt-2" />
        </motion.div>

        {/* Cloud 2 */}
        <motion.div
          animate={{ x: ["110vw", "-20vw"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 flex flex-col items-center opacity-30"
        >
          <div className="w-20 h-5 bg-sky-300 shadow-[4px_4px_0_0_#38bdf8]" />
          <div className="w-32 h-5 bg-sky-300 shadow-[4px_4px_0_0_#38bdf8] -mt-1" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto w-full my-auto z-10 flex flex-col items-center text-center">
        {/* World Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/90 border-2 border-amber-400 text-amber-300 font-pixel text-[10px] md:text-xs mb-6 shadow-[3px_3px_0_0_#ca8a04]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          <span>WORLD 1-1 // PERSONAL DIGITAL HUB</span>
        </motion.div>

        {/* Character & Floating Elements Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative my-4 flex flex-col items-center"
        >
          {/* Floating Mystery Blocks & Collectible Coins Left & Right */}
          <div className="hidden sm:flex absolute -left-28 top-8 items-center gap-3">
            <PixelCoin onCollect={onCoinCollect} size="lg" />
            <QuestionBlock onHit={onBlockHit} label="CLICK ME" />
          </div>

          <div className="hidden sm:flex absolute -right-28 top-8 items-center gap-3">
            <QuestionBlock onHit={onBlockHit} label="SECRET" />
            <PixelCoin onCollect={onCoinCollect} size="lg" />
          </div>

          {/* Original Pixel Character Avatar */}
          <PixelCharacter size={160} />

          {/* Floating Grass Platform for Character */}
          <div className="mt-1 flex flex-col items-center">
            {/* Lush Pixel Grass Rim */}
            <div className="w-64 sm:w-72 h-4 bg-emerald-500 border-t-2 border-l-2 border-emerald-300 border-r-2 border-emerald-700 relative shadow-sm">
              {/* Grass blades */}
              <div className="absolute -top-1.5 left-4 w-2 h-2 bg-emerald-400 rotate-45" />
              <div className="absolute -top-1.5 left-16 w-2 h-2 bg-emerald-400 rotate-45" />
              <div className="absolute -top-1.5 right-8 w-2 h-2 bg-emerald-400 rotate-45" />
              <div className="absolute -top-1.5 right-20 w-2 h-2 bg-emerald-400 rotate-45" />
            </div>

            {/* Earth & Stone Brick Layer */}
            <div className="w-64 sm:w-72 h-8 bg-[#78350f] border-b-4 border-[#451a03] border-x-2 border-[#92400e] flex items-center justify-around px-2 shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
              <div className="w-6 h-3 bg-[#92400e] rounded-none shadow-inner" />
              <div className="w-8 h-3 bg-[#5c2409] rounded-none" />
              <div className="w-6 h-3 bg-[#92400e] rounded-none" />
              <div className="w-8 h-3 bg-[#5c2409] rounded-none" />
            </div>
          </div>
        </motion.div>

        {/* Mobile Interactive Elements (Visible on small screens) */}
        <div className="flex sm:hidden items-center justify-center gap-4 my-3">
          <PixelCoin onCollect={onCoinCollect} size="md" />
          <QuestionBlock onHit={onBlockHit} />
          <PixelCoin onCollect={onCoinCollect} size="md" />
        </div>

        {/* Hero Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <h1 className="font-pixel text-3xl sm:text-4xl md:text-6xl text-white tracking-wide uppercase drop-shadow-[4px_4px_0_#0f172a]">
            HADIYAN FAIKAR
          </h1>

          <p className="font-pixel text-xs sm:text-sm md:text-base text-amber-400 mt-3 tracking-wider">
            WELCOME TO MY DIGITAL WORLD
          </p>

          <div className="mt-4 flex items-center justify-center font-pixel text-[10px] sm:text-xs md:text-xs text-slate-300 tracking-[0.2em] sm:tracking-[0.25em] uppercase select-none px-2">
            <span className="text-amber-400 mr-2 sm:mr-2.5 font-bold select-none">&gt;</span>
            <span className="whitespace-normal sm:whitespace-nowrap text-slate-300">
              EXPLORE MY WORLD. FIND ME ONLINE.
            </span>
            <span className="inline-block animate-cursor-blink text-amber-400 ml-1.5 sm:ml-2 select-none" aria-hidden="true">
              ▮
            </span>
          </div>
        </motion.div>

        {/* CTA Button: ENTER WORLD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <button
            type="button"
            onClick={handleEnterWorld}
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-pixel text-xs sm:text-sm font-bold tracking-wider uppercase border-4 border-amber-600 shadow-[6px_6px_0_0_#78350f] hover:shadow-[8px_8px_0_0_#78350f] transition-all cursor-pointer active:translate-y-1 flex items-center justify-center gap-2"
          >
            <span>ENTER WORLD</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            href="#the-castle"
            onClick={() => retroAudio.playClickSound()}
            className="w-full sm:w-auto px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-pixel text-xs tracking-wider uppercase border-2 border-slate-700 hover:border-slate-500 shadow-[4px_4px_0_0_#0f172a] transition-colors"
          >
            <span>CASTLE (CONTACT)</span>
          </a>
        </motion.div>

        {/* Info Badges */}
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 border border-slate-800">
            <MapPin className="w-3 h-3 text-rose-400" />
            INDONESIA (UTC+7)
          </span>
          <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 border border-slate-800">
            <Gamepad className="w-3 h-3 text-purple-400" />
            CLASSIC 8-BIT ENGINE
          </span>
          <span className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            STATUS: ONLINE
          </span>
        </div>
      </div>

      {/* Decorative Ground Platform at bottom */}
      <div className="w-full mt-8 select-none">
        <div className="w-full h-3 bg-emerald-600 border-t-2 border-emerald-400" />
        <div className="w-full h-5 bg-[#78350f] border-t-2 border-[#451a03] flex items-center justify-center gap-8 overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-6 h-2 bg-[#92400e] shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
