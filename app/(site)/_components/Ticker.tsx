"use client"
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// interface TickerProps {
//   text: string;
// }

// const Ticker: React.FC<TickerProps> = ({ text, children }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const textWidth = children[0].width * 50; // Adjust as needed based on the text length and styling

//     controls.start({
//       x: -textWidth,
//       transition: {
//         x: {
//           duration: textWidth / 20, // Adjust the speed of the ticker
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "tween",
//         },
//       },
//     });
//   }, [controls, text]);

//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={controls}
//       style={{
//         whiteSpace: "nowrap",
//         fontSize: "20px", // Adjust text size as needed
//       }}
//     >
//       {children}
//       <div className="inline-block ml-12">
//       {children}
//       </div>
//     </motion.div>
//   );
// };

// export default Ticker;


// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// interface TickerProps {
//   children: React.ReactNode;
// }

// const Ticker: React.FC<TickerProps> = ({ children }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const containerWidth = 200; // Adjust based on the width of your container

//     controls.start({
//       x: -containerWidth,
//       transition: {
//         x: {
//           duration: containerWidth / 50, // Adjust the speed of the ticker
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "linear",
//         },
//       },
//     });
//   }, [controls]);

//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={controls}
//       style={{
//         display: "flex",
//         width: "100%",
//         whiteSpace: "nowrap",
//         overflow: "hidden"
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Ticker;

import React from "react";

const Ticker: React.FC = ({ children }) => {
  return (
    <div className="white-space-nowrap overflow-hidden relative w-full">
      <div className="inline-block p-2 sm:p-4 text-xl text-gray-600 text-transparent hover:text-white hover:text-transparent animate-marquee">
        {children}
      </div>
    </div>
  );
};

export default Ticker;
