import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md text-gray-800">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-2 bg-orange-50 text-sm">
        <div className="flex items-center gap-2">
          <ion-icon name="car-sport-outline" class="text-orange-500 text-xl"></ion-icon>
          <div>
            <h3 className="font-semibold">Free Shipping on all Orders »</h3>
            <span className="text-xs text-gray-500">limited-time-offer</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ion-icon name="bus-outline" class="text-orange-500 text-xl"></ion-icon>
          <div>
            <h3 className="font-semibold">Delivery guarantee</h3>
            <span className="text-xs text-gray-500">Refund for any issues</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ion-icon name="phone-portrait-outline" class="text-orange-500 text-xl"></ion-icon>
          <h3 className="font-semibold">Get the App</h3>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4">
        <Link>
          <img src="jumia.png" alt="Logo" className="h-10 object-contain" />
        </Link>

        <div className="flex flex-wrap gap-4 items-center justify-center text-sm">
          <div className="flex items-center gap-1">
            <ion-icon name="star-outline" class="text-orange-500 text-xl"></ion-icon>
            <span>Best-selling items</span>
          </div>
          <div className="flex items-center gap-1">
            <ion-icon name="sparkles-outline" class="text-orange-500 text-xl"></ion-icon>
            <span>5-star Rating</span>
          </div>
          <div>
            <span className="font-medium">Categories</span>
          </div>
        </div>

        <div className="flex w-full sm:w-96 max-w-full">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-lg">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link className="flex items-center gap-1 hover:text-orange-500">
            <ion-icon name="person-add-outline" class="text-xl"></ion-icon>
            <span>Account</span>
          </Link>
          <div className="flex items-center gap-1 hover:text-orange-500">
            <ion-icon name="chatbubble-outline" class="text-xl"></ion-icon>
            <span>Support</span>
          </div>
          <Link className="relative flex items-center gap-1 hover:text-orange-500">
            <ion-icon name="cart-outline" class="text-xl"></ion-icon>
            <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-1">0</span>
          </Link>
          <button className="text-sm text-red-500 hover:underline">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
