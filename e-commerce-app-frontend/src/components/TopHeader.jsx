import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopHeader = () => {

  const [isvisible, setIsVisible] = useState(true);

  if (!isvisible) return null;

  return (
    <div className="bg-stone-900 h-8 flex items-center justify-center relative px-4">
      <p className="text-white text-sm">
        Sign up and get 20% off your first order.
        <Link className="underline ml-2" to="/signup">
          Sign Up Now
        </Link>
      </p>
      <button
        className="absolute right-3 text-white text-2xl"
        onClick={() => setIsVisible(false)}
      >
        <HiOutlineX />
      </button>
    </div>
  );
};

export default TopHeader;
