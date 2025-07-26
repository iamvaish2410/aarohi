import React from 'react';
import { Heart, Linkedin, Instagram, Youtube, Mail, Shield, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">आ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aarohi</h3>
                <p className="text-sm opacity-90">आरोही - Empowering Every Woman, Everywhere</p>
              </div>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              A comprehensive platform built to empower women through health support, 
              legal awareness, education opportunities, and emergency assistance tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/health" className="opacity-90 hover:opacity-100 transition-opacity">Health Resources</a></li>
              <li><a href="/education" className="opacity-90 hover:opacity-100 transition-opacity">Scholarships</a></li>
              <li><a href="/help" className="opacity-90 hover:opacity-100 transition-opacity">Emergency Help</a></li>
              <li><a href="/legal" className="opacity-90 hover:opacity-100 transition-opacity">Legal Rights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="opacity-90">Contact Us</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="opacity-90">Privacy Policy</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span className="opacity-90">Feedback</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <div className="text-sm opacity-90 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-pink-300" /> by students for Hackathon 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;