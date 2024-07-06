import PropType from "prop-types";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Header({ onSearch }) {
  const [textSearch, setSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex item-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="p-2 rounded text-black"
          onChange={(e) => setSearch(e.target.value)} 
          value={textSearch}
        />
        <button
          className="p-2 text-white bg-red-600 rounded"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

Header.propType = {
  onSearch: PropType.func,
};
export default Header;

