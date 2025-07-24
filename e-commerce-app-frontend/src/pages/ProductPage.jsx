import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import CustomerTestimonials from '../components/CustomerTestimonials';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=194');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 52);

  return (
    <>
      <HeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-10 pt-10">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center py-10">
          <button 
            className={`bg-stone-900 font-mono text-white px-7 py-3 rounded-full hover:bg-stone-700 transition duration-300 ${
              displayedProducts.length === products.length ? "opacity-60 cursor-not-allowed" : ""
            }`}
            onClick={() => setShowAll(true)}
          >
            {showAll ? "All Products Loaded" : "View All Products"}
           
          </button>
        </div>

      <CustomerTestimonials />
    </>
  );
};

export default ProductPage;
