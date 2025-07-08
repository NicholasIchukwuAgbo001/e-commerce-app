import { Link } from "react-router-dom";

const UserActions = () => {
  return (
    <div className="flex items-center gap-4 text-sm">
      <Link to="/login" className="flex items-center hover:bg-stone-100 p-3 rounded-full">
        <ion-icon name="person-add-outline" class="text-xl"></ion-icon>
        <span>Account</span>
      </Link>
      <div className="flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full">
        <ion-icon name="chatbubble-outline" class="text-xl"></ion-icon>
        <span>Support</span>
      </div>
      <Link to="/cart" className="relative flex items-center gap-1 hover:text-orange-500">
        <ion-icon name="cart-outline" class="text-xl"></ion-icon>
        <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-1">0</span>
      </Link>
      <button className="text-sm text-red-500 hover:underline">Logout</button>
    </div>
  );
};

export default UserActions;
