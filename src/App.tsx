import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import SearchPage from './pages/SearchPage';
import AppDetailPage from './pages/AppDetailPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0F0F1A] flex flex-col">
        <Header onSearch={handleSearch} />
        
        <main className="flex-1 pt-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/games" element={<AppsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/app/:id" element={<AppDetailPage />} />
          </Routes>
        </main>
        
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;