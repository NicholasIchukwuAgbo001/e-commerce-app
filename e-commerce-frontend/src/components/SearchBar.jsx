const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex w-full sm:w-96 max-w-full">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-lg">
        <ion-icon name="search-outline" className="text-xl"></ion-icon>
      </button>
    </div>
  );
};

export default SearchBar;
