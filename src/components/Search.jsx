import { useColorMode } from "@chakra-ui/react";
import search_icon from "../assets/search_icon.svg";

const Search = () => {
  const { colorMode } = useColorMode();

  const textColor = colorMode === "dark" ? "white" : "gray.600";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={`relative text-${textColor} xl:w-[21.5rem]`}>
        <button type="button" className="absolute top-3 xl:top-4 left-5">
          <img src={search_icon} alt="search" />
        </button>
        <input
          className={`border  ${colorMode === "dark" ? "bg-black/70 border-gray-100" : "white border-[#DADDDD]"} h-10 ld:h-12 xl:h-12 pl-12 w-full rounded-full focus:outline-none`}
          type="text"
          name="search"
          placeholder="Search..."
        />
      </div>
    </form>
  );
};

export default Search;
