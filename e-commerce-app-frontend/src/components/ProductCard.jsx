import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="flex flex-col border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
      <Link to={`/productdetails/${product.id}`}>
        <div className="w-full h-48 overflow-hidden rounded-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
          <span className="text-xs text-gray-500 italic">
            Category: {product.category}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-bold text-white bg-green-500 hover:bg-green-700 hover:scale-125 transition duration-200 py-1 px-4 rounded-md">
            ${product.price}
          </p>
          <p className="text-yellow-600 text-sm bg-green-100 py-1 px-3 rounded-md">
            {renderStars(product.rating)}{" "}
            <span className="ml-1">{product.rating}</span>
          </p>
        </div>

        <p>
          <span className="text-xs text-gray-500">In Stock: </span>
          <span className="text-sm font-semibold">
            {product.stock > 0 ? "Yes" : "No"}
          </span>
        </p>
      </Link>

      <button
        className="mt-2 w-full bg-stone-900 text-white py-2 rounded-md hover:bg-stone-800 transition"
        aria-label={`Add ${product.title} to cart`}
        onClick={() => console.log("Add to cart:", product.id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
