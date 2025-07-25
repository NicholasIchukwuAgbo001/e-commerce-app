import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../api/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col border rounded-lg p-3 shadow-sm hover:shadow-md transition bg-white">
      <Link to={`/productdetails/${product.id}`}>
        {/* Aspect ratio for consistent height */}
        <div className="w-full aspect-[3/4] overflow-hidden rounded-md group">
          <img
            src={product.thumbnail}
            alt={product.title || "Product Image"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-110"
          />
        </div>

        <div className="mt-2 flex flex-col gap-0.5">
          <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
          <span className="text-xs text-gray-500 italic">Category: {product.category}</span>
        </div>

        <div className="flex justify-between items-start mt-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-white bg-green-500 hover:bg-green-700 transition duration-200 py-1 px-3 rounded-md">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </p>

            <p className="text-xs">
              <span className="text-gray-500 underline">In Stock: </span>
              <span
                className={`text-sm font-semibold ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.stock > 0 ? product.stock : "Out of stock"}
              </span>
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <p className="text-yellow-600 text-xs bg-green-100 py-1 px-2 rounded-md">
              {renderStars(product.rating)}
              <span className="ml-1">{product.rating}</span>
            </p>
            <span className="text-[11px] font-medium text-yellow-500 border border-yellow-600 px-2 py-0.5 rounded-full">
              -{Math.round(product.discountPercentage)}% OFF
            </span>
          </div>
        </div>
      </Link>

      <button
        className="mt-2 w-full bg-stone-800 text-white text-sm py-2 rounded-md hover:bg-green-900 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={`Add ${product.title} to cart`}
        onClick={handleAddToCart}
        disabled={product.stock < 1}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
