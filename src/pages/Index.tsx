
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import UploadPrescription from '@/components/UploadPrescription';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <UploadPrescription />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
