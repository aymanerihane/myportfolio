import { useEffect, useRef, useState } from "react";
import FirstSection from "./components/firstSection";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const totalSections = 4; // Update this based on your section count
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrollingRef.current) return;
      
      isScrollingRef.current = true;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700); // Match this with your transition duration
      
      // Determine scroll direction
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };
    
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    // Mobile touch events support
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e) => {
      if (isScrollingRef.current) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      
      // Only trigger if significant movement detected
      if (Math.abs(diff) > 50) {
        isScrollingRef.current = true;
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 700);
        
        if (diff > 0 && currentSection < totalSections - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (diff < 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
        
        touchStartY = touchY;
      }
    };
    
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSection, totalSections]);
  
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <section className="w-screen h-screen bg-blue-500">
          <FirstSection />
        </section>
        
        <section className="w-screen h-screen bg-red-500 flex justify-center items-center text-white relative">
          <h2 className="text-4xl font-bold">Section 2</h2>
        </section>
        
        <section className="w-screen h-screen bg-green-500 flex justify-center items-center text-white relative">
          <h2 className="text-4xl font-bold">Section 3</h2>
        </section>
        
        <section className="w-screen h-screen bg-purple-500 flex justify-center items-center text-white relative">
          <h2 className="text-4xl font-bold">Section 4</h2>
        </section>
      </div>
    </div>
  );
}