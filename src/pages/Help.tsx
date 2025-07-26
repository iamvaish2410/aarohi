import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Shield, AlertTriangle, Heart, Scale, Users } from 'lucide-react';
import { helplines } from '../data/mockData';

const Help: React.FC = () => {
  const categoryConfig = {
    emergency: { color: 'from-red-500 to-pink-500', icon: AlertTriangle, name: 'Emergency' },
    mental: { color: 'from-purple-500 to-blue-500', icon: Heart, name: 'Mental Health' },
    legal: { color: 'from-indigo-500 to-purple-500', icon: Scale, name: 'Legal Support' },
    general: { color: 'from-teal-500 to-green-500', icon: Users, name: 'General Support' }
  };

  const emergencyTips = [
    {
      title: 'Stay Calm',
      description: 'Take deep breaths. Panic reduces your ability to think clearly.',
      icon: Heart
    },
    {
      title: 'Assess the Situation',
      description: 'Identify immediate threats and safe exit routes.',
      icon: Shield
    },
    {
      title: 'Call for Help',
      description: 'Use the emergency numbers below or press the Safe Me button.',
      icon: Phone
    },
    {
      title: 'Stay Connected',
      description: 'Keep someone informed of your location and situation.',
      icon: Users
    }
  ];

  const callNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Emergency Help & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immediate assistance is just a call away. You are not alone - help is available 24/7.
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center mb-12"
        >
          <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">In Immediate Danger?</h2>
          <p className="text-lg mb-6 opacity-90">
            If you are in immediate physical danger, call emergency services right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => callNumber('100')}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Police (100)</span>
            </button>
            <button
              onClick={() => callNumber('1091')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Women Helpline (1091)</span>
            </button>
          </div>
        </motion.div>

        {/* Emergency Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What to Do in an Emergency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Helplines */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">24/7 Support Helplines</h2>
          
          {Object.entries(
            helplines.reduce((acc, helpline) => {
              if (!acc[helpline.category]) acc[helpline.category] = [];
              acc[helpline.category].push(helpline);
              return acc;
            }, {} as Record<string, typeof helplines>)
          ).map(([category, categoryHelplines], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center`}>
                    <config.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{config.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryHelplines.map((helpline, index) => (
                    <motion.div
                      key={helpline.number}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className={`h-2 bg-gradient-to-r ${config.color}`}></div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 text-gray-800">{helpline.name}</h4>
                        <p className="text-gray-600 mb-4">{helpline.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gray-800">{helpline.number}</span>
                          <button
                            onClick={() => callNumber(helpline.number)}
                            className={`bg-gradient-to-r ${config.color} text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 group`}
                          >
                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                        <button
                          onClick={() => callNumber(helpline.number)}
                          className={`w-full mt-4 bg-gradient-to-r ${config.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                        >
                          Call Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Support Message */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">You Are Never Alone</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Remember that seeking help is a sign of strength, not weakness. Every woman deserves to feel safe, 
            supported, and empowered. These resources are here for you whenever you need them.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto">
            <p className="text-lg font-semibold mb-2">Crisis Text Line</p>
            <p className="opacity-90">Text HOME to 741741 for free, 24/7 crisis support</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Help;