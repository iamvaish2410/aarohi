import React, { useState } from 'react';
import { AlertTriangle, Phone, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SafeMeButton: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleEmergencyPress = () => {
    setIsPressed(true);
    setShowOptions(true);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      setIsPressed(false);
      setShowOptions(false);
    }, 10000);
  };

  const playEmergencySound = (type: 'voice' | 'siren' | 'alert') => {
    // In a real app, this would play actual audio files
    console.log(`Playing ${type} sound`);
    alert(`Emergency ${type} sound would play here`);
  };

  const callEmergency = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      {/* Main Emergency Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleEmergencyPress}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isPressed 
            ? 'bg-red-600 animate-pulse' 
            : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
        }`}
      >
        <AlertTriangle className="w-8 h-8 text-white" />
      </motion.button>

      {/* Emergency Options Panel */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-xl p-4 w-64"
          >
            <div className="text-center mb-4">
              <h3 className="font-bold text-red-600 text-lg">Emergency Activated!</h3>
              <p className="text-sm text-gray-600">Choose your action:</p>
            </div>
            
            <div className="space-y-3">
              {/* Call Emergency */}
              <button
                onClick={() => callEmergency('100')}
                className="w-full flex items-center space-x-3 p-3 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Call Police (100)</span>
              </button>
              
              {/* Call Women Helpline */}
              <button
                onClick={() => callEmergency('1091')}
                className="w-full flex items-center space-x-3 p-3 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
              >
                <Phone className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-medium">Women Helpline (1091)</span>
              </button>
              
              {/* Play Safety Sounds */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => playEmergencySound('voice')}
                  className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors text-center"
                >
                  <Volume2 className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <span className="text-xs text-blue-600">Voice</span>
                </button>
                
                <button
                  onClick={() => playEmergencySound('siren')}
                  className="p-2 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors text-center"
                >
                  <Volume2 className="w-4 h-4 text-orange-600 mx-auto mb-1" />
                  <span className="text-xs text-orange-600">Siren</span>
                </button>
                
                <button
                  onClick={() => playEmergencySound('alert')}
                  className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors text-center"
                >
                  <Volume2 className="w-4 h-4 text-green-600 mx-auto mb-1" />
                  <span className="text-xs text-green-600">Alert</span>
                </button>
              </div>
              
              {/* Cancel */}
              <button
                onClick={() => {
                  setIsPressed(false);
                  setShowOptions(false);
                }}
                className="w-full p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 text-sm"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SafeMeButton;