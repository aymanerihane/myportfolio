import React from 'react'
import ParticleComponent from './particles';
import nft from '../assets/nft.png';
const FirstSection = () => {
  return (
    <div className="bg-[#0d0d0d] text-white font-[z] w-full h-full relative">
      <ParticleComponent  id="particles"/>
      

      <header className="header flex justify-between items-center px-20 py-5">
          
      </header>

      <div className="container grid grid-cols-2 h-[calc(100%-120px)] w-full">
          <div className="side-one flex flex-col justify-center gap-12 text-capitalize mx-20">
              <h1 className="text-[70px] leading-[1.2] z-10">Hi There! <span>👋🏻</span> <br /> I'M AYMANE RIHANE <br /></h1>
              <h2 className='text-[#f3111c] z-10'>Software developer</h2>

          </div>

          <div className="side-two flex items-end justify-center px-6 relative">
              <div className="overflow-hidden relative w-[400px] h-[400px] bg-gradient-to-r from-[#ee128f] to-[#f3111c] rounded-full mt-20 shadow-[0_0_0_25px_rgb(33,33,33)]">
                  <img src={nft} alt="nft" className="max-w-[700px] max-h-[700px]  absolute bottom-0  object-cover " />
              </div>
          </div>
      </div>
    </div>
  )
}

export default FirstSection