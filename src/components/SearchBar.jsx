import React from "react";

export default function SearchBar({ city, setCity, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="mb-6 flex">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
        className="flex-grow px-4 py-2 rounded-l-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-r-md shadow-md transition duration-300"
      >
        Search
      </button>
    </div>
  );
}
