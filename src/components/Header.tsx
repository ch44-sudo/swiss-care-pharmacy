
import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">Swiss Care Pharmacy</h1>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search over 30,000+ authentic medicines..."
                className="pl-10 pr-4 py-2 w-full rounded-xl"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Store Locator</span>
            </Button>
            
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            <Button variant="ghost">
              <User className="h-5 w-5" />
            </Button>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6">
              Upload Prescription
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search medicines..."
              className="pl-10 pr-4 py-2 w-full rounded-xl"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              Products
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Health Tools
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Rewards
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Store Locator
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              Upload Prescription
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
