import { useEffect, useRef, useState, useCallback } from "react";
import FirstSection from "./components/firstSection";
import ProjectCards from "./components/ProjectCards";
import myImage from './assets/myImage.png';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const totalSections = 4; // Update this based on your section count
 
  // Handle page loading
  useEffect(() => {
    // Check if the document and all resources are fully loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
      // Fallback in case load event doesn't fire
      setTimeout(() => setIsLoading(false), 3000);
      
      return () => window.removeEventListener('load', () => setIsLoading(false));
    }
  }, []);

  // Throttled scroll handler using useCallback for better performance
  const handleScroll = useCallback((direction) => {
    const now = Date.now();
    
    // Don't process new scroll events while transition is happening
    if (isScrollingRef.current) return;
    
    // Add additional time check to prevent rapid scrolling on touchpads
    if (now - lastScrollTimeRef.current < 100) return;
    
    lastScrollTimeRef.current = now;
    isScrollingRef.current = true;
    
    setCurrentSection(prev => {
      if (direction > 0 && prev < totalSections - 1) {
        return prev + 1;
      } else if (direction < 0 && prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    
    // Reset scrolling flag after transition completes
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 700); // Match this with your transition duration
  }, [totalSections]);
 
  useEffect(() => {
    if (isLoading) return; // Don't set up scroll handlers until loading is done
    
    document.body.style.overflow = "hidden";
    
    // Track accumulated delta for smoother touchpad handling
    let accumulatedDelta = 0;
    const deltaThreshold = 50; // Adjust this value to control sensitivity
   
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Accumulate delta values for smoother touchpad scrolling
      accumulatedDelta += e.deltaY;
      
      // Only trigger scroll when accumulated delta exceeds threshold
      if (Math.abs(accumulatedDelta) > deltaThreshold) {
        const direction = accumulatedDelta > 0 ? 1 : -1;
        handleScroll(direction);
        accumulatedDelta = 0; // Reset accumulated delta
      }
    };
   
    // Use passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });
   
    // Touch handling for mobile
    let touchStartY = 0;
   
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
   
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      // Only trigger if significant movement detected
      if (Math.abs(diff) > deltaThreshold) {
        const direction = diff > 0 ? 1 : -1;
        handleScroll(direction);
      }
    };
   
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
   
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        handleScroll(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        handleScroll(-1);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
   
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, isLoading]);
 
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
        <h2 className="text-2xl font-semibold">Loading...</h2>
        <p className="text-gray-400 mt-2">Please wait while we prepare your experience</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      
      <div
        className="w-full h-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <section className="w-screen h-screen bg-blue-500 flex-shrink-0">
          <FirstSection />
        </section>
       
        <section className="w-screen  container flex-wrap gap-5 bg-red-500 flex-shrink-0 flex justify-around items-center text-white">
          
          <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
          <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
          <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
          <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
          <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
          <ProjectCards imgPath={myImage}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              />
        </section>
       
        <section className="w-screen h-screen bg-green-500 flex-shrink-0 flex justify-center items-center text-white">
          <h2 className="text-4xl font-bold">Section 3</h2>
        </section>
       
        <section className="w-screen h-screen bg-purple-500 flex-shrink-0 flex justify-center items-center text-white">
          <h2 className="text-4xl font-bold">Section 4</h2>
        </section>
      </div>
      
      {/* Section indicators */}
      {/* <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        {Array.from({ length: totalSections }).map((_, index) => (
          <div
            key={index}
            className={`w-1 h-3 my-2 rounded-full cursor-pointer transition-colors ${
              currentSection === index ? "bg-white" : "bg-gray-400 bg-opacity-50 hover:bg-opacity-80"
            }`}
            onClick={() => {
              if (!isScrollingRef.current) {
                isScrollingRef.current = true;
                setCurrentSection(index);
                if (scrollTimeoutRef.current) {
                  clearTimeout(scrollTimeoutRef.current);
                }
                scrollTimeoutRef.current = setTimeout(() => {
                  isScrollingRef.current = false;
                }, 700);
              }
            }}
          />
        ))}
      </div> */}
    </div>
  );
}