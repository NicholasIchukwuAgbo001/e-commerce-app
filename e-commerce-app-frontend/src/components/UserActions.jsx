import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";

const UserActions = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  // Calculate total quantity
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4 text-sm">
      {/* Cart Icon with count */}
      <Link
        to="/cartpage"
        className="relative flex items-center gap-1 hover:text-orange-500 cursor-pointer"
      >
        <HiOutlineShoppingCart className="text-stone-800 text-3xl" />
        {totalQty > 0 && (
          <span className="absolute -top-3 -right-2 text-xs bg-green-600 text-white rounded-full px-2 py-1 items-center">
            {totalQty}
          </span>
        )}
      </Link>

      {/* If logged in */}
      {currentUser?.loggedIn ? (
        <>
          <div className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer">
            <HiOutlineUser className="text-stone-900 text-3xl" />
            <span>{currentUser.phone || "User"}</span>
          </div>

          <button
            onClick={handleLogout}
            className="hover:bg-red-600 font-semibold py-2 px-4 rounded-full cursor-pointer text-white bg-red-700"
          >
            Logout
          </button>
        </>
      ) : (
        // If not logged in
        <div className="hover:bg-stone-400 rounded-full cursor-pointer relative group border-t-2 border-b-2 border-r-4 border-l-4">
          <p className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer">
            <HiOutlineUser className="text-stone-900 text-xl" />
            <span>Account</span>
          </p>
          <div className="flex flex-col py-2 absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
            <Link
              to="/login"
              className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserActions;
