import React from 'react';
import { MapPin } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="relative mb-8">
          <MapPin className="h-16 w-16 mx-auto animate-bounce text-white" />
          <div className="absolute -inset-4 border-4 border-white border-opacity-30 rounded-full animate-ping"></div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 animate-pulse">Wanderlust</h1>
        <p className="text-xl mb-8 animate-fade-in">Preparing your journey...</p>
        
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;