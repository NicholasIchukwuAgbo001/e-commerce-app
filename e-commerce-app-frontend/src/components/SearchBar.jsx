import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form
      className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      {query && (
        <IoClose
          onClick={clearSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer hover:text-red-500 transition"
        />
      )}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products, brands, or categories..."
        className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-900 shadow-sm text-sm sm:text-base bg-white"
      />
    </form>
  );
};

export default SearchBar;
