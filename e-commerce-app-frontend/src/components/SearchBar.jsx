import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); 
  };


  return (
    <form className="relative w-full max-w-m">
      <HiOutlineSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-800 shadow-sm text-sm sm:text-base"
      />
    </form>
  );
};

export default SearchBar;
