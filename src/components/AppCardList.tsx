import React from 'react';
import { AppItem } from '../types';
import AppCard from './AppCard';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppCardListProps {
  title: string;
  apps: AppItem[];
  viewAllLink?: string;
  size?: 'small' | 'medium' | 'large';
  scrollable?: boolean;
}

const AppCardList: React.FC<AppCardListProps> = ({ 
  title, 
  apps, 
  viewAllLink, 
  size = 'medium',
  scrollable = true
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    if (viewAllLink) {
      navigate(viewAllLink);
    }
  };

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {viewAllLink && (
          <button 
            onClick={handleViewAll}
            className="flex items-center text-sm text-purple-400 hover:text-purple-300"
          >
            View all
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        )}
      </div>

      {/* App Cards */}
      <div className={`${scrollable ? 'flex overflow-x-auto pb-4 space-x-4 scrollbar-hide' : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'}`}>
        {apps.map(app => (
          <AppCard key={app.id} app={app} size={size} />
        ))}

        {apps.length === 0 && (
          <div className="col-span-full py-8 text-center text-gray-400">
            No apps found
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCardList;