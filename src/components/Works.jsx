import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="w-full items-center flex justify-center"
    >
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300'>
        <div className='relative w-full h-[230px] group'>
          <img
            src={image}
            alt={`${name} project screenshot`}
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
          />

          <div className='absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 transition-transform'
              aria-label={`View ${name} source code`}
            >
              <img
                src={github}
                alt='GitHub repository'
                className='w-1/2 h-1/2 object-contain'
              />
            </button>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} font-medium`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
const Works = () => {
  return (
    <div className="w-full px-4  max-w-7xl">
      {/* Title Section - Now with proper animation triggering */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textVariant(0.5)}
        className="w-full"
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Description - With separate animation */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn("", "tween", 0.2, 0.5)}
        className="w-full mt-8"
      >
        <p className="text-secondary text-lg leading-relaxed max-w-4xl">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      {/* Projects Grid - With proper stagger */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "work");