import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Filter, ExternalLink, BookOpen, Code, Briefcase, Star } from 'lucide-react';
import { scholarships, learningResources } from '../data/mockData';

const Education: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'school' | 'college' | 'professional'>('all');

  const filteredScholarships = selectedCategory === 'all' 
    ? scholarships 
    : scholarships.filter(s => s.category === selectedCategory);

  const categoryIcons = {
    school: GraduationCap,
    college: BookOpen,
    professional: Briefcase
  };

  const resourceIcons = {
    'Coding & Tech': Code,
    'Business & Finance': Briefcase,
    'Personal Development': Star
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Scholarships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with funding opportunities and learning resources designed to support your educational journey
          </p>
        </motion.div>

        {/* Scholarships Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Available Scholarships</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['all', 'school', 'college', 'professional'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span className="capitalize">{category}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScholarships.map((scholarship, index) => {
              const IconComponent = categoryIcons[scholarship.category];
              return (
                <motion.div
                  key={scholarship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8" />
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full capitalize">
                        {scholarship.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{scholarship.name}</h3>
                    <p className="text-2xl font-bold">{scholarship.amount}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Eligibility:</span>
                        <p className="text-gray-700">{scholarship.eligibility}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Deadline:</span>
                        <p className="text-gray-700">{scholarship.deadline}</p>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Learning Resources Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Free Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your skills with these carefully curated free learning platforms and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningResources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {React.createElement(resourceIcons[category.category as keyof typeof resourceIcons], {
                    className: "w-8 h-8 text-purple-600"
                  })}
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 ml-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Education is the most powerful weapon you can use to change the world. 
            Start your journey today with these opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Browse All Scholarships
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
              Join Study Groups
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Education;