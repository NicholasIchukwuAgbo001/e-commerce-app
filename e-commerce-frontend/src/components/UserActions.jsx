import { Link, useNavigate } from "react-router-dom";

const UserActions = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login"); // Redirect after logout
  };

  return (
    <div className="flex items-center gap-4 text-sm">

      {/* Support link (always visible) */}
      <a
        href="https://wa.me/+2347058705863"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer"
      >
        <ion-icon name="chatbubble-outline" class="text-xl"></ion-icon>
        <span>Support</span>
      </a>

      {/* Cart (always visible for now, count static) */}
      <Link
        to="/cart"
        className="relative flex items-center gap-1 hover:text-orange-500 cursor-pointer"
      >
        <ion-icon name="cart-outline" class="text-xl"></ion-icon>
        <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-1">0</span>
      </Link>

      {currentUser?.loggedIn ? (
        <>
          {/* Account summary */}
          <div className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer">
            <ion-icon name="person-outline" class="text-xl"></ion-icon>
            <span>{currentUser.phone}</span>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="hover:bg-stone-100 p-3 rounded-full cursor-pointer"
          >
            <span>Logout</span>
          </button>
        </>
      ) : (
        <>
          {/* Show Login if not logged in */}
          <Link
            to="/login"
            className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer"
          >
            <ion-icon name="person-add-outline" class="text-xl"></ion-icon>
            <span>Account</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserActions;
