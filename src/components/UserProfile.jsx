import {
  Avatar,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  VStack,
  useColorMode
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Settings_icon from "../assets/Settings_icon.svg";
import logout_icon from "../assets/logout_icon.svg";

const UserProfile = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Menu bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.40)" : "white"} border borderRadius="100px" zIndex="10" h="52px">
      <MenuButton
        as={Button}
        borderColor="#DADDDD"
        borderWidth={"1px"}
        borderRadius={"100px"}
        h="52px"
        bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.40)" : "white"} 
        _hover={colorMode === "dark" ? "bg-black" : "gray.50"}
        rightIcon={<ChevronDownIcon boxSize={7} color="#4F4D57" />}
        spacing={0}
      >
        <HStack>
          <Avatar src="/img/profile_img.png" size="sm" />
          <VStack>
            <Text fontSize="16px" fontWeight={400} textColor={colorMode === "dark" ? "#E5EAEF" : "#26282C"}>
              Justin Bergson
            </Text>
            <Text textColor={colorMode === "dark" ? "gray.300" : "#787486"} fontWeight={400} fontSize={"14px"}>
              Justin@gmail.com
            </Text>
          </VStack>
        </HStack>
      </MenuButton>

      <MenuList bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.40)" : "white"}>
        <MenuItem>
          <img src={Settings_icon} alt="settings" className="mr-3" /> Settings
        </MenuItem>
        <MenuItem>
          <img src={logout_icon} alt="settings" className="mr-3" /> Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;
