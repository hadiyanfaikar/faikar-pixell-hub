"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PLATFORMS, Platform } from "@/data/platforms";
import { PlatformCard } from "./platform-card";
import { retroAudio } from "@/lib/retro-audio";
import {
  Search,
  Music,
  Gamepad2,
  Tv,
  Share2,
  Code2,
  Palette,
  Globe,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

interface CategoryTab {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  categoryFilter: Platform["category"] | "all";
}

const DASHBOARD_TABS: CategoryTab[] = [
  { id: "all", name: "ALL PLATFORMS", icon: Sparkles, color: "#facc15", categoryFilter: "all" },
  { id: "music", name: "MUSIC", icon: Music, color: "#10b981", categoryFilter: "music" },
  { id: "gaming", name: "GAMING", icon: Gamepad2, color: "#8b5cf6", categoryFilter: "gaming" },
  { id: "watching", name: "WATCHING", icon: Tv, color: "#ef4444", categoryFilter: "entertainment" },
  { id: "social", name: "SOCIAL", icon: Share2, color: "#f43f5e", categoryFilter: "social" },
  { id: "coding", name: "CODING", icon: Code2, color: "#3b82f6", categoryFilter: "development" },
  { id: "creating", name: "CREATING", icon: Palette, color: "#f59e0b", categoryFilter: "creative" },
  { id: "browsing", name: "BROWSING", icon: Globe, color: "#06b6d4", categoryFilter: "other" },
];

export function DigitalLifeDashboard() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (tabId: string) => {
    retroAudio.playClickSound();
    setActiveTab(tabId);
  };

  const selectedCategory = DASHBOARD_TABS.find((t) => t.id === activeTab);

  const filteredPlatforms = PLATFORMS.filter((platform) => {
    const matchesCategory =
      activeTab === "all" ||
      (selectedCategory && platform.category === selectedCategory.categoryFilter);

    const matchesSearch =
      searchQuery.trim() === "" ||
      platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (platform.handle && platform.handle.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="digital-life" className="w-full py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b-2 border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-pixel text-amber-400 mb-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>INTERACTIVE DASHBOARD</span>
            </div>
            <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wide">
              MY DIGITAL LIFE
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Select a category to inspect connected accounts, active services, and creative hubs.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search platform or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-900/90 border-2 border-slate-700 focus:border-amber-400 text-xs text-slate-200 placeholder:text-slate-500 rounded-none font-mono focus:outline-none shadow-[2px_2px_0_0_#0f172a]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dashboard Category Tabs (Motion Pill Selector) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {DASHBOARD_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`group relative flex items-center gap-2 px-3.5 py-2 shrink-0 border-2 font-pixel text-[10px] sm:text-xs transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-800 text-white border-amber-400 shadow-[3px_3px_0_0_#ca8a04]"
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                <Icon
                  className="w-3.5 h-3.5 transition-transform group-hover:scale-110"
                  style={{ color: tab.color }}
                />
                <span>{tab.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rotate-45"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Platform Grid with Motion */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPlatforms.map((platform) => (
              <motion.div
                key={platform.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <PlatformCard platform={platform} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPlatforms.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 border-2 border-dashed border-slate-800 p-8">
            <p className="font-pixel text-xs text-amber-400 mb-2">NO PLATFORMS FOUND IN THIS SECTOR</p>
            <p className="text-slate-400 text-xs">
              Try modifying your search or select &ldquo;ALL PLATFORMS&rdquo; above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
