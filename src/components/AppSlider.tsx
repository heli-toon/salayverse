import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface AppSliderProps {
  apps: AppItem[];
}

const AppSlider: React.FC<AppSliderProps> = ({ apps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const timeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();

  const updateWidth = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    // Auto slide if not hovered
    if (!isHovered) {
      timeoutRef.current = window.setTimeout(() => {
        goToNext();
      }, 5000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isHovered]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? apps.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === apps.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleSlideClick = (appId: string) => {
    navigate(`/app/${appId}`);
  };

  if (apps.length === 0) return null;

  return (
    <div 
      className="relative h-64 md:h-80 mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Darkening overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      
      {/* Slide image */}
      <div 
        className="h-full w-full duration-700 ease-in-out cursor-pointer transition-all"
        onClick={() => handleSlideClick(apps[currentIndex].id)}
      >
        <img
          src={apps[currentIndex].screenshotLinks[0]}
          alt={apps[currentIndex].name}
          className="absolute h-full w-full object-cover transition-transform duration-500"
        />
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="flex items-center">
            <img
              src={apps[currentIndex].icon}
              alt={`${apps[currentIndex].name} icon`}
              className="w-16 h-16 rounded-xl mr-4 border-2 border-white/10"
            />
            <div>
              <h2 className="text-white text-2xl font-bold">{apps[currentIndex].name}</h2>
              <p className="text-gray-300 text-sm">{apps[currentIndex].author}</p>
            </div>
          </div>
          
          <p className="text-white/80 mt-2 line-clamp-2 md:max-w-2xl">
            {apps[currentIndex].description}
          </p>
        </div>
      </div>
      
      {/* Left/Right arrows */}
      {!isMobile && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Dots indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
        {apps.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer w-2 h-2 rounded-full transition-all ${
              currentIndex === slideIndex 
                ? 'bg-white w-4' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppSlider;