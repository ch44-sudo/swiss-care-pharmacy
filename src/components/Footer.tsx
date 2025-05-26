
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Swiss Care Pharmacy</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted healthcare partner, delivering authentic medicines 
              across Switzerland with care and precision.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+41 22 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">help@swisscarepharmacy.ch</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Upload Prescription</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Health Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FlexiRewards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Health Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Health Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Diabetes Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Medication Reminders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Health Records</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Consultation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Health Articles</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Swiss Care Pharmacy. All rights reserved. Licensed pharmacy in Switzerland.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">We're here for you — always.</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
