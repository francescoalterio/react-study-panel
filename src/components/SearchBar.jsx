import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ value, onChange }) => {
  return (
    <nav className="w-full h-20 bg-zinc-800 flex items-center justify-between lg:justify-end px-3 lg:px-10">
      <Link
        to="add"
        className=" border-solid border-white border-2 rounded-md text-white px-2 py-2 font-bold mr-2 hover:bg-white hover:text-black transition-all text-sm"
      >
        Add Technology
      </Link>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="rounded-full h-10 w-44 lg:w-72 px-5"
        placeholder="Search"
      />
    </nav>
  );
};

export default SearchBar;
