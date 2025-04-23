import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const TechCard = ({ index, name, icon }) => {
  const IconComponent = icon;
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.01, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <div className="tech-icons flex items-center flex-col justify-center w-[168px] h-[172px] hover:scale-105 transition-transform duration-300">
        <IconComponent />
        <p className="mt-[5px] text-[0.4em] text-center">{name}</p>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="w-full mx-auto px-4 py-16 max-w-7xl">
      {/* Title Section - Separate animation container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textVariant(0.1)}
        className="w-full"
      >
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      {/* Description - Separate animation */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn("", "tween", 0.2, 0.5)}
        className="w-full mt-8 mb-0"
      >
        <p className="text-secondary text-lg leading-relaxed max-w-4xl">
          I've worked with a wide range of technologies across different domains.
          Here are some of the key tools and frameworks I'm proficient with.
        </p>
      </motion.div>

      {/* Technologies Grid - Separate stagger container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}  // Trigger earlier
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.05,  // Faster stagger
              delayChildren: 0.3,    // Start after text
            },
          },
        }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
      >
        {technologies.map((tech, index) => (
          <TechCard key={`tech-${index}`} index={index} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");