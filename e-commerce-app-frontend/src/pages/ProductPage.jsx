import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=92')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 pt-20">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
