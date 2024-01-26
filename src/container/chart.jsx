import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Avatar, Box, HStack, Select, Text, Menu, MenuButton, MenuItem, MenuList, Button, VStack, ButtonGroup } from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { options } from '../utils/chart-options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  datasets: [
    {
      label: 'Sales',
      data: [5000, 20000, 3000, 28000, 8000, 45000, 8000, 23000, 33000, 40000, 30000, 22000],

       backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const value = context.raw;
        const alpha = value === Math.max(...context.dataset.data) ? 1 : 0.4; 
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, `rgba(52, 202, 165, ${alpha})`); 
        gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);
        return gradient;
          },
        barThickness: 30,
        categoryPercentage: 1.0,
        borderRadius: {
        topLeft: 50,
        topRight: 50,
        bottomLeft: 0,
        bottomRight: 0,
      },
      borderSkipped: false,
    },
  ],
};

const SalesChart = () => {
  return (
    <Box width={{base: "full", md:"700px"}} px={4} borderRadius={"14px"} bg="white" py={6} height="300px" position="relative">
      <HStack w="full" mb={3} justify="space-between">
        <Text fontWeight="600" fontSize="18px">Sales Trend</Text>

        <HStack>
            <Text fontWeight={500} fontSize="14px">Short by: </Text>
            <Select fontSize="12px" focusBorderColor='' placeholder="Weekly" w="96px" size="sm" borderRadius="100px"   zIndex="10">
            {/* Options here */}
            </Select>

            <Menu bg="white" preventOverflow border borderRadius="100px" zIndex="10" h="52px">
                    <MenuButton as={Button} borderColor="#26282C" borderWidth={"1px"}  borderRadius={"100px"} preventOverflow h="52px" bg="white" rightIcon={<ChevronDownIcon size="lg" />}>
                    <HStack>
                        <Avatar src="/img/profile_img.png" size="sm" />    
                        <VStack>
                            <Text fontSize="16px" fontWeight={400} textColor="#26282C">Justin Bergson</Text>
                            <Text textColor={"#787486"} fontWeight={400} fontSize={"14px"}>Justin@gmail.com</Text>
                        </VStack>

                   </HStack>
                      </MenuButton>
                      
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </HStack>

      </HStack>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default SalesChart;
