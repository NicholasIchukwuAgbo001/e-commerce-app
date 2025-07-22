import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {HiMinus, HiPlus } from "react-icons/hi";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import CustomerTestimonials from "../components/CustomerTestimonials";
import Footer from "../components/Footer";
import { IoChevronForward } from "react-icons/io5";

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
    <div className="flex items-center gap-2 text-gray-600 px-6 py-4 bg-white shadow-md">
      <p className="group relative flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer hover:underline">
        <Link to="/">Home</Link>
        <IoChevronForward className="text-stone-900 text-xl" />
      </p>
      <p className="group relative flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer hover:underline">
        <Link to="#">Shop</Link>
        <IoChevronForward className="text-stone-900 text-xl" />
      </p>
      <p className="group relative flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer hover:underline">
        <Link to="#">Men</Link>
         <IoChevronForward className="text-stone-900 text-xl" />
      </p>
      <p className="group relative flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer hover:underline">
        <Link to="#">T-Shirt</Link>
         <IoChevronForward className="text-stone-900 text-xl" />
      </p>
    </div>

    <motion.div
      className="p-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          {product.images?.map((img, index) => (
            <motion.img
              key={`img-${index}`}
              src={img}
              alt={`img-${index}`}
              onClick={() => setSelectedImage(img)}
              whileHover={{ scale: 1.2 }}
              className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        <motion.div
          className="flex-1"
          key={selectedImage}
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
        <h1 className="text-3xl font-extrabold uppercase text-gray-800">{product.title}</h1>

        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }, (count, index) => (
            <span key={index}>{index < Math.round(product.rating) ? "★" : "☆"}</span>
          ))}
          <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
        </div>

        <div className="text-xl font-bold">
          ${product.price}{" "}
          <span className="line-through text-gray-500 text-base">
            ${Math.round(product.price * 1.15)}
          </span>{" "}
          <span className="text-red-500 text-sm">-15%</span>
        </div>

        <p className="text-sm text-gray-700">{product.description}</p>

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
          <div className="flex gap-2">
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

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
            <button
              onClick={() => setQuantity((quant) => Math.max(1, quant - 1))}
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
            <button onClick={() => setQuantity((quant) => quant + 1)} className="text-lg p-1">
              <HiPlus />
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-2 rounded-full"
            onClick={() => console.log("Add to cart", { product, quantity, selectedSize })}
          >
            Add to Cart
          </motion.button>
        </div>


        <motion.div
          className="mt-6 border-t pt-4 flex gap-8 text-sm text-gray-500"
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
    <Footer />
   </>
  );
};

export default ProductDetails;