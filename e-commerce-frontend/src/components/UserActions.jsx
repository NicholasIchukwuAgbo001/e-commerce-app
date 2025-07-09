import { Link } from "react-router-dom";

const UserActions = () => {
  return (
    <div className="flex items-center gap-4 text-sm">
      <Link to="/login" className="flex items-center hover:bg-stone-100 p-3 rounded-full cursor-pointer">
        <ion-icon name="person-add-outline" class="text-xl"></ion-icon>
        <span>Account</span>
      </Link>

      <a
        href="https://wa.me/07058705863"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer"
      >
        <ion-icon name="chatbubble-outline" class="text-xl"></ion-icon>
        <span>Support</span>
      </a>

      <Link to="/cart" className="relative flex items-center gap-1 hover:text-orange-500 cursor-pointer">
        <ion-icon name="cart-outline" class="text-xl"></ion-icon>
        <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-1">0</span>
      </Link>
    </div>
  );
};

export default UserActions;
