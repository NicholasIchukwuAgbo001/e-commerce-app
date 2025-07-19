import { HiOutlineSearch } from "react-icons/hi" 

const SearchBar = () => {
  return (
    <form className="relative w-full">
      <HiOutlineSearch className="absolute top-1/3 left-4" />
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-500 shadow-sm text-sm sm:text-base"
      />
      
    </form>
  );
};

export default SearchBar;
