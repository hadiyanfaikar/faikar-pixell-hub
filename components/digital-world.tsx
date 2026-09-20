"use client";

import React, { useState } from "react";
import { RetroHud } from "./game/hud";
import { FloatingNavbar } from "./navbar";
import { HeroSection } from "./hero";
import { WorldMapNav } from "./world-map";
import { SpotifyHeroCard } from "./spotify-hero-card";
import { DigitalLifeDashboard } from "./digital-life-dashboard";
import { NowPlayingSection } from "./now-playing";
import { CategorySection } from "./category-section";
import { ContactCastleSection } from "./contact";
import { SecretEasterEgg } from "./easter-egg";
import { WORLD_CATEGORIES, PLATFORMS } from "@/data/platforms";

export function DigitalWorldClient() {
  const [coins, setCoins] = useState(12);
  const [score, setScore] = useState(84200);

  const handleCoinCollect = () => {
    setCoins((prev) => prev + 1);
    setScore((prev) => prev + 100);
  };

  const handleBlockHit = () => {
    setCoins((prev) => prev + 1);
    setScore((prev) => prev + 250);
  };

  const handleEasterEggUnlock = () => {
    setCoins((prev) => prev + 50);
    setScore((prev) => prev + 9999);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#090d16] text-slate-100 overflow-x-hidden">
      {/* Top Retro HUD */}
      <RetroHud
        coins={coins}
        score={score}
        currentWorld="WORLD 1-1"
        onCoinClick={handleCoinCollect}
      />

      {/* Floating Modern Navigation */}
      <FloatingNavbar />

      {/* Anchor for top of page */}
      <div id="hero-top" />

      {/* Fullscreen Retro Opening Hero */}
      <HeroSection
        onCoinCollect={handleCoinCollect}
        onBlockHit={handleBlockHit}
      />

      {/* Interactive World Map & Stage Select */}
      <WorldMapNav />

      {/* Prominent Spotify Highlight Section (Section 6) */}
      <div className="max-w-7xl mx-auto w-full px-4 pt-12">
        <SpotifyHeroCard url="https://open.spotify.com" />
      </div>

      {/* "MY DIGITAL LIFE" Interactive Dashboard (Section 10) */}
      <DigitalLifeDashboard />

      {/* "NOW PLAYING" Retro Music Player (Section 9) */}
      <NowPlayingSection />

      {/* Visual Category Sections: World 1 through World 7 */}
      <div className="w-full">
        {WORLD_CATEGORIES.map((category, index) => {
          const categoryPlatforms = PLATFORMS.filter(
            (p) => p.category === category.id
          );
          const nextWorld = WORLD_CATEGORIES[index + 1];

          return (
            <CategorySection
              key={category.id}
              category={category}
              platforms={categoryPlatforms}
              nextWorldId={nextWorld ? nextWorld.id : "the-castle"}
              nextWorldName={nextWorld ? nextWorld.worldName : "THE CASTLE"}
              onCoinCollect={handleCoinCollect}
              onBlockHit={handleBlockHit}
            />
          );
        })}
      </div>

      {/* Final Castle & Contact Area (Section 20) */}
      <ContactCastleSection />

      {/* Secret Easter Egg (Section 12) */}
      <SecretEasterEgg onUnlock={handleEasterEggUnlock} />
    </div>
  );
}
