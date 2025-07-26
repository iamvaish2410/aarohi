import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, BookOpen, Scale, Users, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Emergency Support',
      description: 'Instant access to helplines and safety resources',
      link: '/help',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health resources and guidance',
      link: '/health',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: BookOpen,
      title: 'Education & Scholarships',
      description: 'Funding opportunities and learning resources',
      link: '/education',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Scale,
      title: 'Legal Rights',
      description: 'Know your rights and legal protections',
      link: '/legal',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Community Stories',
      description: 'Inspiring stories from strong women',
      link: '/stories',
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: Headphones,
      title: 'Safety Audio',
      description: 'Emergency audio alerts and guidance',
      link: '#',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Empowered women standing together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Aarohi
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">आरोही</p>
            <p className="text-2xl md:text-3xl font-semibold mb-8">
              Empowering Every Woman, Everywhere
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              A comprehensive platform built to support, educate, and empower women 
              through every stage of their journey to success and independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Aarohi Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What is Aarohi?
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <strong>Aarohi</strong> means <em>"ascent"</em> or <em>"rising"</em> in Sanskrit. 
                This platform embodies the spirit of upward movement and progress for women everywhere.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Built by passionate students for real change, Aarohi provides comprehensive support through 
                health resources, legal awareness, educational opportunities, emergency assistance, and a 
                supportive community. We believe every woman deserves the tools and knowledge to rise above 
                challenges and achieve her full potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold">
                  Health Support
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold">
                  Legal Awareness
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold">
                  Emergency Tools
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold">
                  Community Support
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowerment Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources designed to support every aspect of a woman's journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  {feature.link !== '#' ? (
                    <Link
                      to={feature.link}
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      <span>Explore</span>
                    </Link>
                  ) : (
                    <button className={`inline-flex items-center space-x-2 bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Your Journey to Empowerment Starts Here
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of women who have found strength, knowledge, and community through Aarohi. 
              Every step forward is a victory worth celebrating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Help Now
              </Link>
              <Link
                to="/stories"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
              >
                Read Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;