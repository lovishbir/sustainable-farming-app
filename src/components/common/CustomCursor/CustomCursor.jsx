 // src/components/common/CustomCursor/CustomCursor.jsx

 import React, { useState, useEffect, useRef } from 'react';
 import { motion } from 'framer-motion';
 import './CustomCursor.css';

 const CustomCursor = () => {
   // Main cursor position state
   const [position, setPosition] = useState({ x: 0, y: 0 });
  
   // Trailing cursor position with delay
   const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  
   // Interaction states
   const [isHovering, setIsHovering] = useState(false);
   const [isClicking, setIsClicking] = useState(false);
   const [cursorText, setCursorText] = useState('');
   const [cursorVariant, setCursorVariant] = useState('default');
  
   // Refs for performance optimization
   const mousePos = useRef({ x: 0, y: 0 });
   const rafId = useRef(null);

   // Set up event listeners and animation loop
   useEffect(() => {
     const updateCursorPosition = (e) => {
       // Store mouse position in ref for animation loop
       mousePos.current = { x: e.clientX, y: e.clientY };
     };

     const handleMouseDown = () => setIsClicking(true);
     const handleMouseUp = () => setIsClicking(false);

     const handleMouseOver = (e) => {
       const target = e.target;
      
       // Check for interactive elements
       if (
         target.tagName === 'BUTTON' ||
         target.tagName === 'A' ||
         target.closest('button') ||
         target.closest('a') ||
         target.classList.contains('clickable')
       ) {
         setIsHovering(true);
         setCursorVariant('hover');
        
         // Get data attributes for custom cursor text
         const cursorTextAttr = target.getAttribute('data-cursor-text') || 
                               (target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text'));
        
         if (cursorTextAttr) {
           setCursorText(cursorTextAttr);
           setCursorVariant('text');
         }
        
         // Get custom cursor variant
         const variantAttr = target.getAttribute('data-cursor-variant') ||
                            (target.closest('[data-cursor-variant]')?.getAttribute('data-cursor-variant'));
        
         if (variantAttr) {
           setCursorVariant(variantAttr);
         }
       } else {
         setIsHovering(false);
         setCursorText('');
         setCursorVariant('default');
       }
     };

     // Add custom cursor behaviors to key element types
     const addCursorBehaviors = () => {
       // Add to all buttons
       document.querySelectorAll('button:not([data-cursor-variant])').forEach(button => {
         button.setAttribute('data-cursor-variant', 'button');
       });
      
       // Add to all links without custom cursor already
       document.querySelectorAll('a:not([data-cursor-variant])').forEach(link => {
         link.setAttribute('data-cursor-variant', 'link');
       });
      
       // Add to cards or other interactive elements
       document.querySelectorAll('.feature-card, .technique-card, .resource-card').forEach(card => {
         card.setAttribute('data-cursor-variant', 'hover');
       });
     };

     // Call this function
     addCursorBehaviors();

     // Set up a mutation observer to handle dynamically added elements
     const observeDOM = () => {
       const observer = new MutationObserver((mutations) => {
         // When DOM changes, reapply cursor behaviors
         addCursorBehaviors();
       });
      
       // Start observing the document body for DOM changes
       observer.observe(document.body, {
         childList: true,
         subtree: true
       });
      
       return observer;
     };
    
     // Create and store the observer
     const observer = observeDOM();

     // Animation loop for smooth cursor movement
     const animateCursor = () => {
       setPosition({
         x: mousePos.current.x,
         y: mousePos.current.y
       });
      
       // Trail follows with delay
       setTrailPosition(prev => ({
         x: prev.x + (mousePos.current.x - prev.x) * 0.15,
         y: prev.y + (mousePos.current.y - prev.y) * 0.15
       }));
      
       rafId.current = requestAnimationFrame(animateCursor);
     };
    
     // Start animation loop
     rafId.current = requestAnimationFrame(animateCursor);

     // Add event listeners
     document.addEventListener('mousemove', updateCursorPosition);
     document.addEventListener('mouseover', handleMouseOver);
     document.addEventListener('mousedown', handleMouseDown);
     document.addEventListener('mouseup', handleMouseUp);

     // Clean up
     return () => {
       document.removeEventListener('mousemove', updateCursorPosition);
       document.removeEventListener('mouseover', handleMouseOver);
       document.removeEventListener('mousedown', handleMouseDown);
       document.removeEventListener('mouseup', handleMouseUp);
       cancelAnimationFrame(rafId.current);
       observer.disconnect();
     };
   }, []);

   return (
     <>
       {/* Main cursor */}
       <motion.div 
         className={`custom-cursor-main ${isClicking ? 'clicking' : ''}`}
         animate={cursorVariant}
         variants={{
           default: { 
             height: 24,
             width: 24,
             backgroundColor: "rgba(76, 175, 80, 0.5)",
           },
           hover: { 
             height: 40,
             width: 40,
             backgroundColor: "rgba(76, 175, 80, 0.3)",
             mixBlendMode: "difference"
           },
           text: {
             height: 'auto',
             width: 'auto',
             padding: '8px 12px',
             backgroundColor: "rgba(56, 142, 60, 0.9)",
             color: "#fff",
             fontSize: "14px"
           },
           link: {
             height: 60,
             width: 60,
             backgroundColor: "rgba(76, 175, 80, 0.2)",
             mixBlendMode: "difference"
           },
           button: {
             height: 50,
             width: 50,
             backgroundColor: "rgba(255, 193, 7, 0.4)",
             mixBlendMode: "normal"
           }
         }}
         transition={{
           type: "spring",
           mass: 0.3,
           stiffness: 100,
           damping: 15
         }}
         style={{
           left: `${position.x}px`,
           top: `${position.y}px`
         }}
       >
         {cursorVariant === 'text' && cursorText}
        
         {/* Leaf shape for default cursor */}
         {cursorVariant === 'default' && (
           <svg viewBox="0 0 24 24" className="cursor-leaf">
             <path d="M6,12C6,6 12,3 17,3C17,9 11,12 6,12Z" />
           </svg>
         )}
       </motion.div>
      
       {/* Trailing cursor */}
       <motion.div 
         className="custom-cursor-trail"
         style={{
           left: `${trailPosition.x}px`,
           top: `${trailPosition.y}px`
         }}
       >
         <svg viewBox="0 0 24 24" className="cursor-trail-leaf">
           <path d="M6,12C6,6 12,3 17,3C17,9 11,12 6,12Z" />
         </svg>
       </motion.div>
      
       {/* Ring cursor effect */}
       <motion.div
         className="custom-cursor-ring"
         style={{
           left: `${position.x}px`,
           top: `${position.y}px`
         }}
         animate={{
           scale: isHovering ? 1.5 : 1,
           opacity: isHovering ? 0.5 : 0.2
         }}
         transition={{
           type: "spring",
           mass: 0.3,
           stiffness: 200,
           damping: 20
         }}
       />
     </>
   );
 };

export default CustomCursor;



// import React, { useState, useEffect } from 'react';
// import './CustomCursor.css';
// import { motion } from 'framer-motion';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const handleLinkHoverIn = () => setCursorVariant("hover");
//     const handleLinkHoverOut = () => setCursorVariant("default");

//     const links = document.querySelectorAll('a, button, .hover-effect');
    
//     links.forEach(link => {
//       link.addEventListener('mouseenter', handleLinkHoverIn);
//       link.addEventListener('mouseleave', handleLinkHoverOut);
//     });

//     return () => {
//       links.forEach(link => {
//         link.removeEventListener('mouseenter', handleLinkHoverIn);
//         link.removeEventListener('mouseleave', handleLinkHoverOut);
//       });
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//       scale: 1
//     },
//     hover: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//       scale: 1.5,
//       backgroundColor: "rgba(0, 112, 243, 0.5)",
//       mixBlendMode: "difference"
//     }
//   };

//   return (
//     <>
//       <motion.div
//         className="cursor-dot"
//         variants={variants}
//         animate={cursorVariant}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       />
//       <motion.div
//         className="cursor-ring"
//         animate={{
//           x: mousePosition.x - 32,
//           y: mousePosition.y - 32,
//         }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       />
//     </>
//   );
// };

// export default CustomCursor;