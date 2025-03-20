import React, { useEffect, useRef, useState } from 'react';
import ParticleComponent from './particles';
import nft from '../assets/nft.png';
import alternateImage from '../assets/alternate-image.png'; // Import your second image
import gsap from 'gsap';

const FirstSection = () => {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(nft);
  const [imageTransitioned, setImageTransitioned] = useState(false);

  useEffect(() => {
    const container = imageContainerRef.current;
    const image = imageRef.current;
    
    // Initial setup
    gsap.set(image, { opacity: 1 });
    
    // Create the glitch effect timeline
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        // After glitch effect completes, show the image clearly
        gsap.to(image, {
          filter: "none",
          duration: 0.5
        });
      }
    });
    
    // Glitch effect
    tl.to(image, {
      duration: 0.1,
      opacity: 0.8,
      filter: "url(#glitch)",
      x: "+=5",
      repeat: 3,
      yoyo: true
    })
    .to(image, {
      duration: 0.05,
      skewX: 0,
      filter: "blur(2px) contrast(150%)",
      x: "-=2",
      repeat: 2,
      yoyo: true
    })
    .to(image, {
      duration: 0.1,
      opacity: 0.9,
      filter: "url(#noise)",
      x: "+=3",
      repeat: 2,
      yoyo: true
    })
    .to(image, {
      duration: 0.2,
      opacity: 0.5,
      ease: "power1.inOut"
    })
    .add(() => {
      // Change the image source through state update
      setCurrentImage(alternateImage);
      setImageTransitioned(true);
    })
    .to(image, {
      duration: 0.2,
      opacity: 1,
      ease: "power1.inOut"
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  // Effect to handle the positioning of the second image
  useEffect(() => {
    // Only run this effect after the image has transitioned
    if (imageTransitioned && imageRef.current) {
      // Move the second image to the left
      gsap.to(imageRef.current, {
        duration: 0.5,
        x: "-30px", // Adjust this value to move more or less to the left
        ease: "power2.out"
      });
    }
  }, [imageTransitioned]);

  return (
    <div className="bg-[#0d0d0d] text-white font-[z] w-full h-full relative">
      <ParticleComponent id="particles"/>
      
      {/* SVG Filters for glitch effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glitch">
            <feTurbulence baseFrequency="0.15" numOctaves="1" type="fractalNoise" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="noise">
            <feTurbulence baseFrequency="0.8" numOctaves="3" type="fractalNoise" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      
      <header className="header flex justify-between items-center px-20 py-5">
         
      </header>
      <div className="container grid grid-cols-2 h-[calc(100%-120px)] w-full">
          <div className="side-one flex flex-col justify-center gap-12 text-capitalize mx-20">
              <h1 className="text-[70px] leading-[1.2] z-10">Hi There! <span>👋🏻</span> <br /> I'M AYMANE RIHANE <br /></h1>
              <h2 className='text-[#f3111c] z-10'>Software developer</h2>
          </div>
          <div className="side-two flex items-end justify-center px-6 relative">
              <div ref={imageContainerRef} className="overflow-hidden relative w-[400px] h-[400px] bg-gradient-to-r from-[#ee128f] to-[#f3111c] rounded-full mt-20 shadow-[0_0_0_25px_rgb(33,33,33)]">
                  <img 
                    ref={imageRef}
                    src={currentImage} 
                    alt="profile" 
                    className="max-w-[700px] max-h-[700px] absolute bottom-0 object-cover" 
                  />
              </div>
          </div>
      </div>
    </div>
  );
};

export default FirstSection;