import { useColorMode } from "@chakra-ui/react";
import search_icon from "../assets/search_icon.svg";
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const Search = () => {
  const { colorMode } = useColorMode();

  return (
    <form
      className={`overflow-hidden ${colorMode === "dark" ? "transparent border-gray-700" : "white border-[#DADDDD]"}`} 
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputGroup  >
        <InputLeftElement  height="100%" display="flex" alignItems="center" justifyContent="center">
          <img className="w-5" src={search_icon} alt="search" />
        </InputLeftElement>
        <Input w={{base:"full", md:"290px", lg:"340px"}} h={{base:"48px", lg:"48px"}} borderRadius={"100px"}
         _focus={{
          borderColor: "teal.500", 
          boxShadow: "0 0 0 1px rgba(56, 178, 172, 0.6)", 
        }}
          pr='4.5rem' placeholder="Search..." />
      </InputGroup>

    </form>
  );
};

export default Search;
