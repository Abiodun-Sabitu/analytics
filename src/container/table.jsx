import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Flex,
  Text,
  HStack, useColorMode, Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { usersData } from '../utils/dummy-data'; 

const MotionTr = motion(Tr);

const ITEMS_PER_PAGE = 5;

const TableSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  const { colorMode } = useColorMode()

  useEffect(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setPaginatedData(usersData.slice(start, end));
  }, [currentPage]);

  const totalPages = Math.ceil(usersData.length / ITEMS_PER_PAGE);

  return (
    <Box p={4} w={{base:"full", md:"602px", lg:'806px'  }}  borderRadius="14px" boxShadow="lg" bg={colorMode === "dark" ? "#161b22" : "white"}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontWeight="600" fontSize="18px">Last Orders</Text>
         <Text cursor={"pointer"} fontWeight={500} textColor="#34CAA5">
                  See all
              </Text>
      </Flex>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Invoice</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((user, index) => (
              <MotionTr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
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
             <Td py={4} isNumeric>
  <HStack spacing={2}>
    <Image src="/icons/in_icon.png" alt="icon" />
    <Text as="a" href={`/invoices/${user.id}`} className="hover:underline" color={colorMode === "dark" ? "gray.200" : "black"}>
      View
    </Text>
  </HStack>
</Td>
              </MotionTr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <HStack justifyContent="center" mt={4}>
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </Button>
        <Text mx={2}>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default TableSection;
