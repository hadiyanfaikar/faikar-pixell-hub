"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PixelCastle } from "./game/castle";
import { PlatformIcon } from "./platform-icon";
import { PERSONAL_INFO } from "@/data/platforms";
import { retroAudio } from "@/lib/retro-audio";
import { Mail, Check, Copy, ExternalLink, Heart, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactCastleSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    retroAudio.playCoinSound();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // Ignored if blocked
    }
  };

  const handleConnectClick = () => {
    retroAudio.playSecretSound();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch {
      // Ignored
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@faikaar7",
      url: "https://instagram.com",
      icon: "instagram",
      color: "#E1306C",
    },
    {
      name: "Spotify",
      handle: "Hadiyan's Rotation",
      url: "https://open.spotify.com",
      icon: "spotify",
      color: "#1DB954",
    },
    {
      name: "GitHub",
      handle: "@hadiyanfaikar",
      url: "https://github.com",
      icon: "github",
      color: "#ffffff",
    },
    {
      name: "LinkedIn",
      handle: "in/hadiyanfaikar",
      url: "https://linkedin.com",
      icon: "linkedin",
      color: "#0A66C2",
    },
    {
      name: "Email",
      handle: PERSONAL_INFO.email,
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: "send",
      color: "#facc15",
      isEmail: true,
    },
  ];

  return (
    <section
      id="the-castle"
      className="w-full py-24 px-4 relative bg-gradient-to-b from-[#090d16] via-[#101b33] to-[#05080f] select-none border-t-4 border-slate-800"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Castle Pixel Art Display */}
        <div className="mb-6">
          <PixelCastle />
        </div>

        {/* Headings */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400 text-amber-300 font-pixel text-[10px] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>STAGE CLEAR // FINAL REALM</span>
        </div>

        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-slate-200 tracking-wide">
          THANKS FOR VISITING!
        </h2>

        <h3 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-amber-400 mt-2 tracking-wider drop-shadow-[2px_2px_0_#78350f]">
          YOU FOUND THE CASTLE
        </h3>

        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mt-4 leading-relaxed font-sans">
          You&apos;ve reached the final fortress of my digital world. Whether you want to collaborate, chat about games, share music, or just say hello — I&apos;d love to hear from you!
        </p>

        {/* Primary Contact CTA & Email Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={handleConnectClick}
            className="w-full sm:w-auto px-8 py-4 bg-rose-500 hover:bg-rose-400 text-white font-pixel text-xs sm:text-sm font-bold border-4 border-rose-700 shadow-[6px_6px_0_0_#4c0519] hover:shadow-[8px_8px_0_0_#4c0519] transition-all cursor-pointer active:translate-y-1 inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>CONNECT WITH ME</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-5 py-4 bg-slate-900 border-2 border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white font-pixel text-xs shadow-[4px_4px_0_0_#0f172a] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </div>

        {/* Essential Showcase Links Grid */}
        <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.isEmail ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={() => retroAudio.playClickSound()}
              className="flex items-center gap-3.5 p-4 bg-slate-900/90 border-2 border-slate-800 hover:border-amber-400 shadow-[3px_3px_0_0_#0f172a] hover:shadow-[4px_4px_0_0_#ca8a04] transition-all group cursor-pointer"
            >
              <div
                className="w-10 h-10 border flex items-center justify-center shrink-0 bg-slate-950 shadow-sm"
                style={{
                  borderColor: item.color,
                  color: item.color,
                }}
              >
                <PlatformIcon name={item.icon} className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-pixel text-xs text-white group-hover:text-amber-300 truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-400 font-mono truncate">{item.handle}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 shrink-0" />
            </a>
          ))}
        </div>

        {/* Footer Credit & Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Hadiyan Faikar &copy; {new Date().getFullYear()}</span>
          </div>

          <div className="font-pixel text-[9px] text-slate-600">
            ORIGINAL 8-BIT ENGINE // NO COPYRIGHTED SPRITES USED
          </div>
        </div>
      </div>
    </section>
  );
}
