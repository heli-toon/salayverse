import React, { useState } from 'react';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#0F0F1A]/90 backdrop-blur-md text-white sticky top-0 z-50 transition-all duration-300 border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <ShoppingBag className="h-8 w-8 text-purple-500" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Salayverse
            </h1>
          </div>

          {/* Search Bar - desktop */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-4"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search apps and games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pl-10 bg-gray-800/50 border border-purple-900/50 focus:border-purple-500 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button 
              type="submit"
              className="ml-2 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-300 hidden md:block"
            >
              Search
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => navigate('/')}
            >
              Home
            </button>
            <button 
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => navigate('/apps')}
            >
              Apps
            </button>
            <button 
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => navigate('/games')}
            >
              Games
            </button>
          </nav>
        </div>

        {/* Mobile Search Bar */}
        {menuOpen && (
          <form 
            onSubmit={handleSearch}
            className="mt-4 md:hidden"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search apps and games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pl-10 bg-gray-800/50 border border-purple-900/50 rounded-full text-white placeholder-gray-400 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button 
              type="submit"
              className="w-full mt-2 py-2 px-4 bg-purple-600 text-white rounded-full transition-colors duration-200"
            >
              Search
            </button>
          </form>
        )}

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="mt-4 space-y-2 md:hidden">
            <button 
              className="block w-full text-left py-2 px-4 text-white hover:bg-purple-900/30 rounded-lg transition-colors"
              onClick={() => handleNavigate('/')}
            >
              Home
            </button>
            <button 
              className="block w-full text-left py-2 px-4 text-white hover:bg-purple-900/30 rounded-lg transition-colors"
              onClick={() => handleNavigate('/apps')}
            >
              Apps
            </button>
            <button 
              className="block w-full text-left py-2 px-4 text-white hover:bg-purple-900/30 rounded-lg transition-colors"
              onClick={() => handleNavigate('/games')}
            >
              Games
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;