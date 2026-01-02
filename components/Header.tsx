
import React from 'react';
import { AppScreen } from '../types';

interface HeaderProps {
  currentScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
  unreadCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentScreen, setScreen, unreadCount }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => setScreen(AppScreen.HOME)}
            >
              <span className="text-2xl font-bold text-blue-600 tracking-tight">Coursera</span>
              <span className="text-sm font-medium text-gray-500 ml-1">Clone</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <button 
                onClick={() => setScreen(AppScreen.HOME)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentScreen === AppScreen.HOME ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
              >
                My Learning
              </button>
              <button 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Explore
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setScreen(AppScreen.INBOX)}
              className="relative p-2 text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 border border-white shadow-sm"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
