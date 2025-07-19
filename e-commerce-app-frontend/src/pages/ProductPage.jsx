import React from 'react'
import HeroSection from '../components/HeroSection'

const ProductPage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Add Featured Products or Product List */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        {/* Replace with actual product grid component */}
        {/* <ProductGrid /> */}
      </section>
    </div>
  );
};


export default ProductPage
