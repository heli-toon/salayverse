export type Platform = 'Win' | 'Mac' | 'Linux' | 'AndroidTV' | 'Android' | 'iOS' | 'BrowserExt' | 'Webapp' | 'Script' | 'SourceCode' | 'Chromebk';

export type PlatformInfo = {
  downloadLink: string;
  size: string;
};

export type AppItem = {
  id: string;
  name: string;
  icon: string;
  description: string;
  screenshotLinks: string[];
  availablePlatforms: Record<Platform, PlatformInfo>;
  status?: string;
  category: string;
  author: string;
  rating?: number;
  downloads?: number;
  lastUpdated?: string;
};

export type AppCategory = 'games' | 'productivity' | 'education' | 'entertainment' | 'utilities' | 'development' | 'social' | 'music' | 'video' | 'photography';