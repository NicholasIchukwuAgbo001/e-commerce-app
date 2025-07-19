const SearchBar = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm text-sm sm:text-base"
      />
    </form>
  );
};

export default SearchBar;
