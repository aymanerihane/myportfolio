import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";
import { fadeIn,textVariant } from "../utils/motion";
import { motion } from "framer-motion";


const TechCard = ({ index,name,icon }) => {
  const IconComponent = icon;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
    <div className="tech-icons flex items-center flex-col justify-center w-[168px] h-[172px]">
      <IconComponent />
      <p className="mt-[5px] text-[0.4em] text-center ">{name}</p>
    </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I use</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-2">
          {technologies.map((tech, index) => (
            <TechCard key={`tech-${index}`} index={index} {...tech} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
