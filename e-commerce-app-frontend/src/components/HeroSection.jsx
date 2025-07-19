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

      <div className="relative z-10 h-full flex pt-14 pl-5">
        <div className="text-stone-900 p-6 bg-opacity-50 max-w-xl">
          <h1 className="text-6xl font-bold mb-10">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="bg-stone-900 text-white px-10 py-3 rounded-full font-bold transition duration-300 ease-in-out hover:bg-stone-800 hover:scale-105 hover:shadow-lg">
            <Link to="/login" className="block w-full h-full text-center">
              Shop Now
            </Link>
          </button>
          <CustomerReactionCouter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
