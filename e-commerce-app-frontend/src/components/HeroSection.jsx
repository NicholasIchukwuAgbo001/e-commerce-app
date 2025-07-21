import { Link } from "react-router-dom";
import CustomerReactionCouter from "./CustomerReactionCouter";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100">
      <img
        src="/Rectangle 2 (1).png"
        alt="Hero"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />

      <div className="relative z-10 h-full flex items-center justify-start px-4 md:px-10">
        <div className="bg-opacity-50 max-w-2xl text-stone-900">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-10 hover:underline">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="bg-stone-900 text-white px-8 py-3 sm:px-10 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300 ease-in-out hover:bg-stone-800 hover:scale-105 hover:shadow-lg">
            <Link to="/login" className="block w-full h-full text-center">
              Shop Now
            </Link>
          </button>

          <div className="mt-10">
            <CustomerReactionCouter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
