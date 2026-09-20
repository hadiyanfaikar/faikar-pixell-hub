export interface Platform {
  id: string;
  name: string;
  category: "social" | "music" | "entertainment" | "gaming" | "creative" | "development" | "professional" | "other";
  description: string;
  url: string;
  handle?: string;
  icon: string;
  color: string;
  bgGlow: string;
  featured?: boolean;
  actionText?: string;
  stat?: string;
}

export interface WorldCategory {
  id: Platform["category"];
  worldNumber: string;
  worldName: string;
  themeTitle: string;
  description: string;
  icon: string;
  accentColor: string;
  skyGradient: string;
  pipeColor: string;
}

export const WORLD_CATEGORIES: WorldCategory[] = [
  {
    id: "social",
    worldNumber: "WORLD 1",
    worldName: "SOCIAL PLAINS",
    themeTitle: "Everyday Moments & Updates",
    description: "Daily snapshots, short-form thoughts, and personal updates across the web.",
    icon: "Share2",
    accentColor: "#f43f5e",
    skyGradient: "from-rose-500/10 via-sky-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
  {
    id: "music",
    worldNumber: "WORLD 2",
    worldName: "AUDIO GROVE",
    themeTitle: "Soundtracks & Sonic Vibes",
    description: "What's in my rotation, custom playlists, chill lo-fi beats, and musical exploration.",
    icon: "Headphones",
    accentColor: "#10b981",
    skyGradient: "from-emerald-500/10 via-teal-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
  {
    id: "entertainment",
    worldNumber: "WORLD 3",
    worldName: "STREAM VALLEY",
    themeTitle: "Video & Livestreams",
    description: "Long-form essays, tech streams, favorite series, and visual media consumption.",
    icon: "Tv",
    accentColor: "#ef4444",
    skyGradient: "from-red-500/10 via-amber-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
  {
    id: "gaming",
    worldNumber: "WORLD 4",
    worldName: "ARCADE DUNGEON",
    themeTitle: "Multiplayer & High Scores",
    description: "Steam backlog conqueror, Discord late-night voice channels, and indie game discoveries.",
    icon: "Gamepad2",
    accentColor: "#8b5cf6",
    skyGradient: "from-purple-500/10 via-indigo-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
  {
    id: "creative",
    worldNumber: "WORLD 5",
    worldName: "DESIGN LAB",
    themeTitle: "Visuals & Digital Canvas",
    description: "Graphic explorations, UI mockups, aesthetic boards, and visual design experimentation.",
    icon: "Palette",
    accentColor: "#f59e0b",
    skyGradient: "from-amber-500/10 via-orange-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
  {
    id: "development",
    worldNumber: "WORLD 6",
    worldName: "CODE FORGE",
    themeTitle: "Repositories & Builds",
    description: "Open source contributions, side experiments, software architecture, and tinkering.",
    icon: "Code2",
    accentColor: "#3b82f6",
    skyGradient: "from-blue-500/10 via-cyan-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
  {
    id: "professional",
    worldNumber: "WORLD 7",
    worldName: "CITADEL OF WORK",
    themeTitle: "Network & Career",
    description: "Professional networking, collaboration inquiries, and career milestones.",
    icon: "Briefcase",
    accentColor: "#0ea5e9",
    skyGradient: "from-sky-500/10 via-blue-500/10 to-transparent",
    pipeColor: "bg-emerald-600",
  },
];

/**
 * CENTRALIZED PLATFORM CONFIGURATION
 * Easily add, remove, toggle, or edit your URLs and details right here!
 */
export const PLATFORMS: Platform[] = [
  // --- MUSIC ---
  {
    id: "spotify",
    name: "Spotify",
    category: "music",
    description: "Daily listening, synthwave playlists, and focus beats.",
    handle: "faeee",
    url: "https://open.spotify.com/user/31hwmhglvb52abhrcyvqqqfeaq7i",
    icon: "Spotify",
    color: "#1DB954",
    bgGlow: "rgba(29, 185, 84, 0.15)",
    featured: true,
    actionText: "LISTEN ON SPOTIFY",
    stat: "High Rotation",
  },
  // --- SOCIAL ---
  {
    id: "instagram",
    name: "Instagram",
    category: "social",
    description: "Photos, stories, city walks, and everyday aesthetic captures.",
    handle: "@faikaar7",
    url: "https://instagram.com/faikaar7",
    icon: "Instagram",
    color: "#E1306C",
    bgGlow: "rgba(225, 48, 108, 0.15)",
    featured: true,
    actionText: "FOLLOW STORIES",
    stat: "Active Daily",
  },
  {
    id: "twitter",
    name: "X / Twitter",
    category: "social",
    description: "Quick thoughts, tech banter, bookmarks, and industry news.",
    handle: "@hadiyanfaikar",
    url: "https://x.com/earlyambrosia",
    icon: "Twitter",
    color: "#ffffff",
    bgGlow: "rgba(255, 255, 255, 0.1)",
    actionText: "READ THOUGHTS",
  },
  {
    id: "threads",
    name: "Threads",
    category: "social",
    description: "Casual community discussions and micro-blogging.",
    handle: "@sleepykaarr",
    url: "https://threads.com/sleepykaarr",
    icon: "AtSign",
    color: "#a855f7",
    bgGlow: "rgba(168, 85, 247, 0.15)",
    actionText: "JOIN THREAD",
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "social",
    description: "Creative short-form videos, humor, and digital culture.",
    handle: "@hadiyan",
    url: "https://tiktok.com",
    icon: "Video",
    color: "#00f2fe",
    bgGlow: "rgba(0, 242, 254, 0.15)",
    actionText: "WATCH CLIPS",
  },

  // --- ENTERTAINMENT / VIDEO ---
  {
    id: "youtube",
    name: "YouTube",
    category: "entertainment",
    description: "Video essays, game design analyses, devlogs, and tech reviews.",
    handle: "Hadiyan Faikar",
    url: "https://youtube.com/@faikar7",
    icon: "Youtube",
    color: "#FF0000", 
    bgGlow: "rgba(255, 0, 0, 0.15)",
    featured: true,
    actionText: "WATCH CHANNEL",
    stat: "Subscribed",
  },

  // --- GAMING ---
  {
    id: "steam",
    name: "Steam",
    category: "gaming",
    description: "PC gaming library, indie favorites, co-op adventures, and achievements.",
    handle: "Ryukaze",
    url: "https://steamcommunity.com/profiles/76561198274008139/",
    icon: "Steam",
    color: "#66c0f4",
    bgGlow: "rgba(102, 192, 244, 0.15)",
    featured: true,
    actionText: "VIEW STEAM PROFILE",
    stat: "Level 42",
  },
  {
    id: "discord",
    name: "Discord",
    category: "gaming",
    description: "Voice chats, developer servers, gaming squads, and chill lounge.",
    handle: "sleepykar",
    url: "https://discord.com/users/sleepykar",
    icon: "Discord",
    color: "#5865F2",
    bgGlow: "rgba(88, 101, 242, 0.15)",
    featured: true,
    actionText: "MESSAGE ON DISCORD",
    stat: "Online",
  },
  // --- DEVELOPMENT / DIGITAL ---
  {
    id: "github",
    name: "GitHub",
    category: "development",
    description: "Open source projects, repositories, coding experiments, and commits.",
    handle: "@hadiyanfaikar",
    url: "https://github.com/hadiyanfaikar",
    icon: "Github",
    color: "#ffffff",
    bgGlow: "rgba(255, 255, 255, 0.15)",
    featured: true,
    actionText: "VIEW REPOSITORIES",
    stat: "Active Contributor",
  },

  // --- PROFESSIONAL ---
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "professional",
    description: "Professional updates, career path, connections, and networking.",
    handle: "in/hadiyanfaikar",
    url: "https://linkedin.com/in/hadiyanfaikar",
    icon: "Linkedin",
    color: "#0A66C2",
    bgGlow: "rgba(10, 102, 194, 0.15)",
    featured: true,
    actionText: "CONNECT ON LINKEDIN",
    stat: "Verified",
  },

  // --- OTHER / UTILITIES ---
  {
    id: "reddit",
    name: "Reddit",
    category: "social",
    description: "Subreddits for tech, retro gaming, mechanical keyboards, and discussions.",
    handle: "u/faikar7",
    url: "https://reddit.com/u/faikar7",
    icon: "MessageSquare",
    color: "#FF4500",
    bgGlow: "rgba(255, 69, 0, 0.15)",
    actionText: "CHECK POSTS",
  },
  {
    id: "telegram",
    name: "Telegram",
    category: "social",
    description: "Instant messaging channel for direct updates and fast chat.",
    handle: "@hadiyanfaikar",
    url: "https://t.me/hadiyanfaikar",
    icon: "Send",
    color: "#229ED9",
    bgGlow: "rgba(34, 158, 217, 0.15)",
    actionText: "CHAT ON TELEGRAM",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "social",
    description: "Direct messaging for personal and fast communication.",
    handle: "Hadiyan Faikar",
    url: "https://wa.me",
    icon: "PhoneCall",
    color: "#25D366",
    bgGlow: "rgba(37, 211, 102, 0.15)",
    actionText: "SEND WHATSAPP",
  },
];

export const PERSONAL_INFO = {
  name: "Hadiyan Faikar",
  role: "Digital Explorer & Creator",
  tagline: "WELCOME TO MY DIGITAL WORLD",
  subTagline: "EXPLORE MY WORLD. FIND ME ONLINE.",
  location: "Indonesia (UTC+7)",
  email: "contact@hadiyanfaikar.me",
  status: "Exploring the Digital Realm",
  worldVersion: "v2.6 Retro Edition",
  coinsGoal: 100,
};
