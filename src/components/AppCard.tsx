import React from 'react';
import { Star } from 'lucide-react';
import { AppItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface AppCardProps {
  app: AppItem;
  sponsored?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const AppCard: React.FC<AppCardProps> = ({ app, sponsored = false, size = 'medium' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/${app.id}`);
  };

  // Define size-dependent classes
  const cardSizeClasses = {
    small: 'w-32 flex-shrink-0',
    medium: 'w-48 flex-shrink-0',
    large: 'w-full md:w-64',
  };

  const iconSizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20',
  };

  const titleSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  return (
    <div 
      className={`${cardSizeClasses[size]} bg-gray-900/50 hover:bg-gray-800/80 border border-purple-900/30 rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group`}
      onClick={handleClick}
    >
      {/* App Icon and Header */}
      <div className="p-4 flex flex-col items-center">
        <div className={`${iconSizeClasses[size]} rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-purple-800/30 to-purple-600/30 p-0.5 transition-transform duration-300 group-hover:scale-105`}>
          <img 
            src={app.icon} 
            alt={`${app.name} icon`} 
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        
        <h3 className={`${titleSizeClasses[size]} font-medium text-white text-center mb-1 line-clamp-1`}>
          {app.name}
        </h3>
        
        {size !== 'small' && (
          <p className="text-xs text-gray-400 mb-2 line-clamp-1">{app.author}</p>
        )}
        
        {app.rating && size !== 'small' && (
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-400 mr-1 inline-block" />
            <span className="text-xs text-gray-300">{app.rating.toFixed(1)}</span>
          </div>
        )}
        
        {sponsored && (
          <div className="mt-2 px-2 py-0.5 bg-purple-600/30 rounded-full">
            <span className="text-[10px] text-purple-300">Sponsored</span>
          </div>
        )}

        {app.status && (
          <div className="mt-2 px-2 py-0.5 bg-blue-600/30 rounded-full flex items-center">
            <span className="text-[10px] text-blue-300">{app.status}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCard;