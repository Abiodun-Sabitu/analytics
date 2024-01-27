import {
  Box,
  Stack,
  Text,
  Progress,
  useColorModeValue,
  HStack,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import OnboardingGuide from "../components/Onboarding";

console.log("");
const data = [
  {
    name: "Book Bazaar",
    amount: "$2,500,000",
    percentage: 80,
    colorScheme: "#6160DC",
  },
  {
    name: "Artisan Aisle",
    amount: "$1,800,000",
    percentage: 60,
    colorScheme: "#54C5EB",
  },
  {
    name: "Toy Troop",
    amount: "$1,200,000",
    percentage: 30,
    colorScheme: "#FFB74A",
  },
  {
    name: "XStore",
    amount: "$1,000,000",
    percentage: 40,
    colorScheme: "#ED544E",
  },
  {
    name: "Gadget Galaxy",
    amount: "$950,000",
    percentage: 50,
    colorScheme: "#6D5B98",
  },
  {
    name: "Fashion Forward",
    amount: "$1,500,000",
    percentage: 70,
    colorScheme: "#FF6B6B",
  },
  {
    name: "Home Harmony",
    amount: "$2,200,000",
    percentage: 90,
    colorScheme: "#4ECDC4",
  },
  {
    name: "Tech Trends",
    amount: "$2,000,000",
    percentage: 85,
    colorScheme: "#F7B731",
  },
  {
    name: "Gourmet Goodies",
    amount: "$1,300,000",
    percentage: 55,
    colorScheme: "#C38D9E",
  },
  {
    name: "Playtime Paradise",
    amount: "$800,000",
    percentage: 45,
    colorScheme: "#41B3A3",
  },
];

const MotionBox = motion(Box);

const TopPlatformItem = ({ name, amount, percentage, colorScheme }) => {
  const bgColor = useColorModeValue(`${colorScheme}`, `${colorScheme}`);
  const trackColor = useColorModeValue("gray.100", "gray.700");
  const { colorMode } = useColorMode();

  const [hover, setHover] = useState(false);

  const progressBarStyles = {
    initial: { width: 0, height: "20px" },
    animate: { width: `${percentage}%`, height: hover ? "24px" : "20px" },
    transition: { duration: 0.9, ease: "easeOut", delay: 5 },
  };

  return (
    <Stack
      justify="space-between"
      w={"full"}
      bg={colorMode === "dark" ? "#161b22" : "white"}
      borderRadius="14px"
      mb={4}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text fontWeight={600}>{name}</Text>
      <MotionBox bg={trackColor} width="100%" rounded={"full"}>
        <Progress
          as={motion.div}
          value={percentage}
          size="lg"
          colorScheme={colorScheme}
          initial={progressBarStyles.initial}
          animate={progressBarStyles.animate}
          transition={progressBarStyles.transition}
          rounded="full"
          bgColor={bgColor}
        />
      </MotionBox>
      <HStack justify="space-between">
        <Text fontWeight={400}>{amount}</Text>
        <Text
          color={colorMode === "dark" ? "gray.100" : "#525252"}
          fontWeight={400}
        >{`+${percentage}%`}</Text>
      </HStack>
    </Stack>
  );
};

TopPlatformItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  colorScheme: PropTypes.string.isRequired,
};

const ITEMS_PER_PAGE = 4;
const TopPlatformsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isGuideOpen, setGuideOpen] = useState(false);
  const [paginatedData, setPaginatedData] = useState([]);

  const { colorMode } = useColorMode();

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setPaginatedData(data.slice(start, end));
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <>
      <Box
        p={5}
        w={"full"}
        bg={colorMode === "dark" ? "#161b22" : "white"}
        borderRadius="14px"
      >
        <HStack justify="space-between" mb={4}>
          <Text fontSize="lg" fontWeight="600">
            Top Platform
          </Text>
          <Text
            fontSize="lg"
            fontWeight="600"
            textColor="#34CAA5"
            onClick={() => setGuideOpen(true)}
          >
            See all
          </Text>
        </HStack>
        {paginatedData.map((item, index) => (
          <TopPlatformItem key={index} {...item} />
        ))}
        <HStack justifyContent="center" mt={4}>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            display={currentPage === 1 ? "none" : "block"}
          >
            Previous
          </Button>
          <Text mx={2}>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            display={currentPage === data.length ? "none" : "block"}
          >
            Next
          </Button>
        </HStack>
      </Box>

      <OnboardingGuide
        isOpen={isGuideOpen}
        onClose={() => setGuideOpen(false)}
        colorMode={colorMode}
      />
    </>
  );
};

export default TopPlatformsList;
