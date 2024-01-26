import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
    TableContainer,
    HStack,
    Text,
    useColorMode,
  
} from '@chakra-ui/react';
import { usersData } from '../utils/dummy-data';

export default function TableSection() {
    const { colorMode } = useColorMode()
  return (
      <TableContainer w={{base:"full", md:"602px", lg:'806px'  }} p={4} bg={colorMode === "dark" ? "black" : "white"} borderRadius="14px">
          <HStack justify="space-between" mb={3}>
              <Text fontWeight={600} fontSize={"18px"}>
                Last Orders
              </Text>

              <Text fontWeight={500} textColor="#34CAA5">
                  See all
              </Text>
          </HStack>

      <Table variant='simple' w="full">
        <Thead>
          <Tr>
            <Th textColor={"#9CA4AB"}>Name</Th>
            <Th textColor={"#9CA4AB"}>Date</Th>
            <Th textColor={"#9CA4AB"}>Amount</Th>
            <Th textColor={"#9CA4AB"}>Status</Th>
            <Th textColor={"#9CA4AB"}>Invoice</Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersData.map((user) => (
            <Tr key={user.id}>
              <Td fontWeight={500} textColor={colorMode === "dark" ? "gray.200" : "#3A3F51"} py={4}> 
                <div className="flex items-center">
                  <img src={user.avatarUrl} alt="avatar" className="rounded-full mr-4" />
                  {user.name}
                </div>
              </Td>
              <Td textColor={colorMode === "dark" ? "gray.200" : "#9CA4AB"} py={4}>{user.date}</Td>
              <Td textColor={colorMode === "dark" ? "gray.200" : "#0D062D"} fontWeight={500} py={4}>{`$${user.amount.toLocaleString()}`}</Td>
              <Td fontWeight={400} py={4}>
                {user.status === 'Paid' ? (
                  <span className="text-[#34CAA5] flex align-center">
                     {user.status}
                  </span>
                ) : (
                  <span className="text-[#ED544E] flex align-center">
                     {user.status}
                  </span>
                )}
              </Td>
              <Td textColor={"#0D062D"} display={"flex"} alignItems={"center"} gap={2} fontSize={"14px"}  py={4}>
                <img src="/icons/in_icon.png" alt="icon" />
                <a href={`/invoices/${user.id}`} className={`${colorMode === "dark" ? "text-gray-200" : "text-[#0D062D]"}  font-[400] hover:underline`}>
                  View
                </a>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
