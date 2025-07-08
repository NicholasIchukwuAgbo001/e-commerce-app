import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="logo.jpeg" alt="Logo" className="h-12" />
    </Link>
  );
};

export default Logo;
