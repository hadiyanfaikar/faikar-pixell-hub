"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retroAudio } from "@/lib/retro-audio";
import { Trophy, Sparkles, X, Star, Gamepad2 } from "lucide-react";
import confetti from "canvas-confetti";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function SecretEasterEgg({ onUnlock }: { onUnlock?: () => void }) {
  const [inputIndex, setInputIndex] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showController, setShowController] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const expectedKey = KONAMI_SEQUENCE[inputIndex];

      if (key.toLowerCase() === expectedKey.toLowerCase()) {
        const nextIndex = inputIndex + 1;
        if (nextIndex === KONAMI_SEQUENCE.length) {
          triggerSecret();
          setInputIndex(0);
        } else {
          setInputIndex(nextIndex);
        }
      } else {
        setInputIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputIndex]);

  const triggerSecret = () => {
    setIsUnlocked(true);
    retroAudio.playSecretSound();
    if (onUnlock) onUnlock();

    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#facc15", "#38bdf8", "#f43f5e", "#22c55e", "#a855f7"],
      });
    } catch {
      // Ignored
    }
  };

  return (
    <>
      {/* Floating Retro Secret Cheat Button (bottom corner) */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setShowController(!showController)}
          aria-label="Secret Controller Helper"
          className="p-2.5 bg-slate-900/90 border-2 border-slate-700 hover:border-amber-400 text-slate-400 hover:text-amber-300 shadow-[3px_3px_0_0_#0f172a] rounded-none cursor-pointer transition-colors"
          title="Secret Code Helper"
        >
          <Gamepad2 className="w-5 h-5" />
        </button>

        {/* Mini Cheat Controller for Mobile / Touch / Quick Trigger */}
        <AnimatePresence>
          {showController && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-12 right-0 bg-slate-900 border-2 border-amber-400 p-4 shadow-[6px_6px_0_0_#0f172a] w-64 text-center font-pixel text-[10px] text-slate-300"
            >
              <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-800">
                <span className="text-amber-400">KONAMI CHEAT PAD</span>
                <button
                  type="button"
                  onClick={() => setShowController(false)}
                  className="text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[9px] text-slate-400 mb-3 font-mono">
                Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
              </p>
              <button
                type="button"
                onClick={() => {
                  triggerSecret();
                  setShowController(false);
                }}
                className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold border-2 border-amber-600 shadow-[2px_2px_0_0_#78350f] cursor-pointer"
              >
                AUTO-TRIGGER CHEAT
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Achievement Unlocked Modal */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-slate-900 border-4 border-amber-400 p-6 sm:p-8 max-w-md w-full text-center shadow-[10px_10px_0_0_#78350f] relative font-pixel"
            >
              {/* Corner Star Embellishments */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rotate-45" />
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-400 rotate-45" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-400 rotate-45" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-400 rotate-45" />

              <div className="w-16 h-16 mx-auto mb-4 bg-amber-400 text-slate-950 flex items-center justify-center border-2 border-amber-600 shadow-md">
                <Trophy className="w-8 h-8 animate-bounce" />
              </div>

              <div className="inline-block px-2.5 py-1 bg-amber-400/20 text-amber-300 text-[10px] border border-amber-400 mb-2">
                SECRET EASTER EGG FOUND
              </div>

              <h3 className="text-xl text-white font-bold mb-2">
                CHEST UNLOCKED!
              </h3>

              <p className="text-xs text-amber-200 mb-4 leading-relaxed font-sans">
                You discovered the retro Konami sequence! You&apos;ve been awarded the <strong>Golden Star of Exploration</strong> and +9999 bonus points to your world score.
              </p>

              <div className="p-3 bg-slate-950 border-2 border-slate-800 text-[10px] text-emerald-400 font-mono mb-6 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-spin" />
                <span>ACHIEVEMENT: 8-BIT RETRO MASTER</span>
              </div>

              <button
                type="button"
                onClick={() => setIsUnlocked(false)}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold border-2 border-amber-600 shadow-[3px_3px_0_0_#78350f] cursor-pointer"
              >
                COLLECT REWARD & CONTINUE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
