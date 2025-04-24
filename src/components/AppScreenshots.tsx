import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface AppScreenshotsProps {
  screenshots: string[];
  appName: string;
}

const AppScreenshots: React.FC<AppScreenshotsProps> = ({ screenshots, appName }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handlePrevious = () => {
    setCurrentImage(prev => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage(prev => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'auto';
  };

  if (screenshots.length === 0) return null;

  return (
    <>
      {/* Thumbnail Gallery */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-white">Screenshots</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg border border-purple-900/30 cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 bg-gray-900/50"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={screenshot} 
                alt={`${appName} screenshot ${index + 1}`}
                className="w-full h-40 object-cover hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            {/* Main image */}
            <div className="relative max-w-5xl max-h-[80vh] w-full">
              <img 
                src={screenshots[currentImage]} 
                alt={`${appName} screenshot ${currentImage + 1}`}
                className="max-h-[80vh] max-w-full mx-auto object-contain"
              />
            </div>

            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              <button 
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                onClick={handlePrevious}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                onClick={handleNext}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Image counter */}
            <div className="mt-4 text-white text-sm">
              {currentImage + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppScreenshots;