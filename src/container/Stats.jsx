import {
  Box,
  Text,
  Flex,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import {
  RefundIcon,
  OrderIcon,
  ShoppingIcon,
  CoinIcon,
  GreenPerf,
  RedPerf,
} from "../assets";
import PropTypes from "prop-types";

const StatCard = ({ title, icon, amount, change, colorScheme }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      boxShadow="md"
      w={{ base: "full", md: "239px" }}
      h="179px"
      borderRadius="lg"
      bg={colorMode === "dark" ? "rgba(0, 0, 0, 0.40)" : "white"}
    >
      <Flex gap={2} justify={"space-between"} alignItems="center" mb={4}>
        <div className="rounded-[100px] border-[#E6E6E6] border p-2">
          <img src={icon} alt="icon" />
        </div>
        <img
          src={colorScheme === "green" ? GreenPerf : RedPerf}
          alt="performance"
        />
      </Flex>
      <Stat>
        <Text
          fontWeight={500}
          textColor={colorMode === "dark" ? "gray.400" : "#898989"}
          fontSize="18px"
        >
          {title}
        </Text>
        <StatNumber
          textColor={colorMode === "dark" ? "gray.200" : "#3A3F51"}
          fontSize="3xl"
        >
          {amount}
        </StatNumber>
        <StatHelpText fontSize="14px">
          <Box
            fontSize="12px"
            p={1}
            textColor={change >= 0 ? "green.400" : "red.400"}
            rounded={"100px"}
            bg={change >= 0 ? "#34CAA51F" : "#ED544E1F"}
            as="span"
          >
            <StatArrow
              type={change >= 0 ? "increase" : "decrease"}
              color={change >= 0 ? "green.400" : "red.400"}
            />
            {Math.abs(change)}%
          </Box>{" "}
          vs. previous month
        </StatHelpText>
      </Stat>
    </Box>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  colorScheme: PropTypes.string.isRequired,
  change: PropTypes.number,
  icon: PropTypes.string,
};

const StatsContainer = () => {
  return (
    <SimpleGrid
      columns={[1, 2]}
      w={{ base: "full", md: "488px" }}
      spacingX="20px"
      spacingY="20px"
    >
      <StatCard
        title="Total Order"
        icon={RefundIcon}
        amount="350"
        change={23.5}
        colorScheme="green"
      />
      <StatCard
        title="Total Refund"
        icon={OrderIcon}
        amount="270"
        change={-23.5}
        colorScheme="red"
      />
      <StatCard
        title="Average Sales"
        icon={ShoppingIcon}
        amount="1567"
        change={23.5}
        colorScheme="orange"
      />
      <StatCard
        title="Total Income"
        icon={CoinIcon}
        amount="$350.000"
        change={23.5}
        colorScheme="green"
      />
    </SimpleGrid>
  );
};

export default StatsContainer;
