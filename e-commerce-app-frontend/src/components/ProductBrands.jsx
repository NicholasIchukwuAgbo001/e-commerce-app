import { motion } from "framer-motion";

const brandLogos = [
  "versace.png",
  "gucci.png",
  "zaras.png",
  "prada.png",
  "calvin-klein.png",
  "balenciaga.png",
  "dior.png",
  "burberry.png",
];

const ProductBrands = () => {
  return (
    <div className="w-full bg-black overflow-hidden py-4">
      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...brandLogos, ...brandLogos].map((logo, index) => (
          <img
            key={index}
            src={`/${logo}`}
            alt="Brands logo"
            className="h-8 sm:h-16 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductBrands;
