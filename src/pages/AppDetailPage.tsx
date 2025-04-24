import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Download, User } from 'lucide-react';
import { AppItem } from '../types';
import { getAppById } from '../data/mockData';
import DownloadButton from '../components/DownloadButton';
import AppScreenshots from '../components/AppScreenshots';
import ContactForm from '../components/ContactForm';

const AppDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [app, setApp] = useState<AppItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const appData = getAppById(id);
      setApp(appData || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
        <p className="ml-3 text-white">Loading app details...</p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">App Not Found</h1>
        <p className="text-gray-300 mb-6">The app you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-400">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 pb-20">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to store
      </Link>
      
      {/* App header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-purple-800/30 to-purple-600/30 p-1 rounded-2xl animate-pulse-glow">
            <img
              src={app.icon}
              alt={`${app.name} icon`}
              className="w-32 h-32 rounded-xl object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">{app.name}</h1>
          <p className="text-gray-400 mb-4">{app.author}</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {app.rating && (
              <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 mr-1 fill-current" />
                <span className="font-medium">{app.rating.toFixed(1)}</span>
              </div>
            )}
            
            {app.downloads && (
              <div className="flex items-center text-gray-300">
                <Download className="h-5 w-5 mr-1" />
                <span>{app.downloads.toLocaleString()} downloads</span>
              </div>
            )}
            
            {app.lastUpdated && (
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-1" />
                <span>Updated: {app.lastUpdated}</span>
              </div>
            )}
            
            <div className="flex items-center text-gray-300">
              <User className="h-5 w-5 mr-1" />
              <span>{app.author}</span>
            </div>
          </div>
          
          {/* Download button */}
          <DownloadButton app={app} />
        </div>
      </div>
      
      {/* App content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Screenshots */}
          <AppScreenshots screenshots={app.screenshotLinks} appName={app.name} />
          
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">About this App</h3>
            <div className="bg-gray-900/30 border border-purple-900/20 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {app.description}
              </p>
            </div>
          </div>
        </div>
        
        <div>
          {/* Status/Beta information */}
          {app.status === 'Testing' && (
            <ContactForm appName={app.name} />
          )}
          
          {/* Information */}
          <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Information</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Category</div>
                <div className="text-white capitalize">{app.category}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 mb-1">Developer</div>
                <div className="text-white">{app.author}</div>
              </div>
              
              {app.lastUpdated && (
                <div>
                  <div className="text-sm text-gray-400 mb-1">Last Updated</div>
                  <div className="text-white">{app.lastUpdated}</div>
                </div>
              )}
              
              {app.status && (
                <div>
                  <div className="text-sm text-gray-400 mb-1">Status</div>
                  <div className="text-white">{app.status}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailPage;