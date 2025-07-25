import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import CustomerTestimonials from "../components/CustomerTestimonials";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setSelectedImage(data.thumbnail || data.images?.[0] || "");
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading || !product) return <Loader />;

  return (
    <>
      <motion.div
        className="px-4 pt-28 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-3 sm:overflow-y-auto max-h-[500px]">
            {product.images?.map((img, index) => (
              <motion.img
                key={`img-${index}`}
                src={img}
                alt={`product-${index}`}
                onClick={() => setSelectedImage(img)}
                whileHover={{ scale: 1.2 }}
                className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          <motion.div
            key={selectedImage}
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full rounded-xl max-h-[500px] object-contain"
            />
          </motion.div>
        </div>

  
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-extrabold uppercase text-gray-800">
            {product.title}
          </h1>

       
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
            ))}
            <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
          </div>

   
          <div className="text-xl font-bold">
            ${product.price}
            <span className="line-through text-gray-500 text-base ml-2">
              ${Math.round(product.price * 1.15)}
            </span>
            <span className="text-red-500 text-sm ml-2">-15%</span>
          </div>

     
          <p className="text-sm text-gray-700">{product.description}</p>

      
          {product.returnPolicy && (
            <p className="text-sm text-red-700">{product.returnPolicy}</p>
          )}

          <div>
            <p className="text-sm font-semibold mb-1">Select Colors</p>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-green-900 border-2 border-black" />
              <span className="w-6 h-6 rounded-full bg-gray-700" />
              <span className="w-6 h-6 rounded-full bg-blue-900" />
            </div>
          </div>

   
          <div>
            <p className="text-sm font-semibold mb-1 mt-3">Choose Size</p>
            <div className="flex gap-2 flex-wrap">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 rounded-full text-sm border transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

    
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-lg p-1"
              >
                <HiMinus />
              </button>
              <motion.span
                key={quantity}
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="px-4"
              >
                {quantity}
              </motion.span>
              <button onClick={() => setQuantity((q) => q + 1)} className="text-lg p-1">
                <HiPlus />
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-green-900 transition duration-300"
              onClick={() =>
                console.log("Add to cart", { product, quantity, selectedSize })
              }
            >
              Add to Cart
            </motion.button>
          </div>

     
          <motion.div
            className="mt-6 border-t pt-4 flex gap-8 text-sm text-gray-500 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button className="text-black font-semibold">Product Details</button>
            <button>Rating & Reviews</button>
            <button>FAQs</button>
          </motion.div>
        </div>
      </motion.div>


      <CustomerTestimonials />
    </>
  );
};

export default ProductDetails;
