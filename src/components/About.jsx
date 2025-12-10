import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant,textVariantReverse } from "../utils/motion";
import myImage from '../assets/me.png';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.5)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-10 flex-col md:flex-row">
      <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a passionate and driven Master's student in Artificial Intelligence and Data Science, with a strong background in software development, data analysis, and machine learning. My expertise includes designing and implementing scalable applications, developing dynamic web platforms, and building data-driven solutions. I have hands-on experience with full-stack development, database management, and data processing pipelines, with a focus on optimizing performance and delivering robust solutions.
      </motion.p>
      </div>
      <motion.div variants={textVariantReverse("", "", 0.1, 1)}>
        <Tilt>
            <div className="w-[300px] h-[300px] rounded-full relative mt-50 bg-blue-950">
                <img src={myImage} alt="myImage" className="h-[430px] w-[430px] object-cover   absolute bottom-0 rounded-full" />
            </div>
        </Tilt>
      </motion.div>
      </div>
      <div className='mt-20 justify-center flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");