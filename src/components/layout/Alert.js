import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    <Hidden className='hidden'>
      {alert !== null && (
        <AlertStyles className={`alert alert-${alert.type}`}>
          <FiAlertTriangle /> {alert.msg}
        </AlertStyles>
      )}
    </Hidden>
  );
};

const AlertStyles = styled.div`
  width: 80vw;
  max-width: var(--max-width);
  margin: 1rem auto;
  padding: 0.7rem;
  border-radius: 14px;
`;

const Hidden = styled.div`
  overflow: hidden;
`;

export default Alert;
