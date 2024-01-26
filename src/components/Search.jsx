import React from "react";
import search_icon from "../assets/search_icon.svg";

const Search = () => {
  return (
    <form action="">
      <div className="relative mx-auto text-gray-600">
        <button type="submit" className="absolute top-4 left-5">
          <img src={search_icon} alt="search" />
        </button>
        <input
          className="border border-gray-300 bg-white h-12 pl-12 w-[21.5rem] rounded-full text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search..."
        />
      </div>
    </form>
  );
};

export default Search;
