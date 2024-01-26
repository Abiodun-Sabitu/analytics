import { Box, useColorMode, Image, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { DARK_MODE_ACTIVE, DARK_MODE_INACTIVE, LIGHT_MODE_ACTIVE, LIGHT_MODE_INACTIVE } from '../utils/theme-icon';
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ToggleSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    const slideInVariants = {
        initial: {
            x: colorMode === "dark" ? -48 : 48, 
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
            },
        },
        exit: {
            x: colorMode === "dark" ? 48 : -48,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <Box position="relative" maxW="100px" style={{ transform: "rotate(90deg)" }}
            maxH="80px" bg={colorMode === "dark" ? "gray.800" : "white"} borderRadius="full" p="2px" mt="40px" cursor="pointer">
            <div>
                <MotionBox
                    w="100px"
                    h="full"
                    py={1}
                    px={2}
                    bg={colorMode === "dark" ? "gray.800" : "white"}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    key={colorMode} // Use colorMode as key to trigger animations
                    onClick={toggleColorMode}
                >
                    {colorMode === "light" ? (
                        <HStack w="full" justify="space-between">
                            <MotionImage src={LIGHT_MODE_ACTIVE} alt="Light mode" variants={slideInVariants} initial="initial" animate="animate" exit="exit" />
                            <MotionImage src={DARK_MODE_INACTIVE} alt="Dark mode" variants={slideInVariants} initial="initial" animate="animate" exit="exit" />
                        </HStack>
                    ) : (
                        <HStack w="full" justify="space-between">
                            <MotionImage src={LIGHT_MODE_INACTIVE} alt="Light mode" variants={slideInVariants} initial="initial" animate="animate" exit="exit" />
                            <MotionImage src={DARK_MODE_ACTIVE} alt="Dark mode" variants={slideInVariants} initial="initial" animate="animate" exit="exit" />
                        </HStack>
                    )}
                </MotionBox>
            </div>
        </Box>
    );
};

export default ToggleSwitch;
