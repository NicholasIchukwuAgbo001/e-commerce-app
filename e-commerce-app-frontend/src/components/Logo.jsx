import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <img
        src="SHOP.CO.png"
        alt="Shop.co Logo"
        className="w-40 sm:w-48 md:w-52 object-contain"
      />
    </Link>
  );
};

export default Logo;
