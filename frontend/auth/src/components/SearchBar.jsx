import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // You can call an API or filter data here
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="border placeholder-black text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none bg-white"
      />
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-500 hover:cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
