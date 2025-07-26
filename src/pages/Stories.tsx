import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Star, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { inspirationalStories } from '../data/mockData';

const Stories: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    isAnonymous: false
  });

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % inspirationalStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + inspirationalStories.length) % inspirationalStories.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Story submitted:', formData);
    alert('Thank you for sharing your story! It will be reviewed and published soon.');
    setFormData({ title: '', content: '', author: '', isAnonymous: false });
    setShowForm(false);
  };

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
            Inspiration & Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real women who have overcome challenges and achieved their dreams. 
            Your story could inspire someone else's journey.
          </p>
        </motion.div>

        {/* Story Carousel */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Stories of Strength</h2>
            <p className="text-xl text-gray-600">
              Every woman has a story worth telling. Here are some that moved us.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    {inspirationalStories[currentStory].title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    "{inspirationalStories[currentStory].content}"
                  </p>
                  
                  <div className="text-center">
                    <p className="text-gray-600 font-medium">
                      — {inspirationalStories[currentStory].isAnonymous ? 'Anonymous' : inspirationalStories[currentStory].author}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {inspirationalStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Share Your Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey could be the inspiration someone else needs. 
              Share your story of strength, resilience, and triumph.
            </p>
          </motion.div>

          {!showForm ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white max-w-3xl mx-auto"
            >
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Your Voice Matters</h3>
              <p className="text-xl mb-8 opacity-90">
                Every story shared helps build a stronger community of empowered women. 
                Your experience could be exactly what someone needs to hear today.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Share My Story</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto"
            >
              <div className="text-center mb-8">
                <Star className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Tell Your Story</h3>
                <p className="text-xl text-gray-600">
                  Your story will be reviewed and shared with the community to inspire others.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Story Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Give your story a compelling title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Story</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Share your journey, challenges overcome, lessons learned, or achievements. Your words could inspire someone else..."
                    required
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isAnonymous}
                      onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">Share anonymously</span>
                  </label>
                </div>

                {!formData.isAnonymous && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="How would you like to be credited?"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Story</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 sm:flex-none bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </section>

        {/* Community Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Together We Rise</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join our growing community of empowered women making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Stories Shared</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Women Inspired</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Lives Changed</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Stories;