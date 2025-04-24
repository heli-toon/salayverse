import React, { useState, useEffect } from 'react';
import AppCardList from '../components/AppCardList';
import AppSlider from '../components/AppSlider';
import PlatformFilter from '../components/PlatformFilter';
import { AppItem, Platform } from '../types';
import { 
  getRandomApps, 
  getAppsByCategory, 
  getPlatformNames,
  getSponsored
} from '../data/mockData';

const HomePage: React.FC = () => {
  const [featuredApps, setFeaturedApps] = useState<AppItem[]>([]);
  const [recentApps, setRecentApps] = useState<AppItem[]>([]);
  const [gamesApps, setGamesApps] = useState<AppItem[]>([]);
  const [productivityApps, setProductivityApps] = useState<AppItem[]>([]);
  const [sponsoredApps, setSponsoredApps] = useState<AppItem[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [availablePlatforms, setAvailablePlatforms] = useState<Platform[]>([]);

  useEffect(() => {
    // Load initial data
    const featured = getRandomApps(4);
    const recent = getRandomApps(6);
    const games = getAppsByCategory('games');
    const productivity = getAppsByCategory('productivity');
    const sponsored = getSponsored();

    setFeaturedApps(featured);
    setRecentApps(recent);
    setGamesApps(games);
    setProductivityApps(productivity);
    setSponsoredApps(sponsored);

    // Get all available platforms across all apps
    const platforms = new Set<Platform>();
    [...featured, ...recent, ...games, ...productivity].forEach(app => {
      getPlatformNames(app).forEach(platform => platforms.add(platform));
    });
    
    setAvailablePlatforms(Array.from(platforms));
  }, []);

  // Filter apps by selected platform
  const filterAppsByPlatform = (apps: AppItem[]): AppItem[] => {
    if (!selectedPlatform) return apps;
    
    return apps.filter(app => 
      app.availablePlatforms[selectedPlatform]?.downloadLink !== ''
    );
  };

  return (
    <div className="container mx-auto px-4 pb-20 md:pb-10">
      {/* Featured Apps Slider */}
      <AppSlider apps={filterAppsByPlatform(featuredApps)} />

      {/* Platform Filter */}
      <PlatformFilter 
        selectedPlatform={selectedPlatform}
        onSelectPlatform={setSelectedPlatform}
        availablePlatforms={availablePlatforms}
      />
      
      {/* Recent Apps */}
      <AppCardList 
        title="New & Updated Apps" 
        apps={filterAppsByPlatform(recentApps)} 
        viewAllLink="/apps"
      />
      
      {/* Games */}
      <AppCardList 
        title="Top Games" 
        apps={filterAppsByPlatform(gamesApps)} 
        viewAllLink="/games"
      />
      
      {/* Productivity Apps */}
      <AppCardList 
        title="Productivity" 
        apps={filterAppsByPlatform(productivityApps)} 
        viewAllLink="/apps?category=productivity"
      />
      
      {/* Sponsored Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Sponsored</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filterAppsByPlatform(sponsoredApps).map(app => (
            <div 
              key={app.id}
              className="bg-gray-800/30 border border-purple-900/30 rounded-xl p-4 hover:bg-gray-800/50 transition-colors cursor-pointer"
              onClick={() => window.location.href = `/app/${app.id}`}
            >
              <div className="flex items-center mb-3">
                <img 
                  src={app.icon} 
                  alt={app.name} 
                  className="w-12 h-12 rounded-xl mr-3"
                />
                <div>
                  <h3 className="font-medium text-white">{app.name}</h3>
                  <p className="text-xs text-gray-400">{app.category}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">{app.description}</p>
              <div className="mt-3 text-right">
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                  Sponsored
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;