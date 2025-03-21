import ParticleComponent from './particles';
import myImage from '../assets/myImage.png';
import Spline from '@splinetool/react-spline';

const FirstSection = () => {
  

  return (
    <div className="bg-[#0d0d0d] text-white font-[z] w-full h-full relative">
      <ParticleComponent id="particles"/>
      {/* <Spline scene="https://prod.spline.design/7P5PkE9Jznt6c3fT/scene.splinecode" className='z-50 absolute w-20'/> */}
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
      <div className="container flex justify-between items-center h-[calc(100%-120px)] w-full">
          <div className="side-one flex flex-col justify-center gap-12 text-capitalize mx-20">
              <h1 className="text-[70px] leading-[1.2] z-10">Hi There! <span>👋🏻</span> <br /> I'M AYMANE RIHANE <br /></h1>
              <h2 className='text-[#f3111c] z-10'>Software developer</h2>
          </div>
          <div className="side-two grow flex items-center justify-center px-6 relative">
              <div className="relative blur-3xl w-[400px] h-[400px] bg-gradient-to-r from-[#003366] to-[#00264d] rounded-full ">
              </div>
                  <img 
                    src={myImage} 
                    alt="profile" 
                    className="max-w-[700px] max-h-[700px] w-[500px] h-full absolute bottom-0 flex justify-center object-cover rounded-full" 
                  />
          </div>
      </div>
    </div>
  );
};

export default FirstSection;