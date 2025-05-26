
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get the care you deserve —{' '}
                <span className="text-blue-600">delivered to your doorstep</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted by over 1M+ patients. Access authentic medicines, upload prescriptions, 
                and enjoy seamless healthcare delivery across Switzerland.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Genuine Medicines</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Licensed Pharmacists</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-4 text-lg font-medium transition-all hover:scale-105"
              >
                Order Medicines
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-xl px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50 transition-all hover:scale-105"
              >
                Upload Prescription
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Same Day Delivery</span>
                </div>
                <p className="text-sm text-gray-600">Order before 2 PM</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-green-600">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">24/7 Support</span>
                </div>
                <p className="text-sm text-gray-600">Always here for you</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Modern pharmacy interior with professional pharmacist"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating Highlight Banner */}
            <div className="absolute top-8 right-8 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-bold">35% OFF</div>
                <div className="text-sm">with FlexiRewards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
