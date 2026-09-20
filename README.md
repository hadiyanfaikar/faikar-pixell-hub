# 🎮 Hadiyan Faikar — My Digital World

A personal digital hub website for **Hadiyan Faikar**, combining modern web design with an original retro 8-bit/16-bit platform-game aesthetic.

---

## 🌟 Features

- **Personal Digital Hub / Link-in-Bio**: Cleanly organizes all of Hadiyan's platforms, social media, gaming profiles, music streams, developer repositories, and creative portfolios.
- **Original Retro Game Aesthetic**:
  - 100% original SVG pixel-art character representing Hadiyan (no Mario or copyrighted assets).
  - Floating coin blocks, interactive mystery question blocks, warp pipes, and an animated castle.
  - Built-in Web Audio API chip-tune sound synthesizer (coin sounds, warp sounds, jump sounds, fanfare) with instant mute/unmute control.
- **Dedicated Spotify Spotlight & "NOW PLAYING" Retro Stereo Player**:
  - Prominent Spotify launch card.
  - Retro audio player with animated equalizer bars, vinyl disc animation, and playback controls.
- **"MY DIGITAL LIFE" Interactive Dashboard**:
  - Filterable by `🎵 MUSIC`, `🎮 GAMING`, `📺 WATCHING`, `📱 SOCIAL`, `💻 CODING`, `🎨 CREATING`, `🌐 BROWSING`.
  - Real-time search filter for quick platform discovery.
- **Interactive World Map & Stage Select**:
  - Visual zone navigation across 7 worlds down to the final Castle.
- **Secret Konami Code Easter Egg**:
  - Type `↑ ↑ ↓ ↓ ← → ← → B A` or click the cheat controller in the bottom corner to unlock a retro achievement with rainbow confetti!
- **Retro HUD Bar**:
  - Live local clock, dynamic coin counter, score counter, audio SFX toggle.

---

## ⚙️ How to Update Your Links

All platforms and personal details are centralized in a single file:

```text
data/platforms.ts
```

To update any URL, username, description, or add/remove platforms, simply edit that file:

```typescript
export const PLATFORMS: Platform[] = [
  {
    id: "spotify",
    name: "Spotify",
    category: "music",
    description: "Daily listening and synthwave playlists.",
    handle: "@hadiyanfaikar",
    url: "YOUR_SPOTIFY_URL_HERE",
    icon: "Spotify",
    color: "#1DB954",
    bgGlow: "rgba(29, 185, 84, 0.15)",
  },
  // Add or remove any platform with ease!
];
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Brand Vectors
- **Audio**: Custom Web Audio API Chip-tune Synthesizer
- **Confetti**: Canvas-Confetti
