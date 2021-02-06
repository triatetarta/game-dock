import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { duration: 0.5, ease: 'easeInOut' };

const notFoundVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition },
  exit: { opacity: 0, transition },
};

const NotFound = () => {
  return (
    <NotFoundStyles
      variants={notFoundVariants}
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist</p>
    </NotFoundStyles>
  );
};

const NotFoundStyles = styled(motion.div)`
  width: 80vw;
  min-height: 50vh;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export default NotFound;
