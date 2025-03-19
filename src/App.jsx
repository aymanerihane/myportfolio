import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 100, duration: 2, ease: "power2.out" });
  }, []);

  return (
    <div className="flex bg-black justify-center items-center h-screen bg-gray-900">
      <div ref={boxRef} className="w-20 h-20 bg-blue-500 rounded-lg text-red-600">asd</div>
    </div>
  );
}
