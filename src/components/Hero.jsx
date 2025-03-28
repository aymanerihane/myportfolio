import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect"; // Import the typewriter-effect library

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
                strings: ['Software Developer', 'Data Analyst', 'AI Engineer'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
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
