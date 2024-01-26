import React from "react";
import search_icon from "../assets/search_icon.svg";

const Search = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="relative text-gray-600 xl:w-[21.5rem] ">
        <button type="button" className="absolute top-3 xl:top-4 left-5">
          <img src={search_icon} alt="search" />
        </button>
        <input
          className="border border-gray-300 bg-white h-10 ld:h-12 xl:h-12 pl-12 w-full rounded-full  focus:outline-none"
          type="search"
          name="search"
          placeholder="Search..."
        />
      </div>
    </form>
  );
};

export default Search;
