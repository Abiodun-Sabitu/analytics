/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Box,
  useColorMode,
  Skeleton,
  Badge,
  Text,
  Stack,
  Divider,
  Button,
  background,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { dummyNotifications } from "../utils/notification";
const overlayVariants = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, transitionEnd: { display: "none" } },
};

const NotificationItem = ({ notification, colorMode }) => {
  const { type, content, timestamp, isRead } = notification;
  const [isLoading, setIsLoading] = useState(true);
  const getBadgeColor = () => {
    switch (type) {
      case "message":
        return "blue";
      case "friend_request":
        return "green";
      case "alert":
        return "red";
      case "update":
        return "purple";
      default:
        return "gray";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box
      p={3}
      bg={isRead ? "transparent" : "transparent"}
      borderRadius="md"
      boxShadow="sm"
      _hover={{
        bg:
          colorMode === "dark" ? "rgba(0,0,0,0.2)" : "rgba(52, 202, 165, 0.1)",
      }}
    >
      <Stack bg={"transparent"} direction="column" spacing={3} align="start">
        <Badge colorScheme={getBadgeColor()}>{type}</Badge>
        <Skeleton isLoaded={!isLoading}>
          <Text
            textColor={colorMode === "dark" ? "gray.200" : "gray.800"}
            flex="1"
            fontWeight={isRead ? "normal" : "bold"}
          >
            {content}
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>
          <Text
            textColor={colorMode === "dark" ? "gray.200" : "gray.800"}
            fontSize="sm"
            color="gray.500"
          >
            {timestamp}
          </Text>
          <Text
            fontWeight="semibold"
            textColor={isRead ? "" : "green.100"}
            fontSize={"xs"}
          >
            {isRead ? "" : "unread"}
          </Text>
        </Skeleton>
      </Stack>
    </Box>
  );
};

const NotificationBar = ({ isOpen, closeBar }) => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "dark" ? "#161b22" : "white";

  // State to manage loading of notifications
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      setNotifications(dummyNotifications);
    }, 3000); // 3 seconds delay
  }, []);

  // Animation variants for Framer Motion
  const sidebarVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  if (!isOpen) return null;

  return (
    <div>
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className="z-40"
        style={{
          position: "fixed",
          height: "100vh",
          width: "300px",
          top: 0,
          right: 0,
        }}
      >
        <Box bg={bg} p={4} overflowY="auto">
          <Button onClick={closeBar}>Close</Button>
          {isLoading
            ? [...new Array(5)].map((_, index) => (
                <Skeleton key={index} height="50px" my="10px" />
              ))
            : notifications.map((notification, index) => (
                <Box
                  key={index}
                  bg={"transparent"}
                  p={3}
                  my={2}
                  borderRadius="md"
                >
                  <NotificationItem
                    notification={notification}
                    colorMode={colorMode}
                  />
                  <Divider my={2} />
                </Box>
              ))}
        </Box>
      </motion.aside>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        initial="closed"
        variants={overlayVariants}
        animate={isOpen ? "open" : "closed"}
        onClick={closeBar}
      />
    </div>
  );
};

export default NotificationBar;
