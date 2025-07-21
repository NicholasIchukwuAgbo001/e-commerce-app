import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingCart} from "react-icons/hi";

const UserActions = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login"); 
  };

  return (
    <div className="flex items-center gap-4 text-sm">

      <Link
        to="/cartpage"
        className="relative flex items-center gap-1 hover:text-orange-500 cursor-pointer"
      >
        <HiOutlineShoppingCart className="text-stone-900 text-xl" />
        <span className="absolute -top-2 -right-2 text-xs bg-green-500 text-white rounded-full px-1">0</span>
      </Link>

      {currentUser?.loggedIn ? (
        <>
          <div className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer">
            <HiOutlineUser className="text-stone-900 text-xl" />
            <span>{currentUser.name}</span>
          </div>

          <button
            onClick={handleLogout}
            className="hover:bg-red-600 font-semibold py-2 px-4 rounded-full cursor-pointer text-white bg-red-700 "
          >
            <span>Logout</span>
          </button>
        </>
      ) : (
        <>
     
          <Link
            to="/login"
            className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer"
          >
            <HiOutlineUser className="text-stone-900 text-xl" />
            <span>Account</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserActions;
