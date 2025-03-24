import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./gaming_laptop/scene.gltf");

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [screenAngle, setScreenAngle] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let frame;
    const animate = () => {
      setTime((prevTime) => {
        const newTime = prevTime + 0.02;

        setRotation({
          x: 0.2 * Math.sin(newTime * 0.8), // Random smooth X rotation
          y: 0.5 * Math.sin(newTime * 0.5), // Random smooth Y rotation
        });

        setScreenAngle(-0.4 * Math.sin(newTime) + 0.1);

        return newTime;
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[rotation.x, rotation.y, -0.1]}
      />
      {/* Animating the laptop screen with ease-in-out */}
      {computer.nodes?.Screen && (
        <primitive object={computer.nodes.Screen} rotation={[screenAngle, 0, 0]} />
      )}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
