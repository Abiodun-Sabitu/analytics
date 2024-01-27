// import  { useState, useRef } from 'react';
// import { motion } from 'framer-motion';

// const getRandomPosition = (containerRect, elementWidth, elementHeight) => {
//   const x = Math.floor(Math.random() * (containerRect.width - elementWidth));
//   const y = Math.floor(Math.random() * (containerRect.height - elementHeight));

//   return { x, y };
// };

// const ComingSoonPage = () => {
//   const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//   const containerRef = useRef();
//   const buttonRef = useRef();

//   const handleMouseEnter = () => {
//     if (!isCheckboxChecked && containerRef.current) {
//       const containerRect = containerRef.current.getBoundingClientRect();
//       const { x, y } = getRandomPosition(containerRect, buttonRef.current.offsetWidth, buttonRef.current.offsetHeight);
//       buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
//     }
//   };

//   return (
//      <div ref={containerRef} style={{ height: '100vh', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
//     <section className="h=300px">
//               <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Coming Soon</h1>
//       <motion.button
//         ref={buttonRef}
//         initial={{ x: '50%', y: '50%', translateX: '-50%', translateY: '-50%' }}
//         style={{
//           padding: '10px 20px',
//           fontSize: '1.2rem',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           position: 'absolute',
//         }}
//         onHoverStart={handleMouseEnter}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => isCheckboxChecked && console.log("Button Clicked!")}
//       >
//         Notify Me
//       </motion.button>
//       <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
//         <label>
//           <input
//             type="checkbox"
//             checked={isCheckboxChecked}
//             onChange={(e) => setIsCheckboxChecked(e.target.checked)}
//           />
//           Download our app
//         </label>
//       </div>
//       </section>
//     </div>
//   );
// };

// export default ComingSoonPage;

// ComingSoon.js

import { Box, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'whiteAlpha.500', dark: 'blackAlpha.500' };
  const color = { light: 'black', dark: 'white' };

  return (
      <motion.div
          className="grid place-items-centwer"
      initial={{ scale: 0.9 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Box
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        p={6}
        rounded="md"
        boxShadow="lg"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="4xl">Coming Soon</Text>
        {/* Additional content */}
      </Box>
    </motion.div>
  );
};

export default ComingSoon;

