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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Settings_icon from "../assets/Settings_icon.svg";
import logout_icon from "../assets/logout_icon.svg";

const userProfile = () => {
  return (
    <Menu bg="white" border borderRadius="100px" zIndex="10" h="52px">
      <MenuButton
        as={Button}
        borderColor="#DADDDD"
        borderWidth={"1px"}
        borderRadius={"100px"}
        h="52px"
        bg="white"
        rightIcon={<ChevronDownIcon boxSize={7} color="#4F4D57" />}
        spacing={0}
      >
        <HStack>
          <Avatar src="/img/profile_img.png" size="sm" />
          <VStack>
            <Text fontSize="16px" fontWeight={400} textColor="#26282C">
              Justin Bergson
            </Text>
            <Text textColor={"#787486"} fontWeight={400} fontSize={"14px"}>
              Justin@gmail.com
            </Text>
          </VStack>
        </HStack>
      </MenuButton>

      <MenuList>
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

export default userProfile;
