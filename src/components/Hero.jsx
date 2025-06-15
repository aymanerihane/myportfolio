import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect"; // Import the typewriter-effect library
import { ats_cv_eng } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex justify-end mr-20`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#7869DF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#7869DF]'>AYMANE RIHANE</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <span className="text-lg">I am an expert in</span>
            <Typewriter
              options={{
                strings: ['Software Developer', 'Data Scientist', 'AI Engineer'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          
          {/* CV Buttons */}
          <div className="mt-8 flex flex-col space-y-4 w-1/5">
          {/* View CV Button */}
            <a 
              href={ats_cv_eng} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#7869DF] rounded-md text-white font-bold hover:bg-[#7869DF]/20 transition-colors duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View CV
            </a>
            {/* Download CV Button */}
            <a 
              href={ats_cv_eng} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#7869DF] rounded-md text-white font-bold hover:bg-[#5a4fc9] transition-colors duration-300 shadow-lg"
              download="Aymane_Rihane_CV.pdf"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        {/* <ComputersCanvas /> */}
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#ffffff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#ffffff] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
