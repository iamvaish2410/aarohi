import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Health', path: '/health' },
    { name: 'Education', path: '/education' },
    { name: 'Help', path: '/help' },
    { name: 'Legal', path: '/legal' },
    { name: 'Stories', path: '/stories' }
  ];

  const languages = ['English', 'हिंदी', 'मराठी'];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">आ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Aarohi
              </h1>
              <p className="text-xs text-gray-600 -mt-1">आरोही</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === 'English' ? 'हिंदी' : language === 'हिंदी' ? 'मराठी' : 'English')}
                className="flex items-center space-x-1 text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setLanguage(language === 'English' ? 'हिंदी' : language === 'हिंदी' ? 'मराठी' : 'English')}
                className="flex items-center space-x-2 text-sm text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;