import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    <AnimatePresence>
      <Hidden className='hidden'>
        {alert !== null && (
          <AlertStyles
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            className={`alert alert-${alert.type}`}
          >
            <FiAlertTriangle /> {alert.msg}
          </AlertStyles>
        )}
      </Hidden>
    </AnimatePresence>
  );
};

const AlertStyles = styled(motion.div)`
  width: 80vw;
  max-width: var(--max-width);
  margin: 1rem auto;
  padding: 0.7rem;
  border-radius: 14px;
`;

const Hidden = styled(motion.div)`
  overflow: hidden;
`;

export default Alert;
