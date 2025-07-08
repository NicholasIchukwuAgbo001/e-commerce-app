import React from 'react'

const SearchBar = () => (
  <div className="flex border rounded-full overflow-hidden w-full">
    <input
      type="text"
      placeholder="Search for products, brands and more"
      className="flex-1 px-4 py-2 text-sm outline-none"
    />
    <button
      type="submit"
      className="bg-orange-500 px-4 text-white flex items-center justify-center"
      aria-label="Search"
    >
      <ion-icon name="search-outline"></ion-icon>
    </button>
  </div>
)

export default SearchBar
