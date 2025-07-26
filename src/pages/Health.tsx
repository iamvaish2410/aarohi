import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Calendar, AlertCircle, Phone } from 'lucide-react';
import { healthTips } from '../data/mockData';

const Health: React.FC = () => {
  const [activeTab, setActiveTab] = useState('menstrual');

  const tabs = [
    { id: 'menstrual', name: 'Menstrual Health', icon: Calendar },
    { id: 'pcos', name: 'PCOS/PCOD', icon: Heart },
    { id: 'breast', name: 'Breast Health', icon: Shield },
    { id: 'mental', name: 'Mental Wellness', icon: Brain }
  ];

  const mentalHealthNumbers = [
    { name: 'Mental Health Helpline', number: '9152987821' },
    { name: 'Suicide Prevention', number: '9152987821' },
    { name: 'Counseling Support', number: '1800-599-0019' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Health & Hygiene
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive health resources designed specifically for women's wellness and empowerment
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'menstrual' && (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Calendar className="w-8 h-8 mr-3 text-pink-500" />
                Menstrual Health & Hygiene
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Essential Tips</h3>
                  <ul className="space-y-3">
                    {healthTips.menstrual.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Did You Know?</h3>
                  <p className="text-gray-600 mb-4">
                    A healthy menstrual cycle is 21-35 days long. Tracking your cycle can help 
                    you understand your body better and identify any irregularities early.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Emergency Tip:</strong> If you experience severe pain or irregular bleeding, 
                      consult a healthcare provider immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pcos' && (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-purple-500" />
                PCOS/PCOD Awareness
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {healthTips.pcos.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{fact}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Important Note</h3>
                    <p className="text-yellow-700">
                      If you suspect you have PCOS/PCOD, consult with a gynecologist for proper 
                      diagnosis and treatment. Early intervention can significantly improve outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'breast' && (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-pink-500" />
                Breast Cancer Awareness
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {healthTips.breastHealth.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 bg-pink-50 border border-pink-200 rounded-2xl p-6">
                <h3 className="font-semibold text-pink-800 mb-4">Self-Examination Guide</h3>
                <p className="text-pink-700 mb-4">
                  Perform monthly breast self-exams 3-5 days after your period ends. 
                  Look for changes in size, shape, or texture, and feel for lumps or thickening.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Remember:</strong> Most breast changes are not cancer, but early detection 
                    saves lives. Report any changes to your healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mental' && (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-purple-500" />
                Mental Health & Wellness
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Self-Care Practices</h3>
                  <ul className="space-y-3">
                    {healthTips.mentalHealth.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Breathing Exercise</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>4-7-8 Technique:</strong></p>
                    <p>• Breathe in for 4 counts</p>
                    <p>• Hold for 7 counts</p>
                    <p>• Exhale for 8 counts</p>
                    <p>• Repeat 4 times</p>
                  </div>
                </div>
              </div>

              {/* Mental Health Helplines */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Mental Health Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mentalHealthNumbers.map((helpline, index) => (
                    <a
                      key={index}
                      href={`tel:${helpline.number}`}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 block"
                    >
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5" />
                        <div>
                          <p className="font-semibold">{helpline.name}</p>
                          <p className="text-sm opacity-90">{helpline.number}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="mt-6 text-sm opacity-90">
                  Remember: Seeking help is a sign of strength, not weakness. Your mental health matters.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Health;