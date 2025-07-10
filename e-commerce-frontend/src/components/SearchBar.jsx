const SearchBar = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = (event) => {3
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className=" relative flex w-full sm:w-96 max-w-full">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="flex-grow px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 absolute right-0.5 rounded-full"
      >
        <ion-icon name="search-outline" class="text-xl"></ion-icon>
      </button>
    </form>
  );
};

export default SearchBar;