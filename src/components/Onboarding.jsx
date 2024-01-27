import React from "react";
import { motion } from "framer-motion";
import { Box, Text, Button } from "@chakra-ui/react";

const overlayVariants = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, transitionEnd: { display: "none" } },
};
const OnboardingGuide = ({ isOpen, onClose, colorMode }) => (
  <>
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg={colorMode === "dark" ? "#161b22" : "white"}
      p={4}
      boxShadow="md"
      borderRadius="md"
      display={isOpen ? "block" : "none"}
      zIndex={40}
    >
      <Text textColor={colorMode === "dark" ? "white" : "black"} mb={4}>
        Use the pagination controls to view more platforms.
      </Text>
      <Button onClick={onClose} textColor={"red"}>
        Close
      </Button>
    </Box>
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-10"
      initial="closed"
      variants={overlayVariants}
      animate={isOpen ? "open" : "closed"}
      onClick={onClose}
    />
  </>
);

export default OnboardingGuide;
