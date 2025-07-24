import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = ({ searchItem, setSearchItem }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="relative w-full" onSubmit={handleSearch}>
      <HiOutlineSearch className="absolute top-1/3 left-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search for products."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-800 shadow-sm text-sm sm:text-base"
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}
      />
    </form>
  );
};

export default SearchBar;