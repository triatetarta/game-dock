import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { duration: 0.5, ease: 'easeInOut' };

const aboutVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition },
  exit: { opacity: 0, transition },
};
const About = () => {
  return (
    <AboutStyles
      variants={aboutVariants}
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <motion.h1>About this App</motion.h1>
      <motion.p>App to search Games from RAWG Video Games Database</motion.p>
      <motion.p>Version: 1.0.0</motion.p>
    </AboutStyles>
  );
};

const AboutStyles = styled(motion.div)`
  width: 80vw;
  min-height: 60vh;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export default About;
