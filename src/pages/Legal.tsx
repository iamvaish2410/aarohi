import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, FileText, Phone, ChevronDown, ChevronUp, Shield, AlertCircle } from 'lucide-react';
import { legalRights } from '../data/mockData';

const Legal: React.FC = () => {
  const [expandedRight, setExpandedRight] = useState<string | null>(null);
  const [showFIRGuide, setShowFIRGuide] = useState(false);

  const firSteps = [
    {
      step: 1,
      title: 'Go to the Nearest Police Station',
      description: 'Visit the police station in whose jurisdiction the crime occurred'
    },
    {
      step: 2,
      title: 'Provide Details',
      description: 'Give a clear, factual account of the incident with date, time, and location'
    },
    {
      step: 3,
      title: 'Get FIR Copy',
      description: 'Ensure you receive a copy of the FIR with the FIR number'
    },
    {
      step: 4,
      title: 'Keep Records',
      description: 'Maintain all documents and evidence related to your case'
    },
    {
      step: 5,
      title: 'Follow Up',
      description: 'Stay in contact with the investigating officer for updates'
    }
  ];

  const legalAidNumbers = [
    { name: 'National Legal Services Authority', number: '15100' },
    { name: 'Legal Aid Helpline', number: '9013151515' },
    { name: 'Women\'s Legal Aid', number: '7827170170' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Legal Rights & Protection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Knowledge is power. Understanding your legal rights is the first step toward protection and justice.
          </p>
        </motion.div>

        {/* Know Your Rights */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Know Your Rights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These fundamental laws are designed to protect and empower women in India
            </p>
          </motion.div>

          <div className="space-y-6">
            {legalRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedRight(expandedRight === right.title ? null : right.title)}
                  className="w-full p-8 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{right.title}</h3>
                        <p className="text-gray-600 mt-1">{right.description}</p>
                      </div>
                    </div>
                    {expandedRight === right.title ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedRight === right.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50">
                        <h4 className="font-semibold text-gray-800 mb-4">Key Points:</h4>
                        <ul className="space-y-3">
                          {right.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How to File FIR */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-8">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">How to File an FIR</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Filing a First Information Report (FIR) is your legal right. Here's a simple step-by-step guide.
              </p>
            </div>

            <button
              onClick={() => setShowFIRGuide(!showFIRGuide)}
              className="mx-auto block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors mb-8"
            >
              {showFIRGuide ? 'Hide Guide' : 'Show Step-by-Step Guide'}
            </button>

            <AnimatePresence>
              {showFIRGuide && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {firSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-6"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-purple-600">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="opacity-90">{step.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 bg-yellow-400/20 border border-yellow-400/30 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Important Note</h3>
                  <p className="opacity-90">
                    Police cannot refuse to register an FIR if the information discloses a cognizable offense. 
                    If they refuse, you can approach higher authorities or file online.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Legal Aid */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Free Legal Aid</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Legal assistance is available for those who cannot afford it. These services are your right.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {legalAidNumbers.map((aid, index) => (
              <motion.div
                key={aid.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{aid.name}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{aid.number}</p>
                <a
                  href={`tel:${aid.number}`}
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Call Now
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Need Legal Consultation?</h3>
              <p className="text-xl text-gray-600">
                Fill out this form and our legal aid partners will contact you within 24 hours.
              </p>
            </div>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your contact number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Legal Issue Category</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>Select category</option>
                  <option>Domestic Violence</option>
                  <option>Workplace Harassment</option>
                  <option>Dowry Related</option>
                  <option>Property Rights</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Brief Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Please describe your legal concern briefly..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Legal;