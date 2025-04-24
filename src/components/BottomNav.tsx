import React from 'react';
import { Home, Grid, GamepadIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F0F1A]/90 backdrop-blur-md border-t border-purple-900/30 z-40">
      <div className="flex justify-around items-center">
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center py-3 flex-1 ${
            isActive('/') ? 'text-purple-500' : 'text-gray-400'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => navigate('/apps')}
          className={`flex flex-col items-center py-3 flex-1 ${
            isActive('/apps') ? 'text-purple-500' : 'text-gray-400'
          }`}
        >
          <Grid className="h-6 w-6" />
          <span className="text-xs mt-1">Apps</span>
        </button>
        <button
          onClick={() => navigate('/games')}
          className={`flex flex-col items-center py-3 flex-1 ${
            isActive('/games') ? 'text-purple-500' : 'text-gray-400'
          }`}
        >
          <GamepadIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Games</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;