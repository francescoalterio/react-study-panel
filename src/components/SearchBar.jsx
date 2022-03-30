import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ value, setValue }) => {
  return (
    <nav className="w-full h-20 bg-zinc-800 flex items-center justify-end px-10">
      <Link
        to="add"
        className=" border-solid border-white border-2 rounded-md text-white px-2 py-2 font-bold mx-5 hover:bg-white hover:text-black transition-all"
      >
        Add Technology
      </Link>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-full h-10 w-72 px-5"
      />
    </nav>
  );
};

export default SearchBar;
