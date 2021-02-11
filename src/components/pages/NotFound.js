import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundStyles>
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist</p>
    </NotFoundStyles>
  );
};

const NotFoundStyles = styled.div`
  width: 80vw;
  min-height: 50vh;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export default NotFound;
