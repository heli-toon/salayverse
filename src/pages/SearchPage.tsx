import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppCardList from '../components/AppCardList';
import PlatformFilter from '../components/PlatformFilter';
import { AppItem, Platform } from '../types';
import { searchApps, getPlatformNames } from '../data/mockData';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<AppItem[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [availablePlatforms, setAvailablePlatforms] = useState<Platform[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Search for apps
    const results = searchApps(query);
    setSearchResults(results);
    
    // Get all available platforms from search results
    const platforms = new Set<Platform>();
    results.forEach(app => {
      getPlatformNames(app).forEach(platform => platforms.add(platform));
    });
    
    setAvailablePlatforms(Array.from(platforms));
    setIsLoading(false);
  }, [query]);

  // Filter search results by selected platform
  const filteredResults = selectedPlatform
    ? searchResults.filter(app => app.availablePlatforms[selectedPlatform]?.downloadLink !== '')
    : searchResults;

  return (
    <div className="container mx-auto px-4 py-6 pb-20 md:pb-10">
      <h1 className="text-3xl font-bold mb-2 text-white">Search Results</h1>
      <p className="text-gray-400 mb-6">
        {isLoading ? 'Searching...' : 
          filteredResults.length > 0 
            ? `Found ${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} for "${query}"`
            : `No results found for "${query}"`
        }
      </p>
      
      {/* Platform filter */}
      {searchResults.length > 0 && (
        <PlatformFilter 
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
          availablePlatforms={availablePlatforms}
        />
      )}
      
      {/* Search results */}
      {isLoading ? (
        <div className="py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Searching for apps...</p>
        </div>
      ) : (
        <AppCardList 
          title="Results" 
          apps={filteredResults}
          scrollable={false}
          size="large"
        />
      )}
      
      {/* No results message */}
      {!isLoading && filteredResults.length === 0 && (
        <div className="py-20 text-center bg-gray-900/30 rounded-xl border border-gray-800">
          <div className="text-gray-400 mb-4">No apps found matching your search criteria.</div>
          {selectedPlatform && searchResults.length > 0 && (
            <button
              onClick={() => setSelectedPlatform(null)}
              className="text-purple-500 hover:text-purple-400 underline transition-colors"
            >
              Clear platform filter to see more results
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;