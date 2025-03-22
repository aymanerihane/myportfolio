import ParticleComponent from './particles';
import Image from '../assets/image.png';
import Spline from '@splinetool/react-spline';

const FirstSection = () => {
  

  return (
    <div className=" text-white  w-full h-full relative">
      {/* <ParticleComponent id="particles"/> */}
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
                    src={Image} 
                    alt="profile" 
                    className="max-w-[700px] max-h-[700px] w-[500px] h-full absolute bottom-0 flex justify-center object-cover rounded-full" 
                  />
          </div>
      </div>
    </div>
  );
};

export default FirstSection;