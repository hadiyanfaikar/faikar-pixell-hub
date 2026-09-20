"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retroAudio } from "@/lib/retro-audio";
import { Menu, X, Compass, Sparkles, Volume2, VolumeX } from "lucide-react";

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", targetId: "hero-top" },
  { label: "DASHBOARD", targetId: "digital-life" },
  { label: "SOCIAL", targetId: "world-social" },
  { label: "MUSIC", targetId: "world-music" },
  { label: "GAMING", targetId: "world-gaming" },
  { label: "WATCHING", targetId: "world-entertainment" },
  { label: "CREATIVE", targetId: "world-creative" },
  { label: "CONTACT", targetId: "the-castle" },
];

export function FloatingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
    retroAudio.playClickSound();
    setMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full sticky top-[41px] z-40 px-4 py-2 pointer-events-none select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand / Mini Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("hero-top")}
          className="flex items-center gap-2 bg-slate-900/90 border-2 border-slate-700 hover:border-amber-400 px-3 py-1.5 shadow-[3px_3px_0_0_#0f172a] cursor-pointer transition-colors"
        >
          <div className="w-3 h-3 bg-amber-400 border border-slate-900 animate-spin" />
          <span className="font-pixel text-[11px] text-white tracking-wider">
            HF.WORLD
          </span>
        </button>

        {/* Desktop Retro HUD Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/90 backdrop-blur-md border-2 border-slate-700 px-3 py-1.5 shadow-[4px_4px_0_0_#0f172a]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.targetId)}
              className="px-2.5 py-1 font-pixel text-[10px] text-slate-300 hover:text-amber-300 hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-600 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => {
              retroAudio.playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
            className="p-2 bg-slate-900 border-2 border-slate-700 hover:border-amber-400 text-slate-200 shadow-[3px_3px_0_0_#0f172a] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-sm mx-auto bg-slate-900/95 border-2 border-amber-400 p-4 shadow-[6px_6px_0_0_#0f172a] pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.targetId)}
                  className="w-full text-left py-2.5 px-3 font-pixel text-xs text-slate-200 hover:text-slate-950 hover:bg-amber-400 border border-slate-800 hover:border-amber-500 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
