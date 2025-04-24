import React from 'react';
import { Platform } from '../types';
import { getPlatformDisplayName, getPlatformIcon } from '../utils/platformUtils';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface PlatformFilterProps {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
  availablePlatforms: Platform[];
}

const PlatformFilter: React.FC<PlatformFilterProps> = ({
  selectedPlatform,
  onSelectPlatform,
  availablePlatforms
}) => {
  // Get icon component from string name
  const getIconComponent = (iconName: string): LucideIcon => {
    return (Icons as any)[`${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon`] || Icons.DownloadIcon;
  };

  return (
    <div className="overflow-x-auto pb-2 mb-6">
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-full text-sm transition-all duration-200 whitespace-nowrap ${
            selectedPlatform === null 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
          }`}
          onClick={() => onSelectPlatform(null)}
        >
          All Platforms
        </button>
        
        {availablePlatforms.map(platform => {
          const IconComponent = getIconComponent(getPlatformIcon(platform));
          return (
            <button
              key={platform}
              className={`flex items-center px-4 py-2 rounded-full text-sm transition-all duration-200 whitespace-nowrap ${
                selectedPlatform === platform 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
              }`}
              onClick={() => onSelectPlatform(platform)}
            >
              <IconComponent className="h-4 w-4 mr-2" />
              {getPlatformDisplayName(platform)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformFilter;