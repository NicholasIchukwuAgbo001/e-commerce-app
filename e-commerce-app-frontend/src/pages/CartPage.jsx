import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../api/cartSlice";
import { MdDelete } from "react-icons/md"

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6"> My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 items-center border-b pb-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-gray-500">{item.q}</p>

                  <div className="flex items-center mt-2 gap-3">
                    <button
                      className="w-8 h-8 border rounded text-lg"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      className="w-8 h-8 border rounded text-lg"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-600 text-xl"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  title="Remove item"
                >
                <MdDelete />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-stone-50 rounded-xl p-6 shadow-md h-fit">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-600">
              <span>Total Items</span>
              <span>{totalQty}</span>
            </div>
            <div className="flex justify-between mt-2 font-medium">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <form className="py-2">
              <input 
              type="text" 
              name="promo" 
              id="promo" 
              placeholder=" Add promo code" 
              className="py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-500 shadow-sm text-sm sm:text-base"
              required
              />
              <button className="bg-black text-white py-2 px-4 ml-8 rounded-full">Apply</button>
            </form>
            <button className="w-full bg-black text-white py-2 rounded-full hover:opacity-90 transition">
             Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
