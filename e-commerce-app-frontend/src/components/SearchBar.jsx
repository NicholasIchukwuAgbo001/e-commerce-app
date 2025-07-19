const SearchBar = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = (event) => {
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
    </form>
  );
};

export default SearchBar;