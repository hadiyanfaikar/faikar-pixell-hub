"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ExternalLink, Disc3, Radio } from "lucide-react";
import { retroAudio } from "@/lib/retro-audio";
import { PlatformIcon } from "./platform-icon";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  bpm: number;
}

const CHILL_TRACKS: Track[] = [
  {
    id: "track-1",
    title: "Overworld Horizons",
    artist: "8-Bit Chiptune Synth",
    album: "Digital World Vol. 1",
    genre: "Chiptune / Lo-Fi",
    bpm: 96,
  },
  {
    id: "track-2",
    title: "Midnight Tokyo Glitch",
    artist: "Synthwave Beats",
    album: "Neon Odyssey",
    genre: "Synthwave",
    bpm: 110,
  },
  {
    id: "track-3",
    title: "Rainy Afternoon in Shibuya",
    artist: "Bedroom Producers Collective",
    album: "Lo-Fi Beats to Relax/Code",
    genre: "Chillhop",
    bpm: 82,
  },
];

export function NowPlayingSection() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);

  const track = CHILL_TRACKS[currentTrackIndex];

  // Synthesizes a friendly 8-bit arpeggio melody loop when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    retroAudio.playClickSound();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    retroAudio.playClickSound();
    setCurrentTrackIndex((prev) => (prev + 1) % CHILL_TRACKS.length);
    setProgress(0);
  };

  const prevTrack = () => {
    retroAudio.playClickSound();
    setCurrentTrackIndex((prev) => (prev - 1 + CHILL_TRACKS.length) % CHILL_TRACKS.length);
    setProgress(0);
  };

  return (
    <section id="now-playing" className="w-full py-16 px-4 relative select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/70 border border-emerald-500/50 text-emerald-400 font-pixel text-[10px] mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>SOUNDTRACK OF MY WORLD</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-slate-100 uppercase tracking-wide">
            NOW PLAYING
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Music is the core soundtrack of my day. Explore what I listen to or trigger retro 8-bit audio vibes.
          </p>
        </div>

        {/* Retro Stereo / Handheld Player Frame */}
        <div className="bg-slate-900 border-4 border-slate-700 shadow-[8px_8px_0_0_#0f172a] p-6 sm:p-8 relative overflow-hidden">
          {/* Top Decorative Rivets & Branding */}
          <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 border border-red-700 rounded-none animate-pulse" />
              <span className="font-pixel text-[10px] text-slate-400 tracking-wider">
                RETRO STEREO DECK // HF-808
              </span>
            </div>

            {/* Direct Spotify Profile Link */}
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => retroAudio.playClickSound()}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1DB954]/10 border border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black transition-colors font-pixel text-[9px]"
            >
              <PlatformIcon name="spotify" className="w-3.5 h-3.5" />
              <span>OPEN SPOTIFY</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Pixel Album Art Vinyl Display */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-emerald-900 via-slate-900 to-indigo-950 border-4 border-emerald-500/70 p-4 shadow-[4px_4px_0_0_#064e3b] relative flex flex-col items-center justify-center group">
                {/* Vinyl Record Center */}
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-32 h-32 rounded-full border-4 border-slate-800 bg-[#0c121e] flex items-center justify-center relative shadow-inner"
                >
                  {/* Grooves */}
                  <div className="w-24 h-24 rounded-full border border-slate-700/60" />
                  <div className="w-16 h-16 rounded-full border border-slate-700/40" />
                  {/* Center Label */}
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                    <Disc3 className="w-6 h-6 animate-spin" />
                  </div>
                </motion.div>

                {/* Pixel Corner Tabs */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-emerald-400" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400" />
                <div className="absolute bottom-1 left-1 w-2 h-2 bg-emerald-400" />
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-emerald-400" />
              </div>

              <div className="mt-3 text-[10px] font-pixel text-emerald-400/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>CHILL SYNTH ROTATION</span>
              </div>
            </div>

            {/* Track Info & Controls */}
            <div className="md:col-span-7 flex flex-col justify-between">
              {/* LCD Display Box */}
              <div className="bg-[#05110d] border-2 border-emerald-600/80 p-4 mb-6 shadow-inner font-mono">
                <div className="flex items-center justify-between text-[10px] text-emerald-400/70 mb-2 font-pixel">
                  <span>AUDIO STREAM: ONLINE</span>
                  <span>{track.genre}</span>
                </div>

                <h3 className="text-emerald-300 font-pixel text-sm sm:text-base font-bold truncate">
                  {track.title}
                </h3>
                <p className="text-emerald-400/90 text-xs mt-1">
                  Artist: <span className="text-white font-medium">{track.artist}</span>
                </p>
                <p className="text-emerald-500/70 text-[11px] mt-0.5">
                  Album: {track.album} • {track.bpm} BPM
                </p>

                {/* Animated Retro Equalizer Bars */}
                <div className="flex items-end gap-1.5 h-8 mt-4 pt-1 border-t border-emerald-950">
                  {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 60, 100, 50, 75, 30].map(
                    (height, idx) => (
                      <motion.div
                        key={idx}
                        className="flex-1 bg-emerald-400/80 min-w-[4px]"
                        animate={
                          isPlaying
                            ? {
                                height: [
                                  `${Math.max(15, (height * 0.4) % 100)}%`,
                                  `${height}%`,
                                  `${Math.max(20, (height * 0.7) % 100)}%`,
                                ],
                              }
                            : { height: "15%" }
                        }
                        transition={{
                          repeat: Infinity,
                          duration: 0.5 + (idx % 4) * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Progress Slider */}
              <div className="mb-6">
                <div className="w-full h-2.5 bg-slate-800 border border-slate-700 relative overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-400 mt-1">
                  <span>01:24</span>
                  <span className="font-pixel text-emerald-400">{progress}%</span>
                  <span>03:45</span>
                </div>
              </div>

              {/* Retro Control Buttons */}
              <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={prevTrack}
                  aria-label="Previous Track"
                  className="p-3 bg-slate-800 border-2 border-slate-600 hover:border-amber-400 text-slate-200 cursor-pointer shadow-[2px_2px_0_0_#0f172a] active:translate-y-0.5"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-pixel text-xs border-2 border-emerald-300 cursor-pointer shadow-[3px_3px_0_0_#064e3b] active:translate-y-0.5 flex items-center gap-2 font-bold"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-black" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-black" />
                      <span>PLAY</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={nextTrack}
                  aria-label="Next Track"
                  className="p-3 bg-slate-800 border-2 border-slate-600 hover:border-amber-400 text-slate-200 cursor-pointer shadow-[2px_2px_0_0_#0f172a] active:translate-y-0.5"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
