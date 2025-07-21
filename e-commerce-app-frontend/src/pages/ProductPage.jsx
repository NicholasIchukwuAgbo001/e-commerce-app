import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import CustomerTestimonials from '../components/CustomerTestimonials';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=192');
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
    <Link to="/productdetails">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-14 pt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Link>

    <div className="flex justify-center items-center py-10">
      <Link className="bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-stone-800 transition duration-300">
        View All Products
      </Link>
    </div>

    <CustomerTestimonials />
    </>
  );
};

export default ProductPage;
