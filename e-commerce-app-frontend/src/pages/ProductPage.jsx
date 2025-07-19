import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=92');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <HeroSection />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-14 pt-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductPage;
