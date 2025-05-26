
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, ShoppingCart } from 'lucide-react';

const ProductsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'diabetes', name: 'Diabetes Care' },
    { id: 'skincare', name: 'Skincare' },
    { id: 'supplements', name: 'Supplements' },
    { id: 'pain-relief', name: 'Pain Relief' },
    { id: 'vitamins', name: 'Vitamins' }
  ];

  const products = [
    {
      id: 1,
      name: "Metformin 500mg",
      category: "diabetes",
      brand: "Novartis",
      price: "CHF 12.50",
      dosage: "500mg - 30 tablets",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      inStock: true,
      prescription: true
    },
    {
      id: 2,
      name: "Vitamin D3 2000 IU",
      category: "supplements",
      brand: "Swiss Pharma",
      price: "CHF 18.90",
      dosage: "2000 IU - 60 capsules",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      inStock: true,
      prescription: false
    },
    {
      id: 3,
      name: "CeraVe Moisturizing Cream",
      category: "skincare",
      brand: "CeraVe",
      price: "CHF 24.95",
      dosage: "340g tube",
      image: "https://images.unsplash.com/photo-1556228994-f6683568e3e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      inStock: false,
      prescription: false
    },
    {
      id: 4,
      name: "Ibuprofen 400mg",
      category: "pain-relief",
      brand: "Generic",
      price: "CHF 8.50",
      dosage: "400mg - 20 tablets",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      inStock: true,
      prescription: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Search over 30,000+ authentic medicines
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search medicines by name, brand, or condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg rounded-xl"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="lg:w-64 py-3 rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.prescription && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Prescription Required
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <p className="text-sm text-gray-500">{product.dosage}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <Button 
                    size="sm" 
                    disabled={!product.inStock}
                    className="rounded-xl hover:scale-105 transition-transform"
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </>
                    ) : (
                      'Out of Stock'
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Oops! No results found
            </h3>
            <p className="text-gray-600 mb-4">
              Try changing your keywords or browse our categories
            </p>
            <Button variant="outline" className="rounded-xl">
              Can't find your medicine? Request it here
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
