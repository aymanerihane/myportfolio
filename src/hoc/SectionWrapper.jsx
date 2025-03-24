import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.1)}  // Added stagger values
        initial="hidden"
        whileInView="show"
        viewport={{ 
          once: true, 
          amount: 0.15,  // Reduced for earlier trigger
          margin: "0px 0px -100px 0px"  // Negative margin for earlier detection
        }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Hidden anchor for navigation */}
        <span 
          className="hash-span absolute -top-20" 
          id={idName}
          aria-hidden="true"
        >
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;