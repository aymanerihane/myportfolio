import React, {  useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { FindMe } from '../components';

const Contact = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // Check if the screen width is >= 1024px (lg breakpoint)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the right state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <div className={`xl:mt-2 flex xl:flex-row flex-col-reverse items-center w-full gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full mt-10 lg:mt-0"
        >
          <FindMe />
        </motion.div>

        {isLargeScreen && (
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 h-[350px] md:h-[550px] w-full lg:w-full"
          >
            <EarthCanvas />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
