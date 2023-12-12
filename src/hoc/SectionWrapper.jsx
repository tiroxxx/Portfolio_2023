import { motion } from "framer-motion";

import { style } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
