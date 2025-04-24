import { AppItem, Platform } from '../types';

export const MOCK_APPS: AppItem[] = [
  {
    id: '1',
    name: 'Cosmic Defender',
    icon: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'Defend the galaxy from alien invaders in this action-packed space shooter game. Upgrade your ship, unlock powerful weapons, and save the universe from destruction. Features stunning graphics and immersive gameplay that will keep you entertained for hours.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/cosmic-defender-win', size: '256MB' },
      Mac: { downloadLink: 'https://example.com/cosmic-defender-mac', size: '275MB' },
      Linux: { downloadLink: 'https://example.com/cosmic-defender-linux', size: '242MB' },
      Android: { downloadLink: 'https://example.com/cosmic-defender-android', size: '125MB' },
      iOS: { downloadLink: 'https://example.com/cosmic-defender-ios', size: '138MB' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://cosmicdefender.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: 'https://github.com/example/cosmic-defender', size: '45MB' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'games',
    author: 'Galactic Studios',
    rating: 4.7,
    downloads: 1500000,
    lastUpdated: '2025-01-15'
  },
  {
    id: '2',
    name: 'StarNote',
    icon: 'https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A beautiful note-taking app with cloud synchronization, rich text editing, and organizational features. Keep your thoughts organized with tags, folders, and powerful search capabilities. Perfect for students, professionals, and anyone who wants to keep their ideas in one place.',
    screenshotLinks: [
      'https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5797909/pexels-photo-5797909.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5797910/pexels-photo-5797910.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/starnote-win', size: '64MB' },
      Mac: { downloadLink: 'https://example.com/starnote-mac', size: '68MB' },
      Linux: { downloadLink: 'https://example.com/starnote-linux', size: '58MB' },
      Android: { downloadLink: 'https://example.com/starnote-android', size: '32MB' },
      iOS: { downloadLink: 'https://example.com/starnote-ios', size: '35MB' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: 'https://example.com/starnote-extension', size: '2MB' },
      Webapp: { downloadLink: 'https://starnote.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'productivity',
    author: 'Nebula Software',
    rating: 4.5,
    downloads: 750000,
    lastUpdated: '2024-12-22'
  },
  {
    id: '3',
    name: 'AstroChat',
    icon: 'https://images.pexels.com/photos/7034502/pexels-photo-7034502.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Connect with friends and family across the galaxy with AstroChat. Features include real-time messaging, voice and video calls, file sharing, and end-to-end encryption for secure communications.',
    screenshotLinks: [
      'https://images.pexels.com/photos/7034502/pexels-photo-7034502.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7034501/pexels-photo-7034501.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7034500/pexels-photo-7034500.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/astrochat-win', size: '85MB' },
      Mac: { downloadLink: 'https://example.com/astrochat-mac', size: '92MB' },
      Linux: { downloadLink: 'https://example.com/astrochat-linux', size: '78MB' },
      Android: { downloadLink: 'https://example.com/astrochat-android', size: '45MB' },
      iOS: { downloadLink: 'https://example.com/astrochat-ios', size: '48MB' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://astrochat.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'social',
    author: 'Orbit Technologies',
    rating: 4.2,
    downloads: 5000000,
    lastUpdated: '2025-02-01'
  },
  {
    id: '4',
    name: 'Planet Explorer',
    icon: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'Explore the wonders of our solar system and beyond with Planet Explorer. This educational app provides detailed information about planets, stars, galaxies, and other celestial objects. Perfect for astronomy enthusiasts of all ages.',
    screenshotLinks: [
      'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/planet-explorer-win', size: '325MB' },
      Mac: { downloadLink: 'https://example.com/planet-explorer-mac', size: '342MB' },
      Linux: { downloadLink: 'https://example.com/planet-explorer-linux', size: '315MB' },
      Android: { downloadLink: 'https://example.com/planet-explorer-android', size: '168MB' },
      iOS: { downloadLink: 'https://example.com/planet-explorer-ios', size: '173MB' },
      AndroidTV: { downloadLink: 'https://example.com/planet-explorer-androidtv', size: '180MB' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://planetexplorer.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'education',
    author: 'Stellar Education',
    rating: 4.9,
    downloads: 2000000,
    lastUpdated: '2024-11-30'
  },
  {
    id: '5',
    name: 'Orbital IDE',
    icon: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A powerful integrated development environment for coding enthusiasts and professional developers. Features include syntax highlighting, intelligent code completion, debugging tools, and support for multiple programming languages.',
    screenshotLinks: [
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/orbital-ide-win', size: '198MB' },
      Mac: { downloadLink: 'https://example.com/orbital-ide-mac', size: '212MB' },
      Linux: { downloadLink: 'https://example.com/orbital-ide-linux', size: '185MB' },
      Android: { downloadLink: '', size: '' },
      iOS: { downloadLink: '', size: '' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://orbital-ide.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: 'https://github.com/example/orbital-ide', size: '125MB' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'development',
    author: 'Eclipse Solutions',
    rating: 4.6,
    downloads: 500000,
    lastUpdated: '2025-01-20',
    status: 'Beta'
  },
  {
    id: '6',
    name: 'Galactic Weather',
    icon: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Get accurate weather forecasts for your location with beautiful visualizations and detailed data. Features include hourly and 10-day forecasts, severe weather alerts, radar maps, and customizable widgets.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2775118/pexels-photo-2775118.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/galactic-weather-win', size: '45MB' },
      Mac: { downloadLink: 'https://example.com/galactic-weather-mac', size: '48MB' },
      Linux: { downloadLink: 'https://example.com/galactic-weather-linux', size: '42MB' },
      Android: { downloadLink: 'https://example.com/galactic-weather-android', size: '22MB' },
      iOS: { downloadLink: 'https://example.com/galactic-weather-ios', size: '25MB' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: 'https://example.com/galactic-weather-extension', size: '1.5MB' },
      Webapp: { downloadLink: 'https://galacticweather.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'utilities',
    author: 'Meteor Inc.',
    rating: 4.4,
    downloads: 3000000,
    lastUpdated: '2025-02-15'
  },
  {
    id: '7',
    name: 'Nebula Music',
    icon: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Stream and download millions of songs, create playlists, and discover new music with Nebula Music. Features include high-quality audio, offline listening, personalized recommendations, and integration with smart speakers.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/nebula-music-win', size: '75MB' },
      Mac: { downloadLink: 'https://example.com/nebula-music-mac', size: '82MB' },
      Linux: { downloadLink: 'https://example.com/nebula-music-linux', size: '68MB' },
      Android: { downloadLink: 'https://example.com/nebula-music-android', size: '35MB' },
      iOS: { downloadLink: 'https://example.com/nebula-music-ios', size: '38MB' },
      AndroidTV: { downloadLink: 'https://example.com/nebula-music-androidtv', size: '42MB' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://nebulamusic.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'music',
    author: 'Pulsar Entertainment',
    rating: 4.8,
    downloads: 10000000,
    lastUpdated: '2025-01-05'
  },
  {
    id: '8',
    name: 'Interstellar Arcade',
    icon: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A collection of retro and modern arcade games in one app. Includes classics like Space Invaders, Asteroids, and Pac-Man, as well as new original games. Challenge friends, compete on leaderboards, and unlock achievements.',
    screenshotLinks: [
      'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/interstellar-arcade-win', size: '135MB' },
      Mac: { downloadLink: 'https://example.com/interstellar-arcade-mac', size: '142MB' },
      Linux: { downloadLink: 'https://example.com/interstellar-arcade-linux', size: '128MB' },
      Android: { downloadLink: 'https://example.com/interstellar-arcade-android', size: '65MB' },
      iOS: { downloadLink: 'https://example.com/interstellar-arcade-ios', size: '72MB' },
      AndroidTV: { downloadLink: 'https://example.com/interstellar-arcade-androidtv', size: '75MB' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://interstellar-arcade.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'games',
    author: 'Galactic Studios',
    rating: 4.7,
    downloads: 2500000,
    lastUpdated: '2024-12-10'
  },
  {
    id: '9',
    name: 'Quantum Scanner',
    icon: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Transform your device into a powerful document scanner. Scan receipts, documents, and photos with automatic edge detection, perspective correction, and OCR (Optical Character Recognition) technology.',
    screenshotLinks: [
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3847520/pexels-photo-3847520.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/quantum-scanner-win', size: '55MB' },
      Mac: { downloadLink: 'https://example.com/quantum-scanner-mac', size: '58MB' },
      Linux: { downloadLink: 'https://example.com/quantum-scanner-linux', size: '52MB' },
      Android: { downloadLink: 'https://example.com/quantum-scanner-android', size: '25MB' },
      iOS: { downloadLink: 'https://example.com/quantum-scanner-ios', size: '28MB' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: '', size: '' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'utilities',
    author: 'Nova Technologies',
    rating: 4.5,
    downloads: 1200000,
    lastUpdated: '2025-01-25',
    status: 'Testing'
  },
  {
    id: '10',
    name: 'Cosmic Editor',
    icon: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A professional photo and video editing suite with powerful tools for both beginners and experts. Features include layer-based editing, filters, effects, color correction, and support for various file formats.',
    screenshotLinks: [
      'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    availablePlatforms: {
      Win: { downloadLink: 'https://example.com/cosmic-editor-win', size: '512MB' },
      Mac: { downloadLink: 'https://example.com/cosmic-editor-mac', size: '535MB' },
      Linux: { downloadLink: 'https://example.com/cosmic-editor-linux', size: '495MB' },
      Android: { downloadLink: 'https://example.com/cosmic-editor-android', size: '218MB' },
      iOS: { downloadLink: 'https://example.com/cosmic-editor-ios', size: '225MB' },
      AndroidTV: { downloadLink: '', size: '' },
      BrowserExt: { downloadLink: '', size: '' },
      Webapp: { downloadLink: 'https://cosmic-editor.example.com', size: 'Online' },
      Script: { downloadLink: '', size: '' },
      SourceCode: { downloadLink: '', size: '' },
      Chromebk: { downloadLink: '', size: '' }
    },
    category: 'photography',
    author: 'Black Hole Studios',
    rating: 4.6,
    downloads: 3500000,
    lastUpdated: '2025-02-10'
  }
];

export const getRandomApps = (count: number): AppItem[] => {
  const shuffled = [...MOCK_APPS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAppsByCategory = (category: string): AppItem[] => {
  return MOCK_APPS.filter(app => app.category === category);
};

export const getAppById = (id: string): AppItem | undefined => {
  return MOCK_APPS.find(app => app.id === id);
};

export const searchApps = (query: string): AppItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return MOCK_APPS.filter(app => 
    app.name.toLowerCase().includes(lowercaseQuery) || 
    app.description.toLowerCase().includes(lowercaseQuery) ||
    app.category.toLowerCase().includes(lowercaseQuery) ||
    app.author.toLowerCase().includes(lowercaseQuery)
  );
};

export const getPlatformNames = (app: AppItem): Platform[] => {
  return Object.entries(app.availablePlatforms)
    .filter(([_, info]) => info.downloadLink !== '')
    .map(([platform]) => platform as Platform);
};

export const getSponsored = (): AppItem[] => {
  return [MOCK_APPS[1], MOCK_APPS[6], MOCK_APPS[9]];
};