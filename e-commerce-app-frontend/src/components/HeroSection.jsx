import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerReactionCounter from "./CustomerReactionCouter";

const brandVariants = {
  animate: {
    x: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <motion.img
        src="/Rectangle 2 (1).png"
        alt="Hero"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 h-full flex items-center justify-start px-4 md:px-10">
        <motion.div
          className="bg-opacity-50 max-w-2xl text-stone-900"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            FIND CLOTHES THAT MATCH YOUR STYLE
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </motion.p>

          <motion.button
            className="bg-stone-900 text-white px-8 py-3 sm:px-10 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300 ease-in-out hover:bg-stone-800 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Link to="/login" className="block w-full h-full text-center">
              Shop Now
            </Link>
          </motion.button>

          <CustomerReactionCounter />
        </motion.div>
      </div>

   
      <motion.div className="absolute bottom-0 left-0 w-full h-20 bg-black z-10 text-white flex items-center justify-around sm:text-base">
        <motion.span
          className="text-4xl font-semibold"
          variants={brandVariants}
          animate="animate"
        >
          Versace
        </motion.span>
        <motion.span
          className="text-4xl uppercase font-extrabold"
          variants={brandVariants}
          animate="animate"
          transition={{ delay: 0.2, repeat: Infinity, duration: 1.5 }}
        >
          Zara
        </motion.span>
        <motion.span
          className="text-4xl font-extralight"
          variants={brandVariants}
          animate="animate"
          transition={{ delay: 0.6, repeat: Infinity, duration: 1.5 }}
        >
          Gucci
        </motion.span>
        <motion.span
          className="text-4xl font-semibold"
          variants={brandVariants}
          animate="animate"
          transition={{ delay: 0.8, repeat: Infinity, duration: 1.5 }}
        >
          Prada
        </motion.span>
        <motion.span
          className="text-4xl font-thin"
          variants={brandVariants}
          animate="animate"
          transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
        >
          Calvin Klein
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
