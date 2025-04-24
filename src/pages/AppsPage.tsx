import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppCardList from '../components/AppCardList';
import PlatformFilter from '../components/PlatformFilter';
import { AppItem, Platform, AppCategory } from '../types';
import { getAppsByCategory, getRandomApps, getPlatformNames } from '../data/mockData';

const categories: { id: AppCategory; name: string }[] = [
  { id: 'games', name: 'Games' },
  { id: 'productivity', name: 'Productivity' },
  { id: 'education', name: 'Education' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'utilities', name: 'Utilities' },
  { id: 'development', name: 'Development' },
  { id: 'social', name: 'Social' },
  { id: 'music', name: 'Music' },
  { id: 'video', name: 'Video' },
  { id: 'photography', name: 'Photography' }
];

const AppsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | null>(
    categoryParam as AppCategory || null
  );
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [apps, setApps] = useState<AppItem[]>([]);
  const [availablePlatforms, setAvailablePlatforms] = useState<Platform[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isGamesPage = window.location.pathname === '/games';

  useEffect(() => {
    setIsLoading(true);
    
    let appsData: AppItem[];
    if (isGamesPage) {
      appsData = getAppsByCategory('games');
      setSelectedCategory('games');
    } else if (selectedCategory) {
      appsData = getAppsByCategory(selectedCategory);
    } else {
      appsData = getRandomApps(12);
    }
    
    setApps(appsData);
    
    // Get all available platforms
    const platforms = new Set<Platform>();
    appsData.forEach(app => {
      getPlatformNames(app).forEach(platform => platforms.add(platform));
    });
    
    setAvailablePlatforms(Array.from(platforms));
    setIsLoading(false);
  }, [isGamesPage, selectedCategory]);

  const handleCategoryChange = (category: AppCategory | null) => {
    setSelectedCategory(category);
    
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  // Filter apps by selected platform
  const filteredApps = selectedPlatform
    ? apps.filter(app => app.availablePlatforms[selectedPlatform]?.downloadLink !== '')
    : apps;

  return (
    <div className="container mx-auto px-4 py-6 pb-20 md:pb-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        {isGamesPage ? 'Games' : 'Applications'}
      </h1>
      
      {/* Category filter */}
      {!isGamesPage && (
        <div className="mb-6">
          <h2 className="text-lg font-medium text-white mb-3">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === null 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
              }`}
              onClick={() => handleCategoryChange(null)}
            >
              All Categories
            </button>
            
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Platform filter */}
      <PlatformFilter 
        selectedPlatform={selectedPlatform}
        onSelectPlatform={setSelectedPlatform}
        availablePlatforms={availablePlatforms}
      />
      
      {/* Apps list */}
      {isLoading ? (
        <div className="py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading apps...</p>
        </div>
      ) : (
        <AppCardList 
          title={selectedCategory ? `${categories.find(c => c.id === selectedCategory)?.name}` : 'All Apps'} 
          apps={filteredApps}
          scrollable={false}
          size="large"
        />
      )}
    </div>
  );
};

export default AppsPage;