import { Box, Stack, Text, Progress, useColorModeValue, HStack, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const data = [
  { name: 'Book Bazaar', amount: '$2,500,000', percentage: 80, colorScheme: '#6160DC' },
  { name: 'Artisan Aisle', amount: '$1,800,000', percentage: 60, colorScheme: '#54C5EB' },
  { name: 'Toy Troop', amount: '$1,200,000', percentage: 30, colorScheme: '#FFB74A' },
  { name: 'XStore', amount: '$1,000,000', percentage: 40, colorScheme: '#ED544E' },
  // Add more items as needed
];

const MotionBox = motion(Box);

const TopPlatformItem = ({ name, amount, percentage, colorScheme }) => {
  const bgColor = useColorModeValue(`${colorScheme}`, `${colorScheme}`);
    const trackColor = useColorModeValue("gray.100", "gray.700");
  const initialWidth = 0; 
  const { colorMode } = useColorMode()

  return (
    <Stack  justify="space-between" w={{base: "full", md:"452px"}} bg={colorMode === "dark" ? "black" : "white"} borderRadius="14px" mb={4}>
          <Text fontWeight={600}>{name}</Text>
          <MotionBox bg={trackColor} width="100%" rounded={"full"}>
        <Progress
          as={motion.div}
          value={percentage}
          size="lg"
          colorScheme={colorScheme}
          initial={{ width: initialWidth }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.7, delay: 0.4 }}
          rounded="full"
          bgColor={bgColor}
        />
      </MotionBox>
      <HStack justify="space-between">
      <Text fontWeight={400}>{amount}</Text>
      
      <Text color={"#525252"} fontWeight={400}>{`+${percentage}%`}</Text>
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

const TopPlatformsList = () => {
    const { colorMode } = useColorMode()
  return (
    <Box p={5} w={{base:"full", md:"488px"}} bg={colorMode === "dark" ? "black" : "white"} borderRadius="14px">
      <HStack justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="600" >
        Top Platform
      </Text>

        <Text fontSize="lg" fontWeight="600" >
       See all
      </Text>
          </HStack>
          
      {data.map((item, index) => (
        <TopPlatformItem key={index} {...item} />
      ))}
      <Text color="blue.500" fontWeight="bold" cursor="pointer">
        See All
      </Text>
    </Box>
  );
};

export default TopPlatformsList;
