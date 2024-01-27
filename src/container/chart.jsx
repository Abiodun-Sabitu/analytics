import { Bar } from 'react-chartjs-2';
import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, HStack, Select, Text, useColorMode } from '@chakra-ui/react';
import { options } from '../utils/chart-options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const weeklyData = [5000, 20000, 3000, 28000, 8000, 45000, 8000, 23000, 33000, 40000, 30000, 22000];
const monthlyData = [20000, 50000, 25000, 70000, 32000, 90000, 40000, 60000, 80000, 50000, 75000, 60000];
const biMonthlyData = [30000, 45000, 35000, 65000, 42000, 55000, 47000, 72000, 85000, 48000, 62000, 70000];


const SalesChart = () => {
  const { colorMode } = useColorMode()
  const [timeframe, setTimeframe] = useState('Weekly');

  const chartData = useMemo(() => {
    let activeData;
    switch (timeframe) {
      case 'Monthly':
        activeData = monthlyData;
        break;
      case 'Bi-Monthly':
        activeData = biMonthlyData;
        break;
      case 'Weekly':
      default:
        activeData = weeklyData;
        break;
    }
    return {
       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  datasets: [
    {
      label: 'Sales',
      data: activeData,

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
    }
  }, [timeframe])

  const handleSelectChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <Box width={{base: "full", md:"600px", lg:"806px"}} px={4} borderRadius={"14px"} bg={colorMode === "dark" ? "#161b22" : "white"} pt={6} pb={14} height="380px" position="relative">
      <HStack w="full" mb={3} justify="space-between">
        <Text fontWeight="600" fontSize="18px">Sales Trend</Text>

        <HStack>
            <Text fontWeight={500} fontSize="14px">Short by: </Text>
            <Select fontSize="12px" onChange={handleSelectChange} placeholder="Weekly" w="96px" size="sm" borderRadius="100px" zIndex="10">
              <option value="Monthly">Monthly</option>
              <option value="Bi-Monthly">Bi-Monthly</option>
            </Select>
        </HStack>

      </HStack>
      <Bar data={chartData} options={options(colorMode)} />
    </Box>
  );
};

export default SalesChart;
