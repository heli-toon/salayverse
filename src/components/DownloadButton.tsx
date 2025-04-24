import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { AppItem, Platform } from '../types';
import { detectUserPlatform, getPlatformDisplayName, getPlatformIcon } from '../utils/platformUtils';
import * as Icons from 'lucide-react';

interface DownloadButtonProps {
  app: AppItem;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ app }) => {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform | null>(null);
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);

  // Get available platforms
  const availablePlatforms = Object.entries(app.availablePlatforms)
    .filter(([_, info]) => info.downloadLink !== '')
    .map(([platform]) => platform as Platform);

  useEffect(() => {
    // Detect user's platform
    const platform = detectUserPlatform();
    
    // Check if the app is available for the detected platform
    if (app.availablePlatforms[platform]?.downloadLink) {
      setDetectedPlatform(platform);
    } else {
      // If not available for detected platform, select the first available platform
      setDetectedPlatform(availablePlatforms[0] || null);
    }
  }, [app]);

  const handleDownload = () => {
    if (detectedPlatform) {
      const downloadLink = app.availablePlatforms[detectedPlatform].downloadLink;
      window.open(downloadLink, '_blank');
    }
  };

  const selectPlatform = (platform: Platform) => {
    setDetectedPlatform(platform);
    setShowPlatformDropdown(false);
  };

  const getIconComponent = (iconName: string) => {
    return (Icons as any)[`${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon`] || Icons.DownloadIcon;
  };

  if (!detectedPlatform) return null;

  const IconComponent = getIconComponent(getPlatformIcon(detectedPlatform));

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-3">
        <button 
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
        >
          <Download className="h-5 w-5" />
          <span>Download for {getPlatformDisplayName(detectedPlatform)}</span>
        </button>
        
        <button 
          onClick={() => setShowPlatformDropdown(!showPlatformDropdown)}
          className="md:flex-initial bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <IconComponent className="h-5 w-5" />
          <span>More options</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showPlatformDropdown ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {/* Platform dropdown */}
      {showPlatformDropdown && (
        <div className="absolute z-10 mt-2 w-full bg-gray-800 border border-purple-900/50 rounded-xl shadow-lg shadow-purple-900/20 overflow-hidden">
          <div className="p-2 text-gray-400 text-sm border-b border-gray-700">
            Select Platform
          </div>
          <div className="max-h-64 overflow-y-auto">
            {availablePlatforms.map(platform => {
              const PlatformIcon = getIconComponent(getPlatformIcon(platform));
              return (
                <button
                  key={platform}
                  onClick={() => selectPlatform(platform)}
                  className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-700/50 transition-colors ${
                    platform === detectedPlatform ? 'bg-purple-900/20 text-purple-400' : 'text-white'
                  }`}
                >
                  <PlatformIcon className="h-5 w-5 mr-3" />
                  <div className="flex-1">
                    <div>{getPlatformDisplayName(platform)}</div>
                    <div className="text-xs text-gray-400">{app.availablePlatforms[platform].size}</div>
                  </div>
                  {platform === detectedPlatform && (
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;