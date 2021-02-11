import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutStyles>
      <h1>About this App</h1>
      <p>App to search Games from RAWG Video Games Database</p>
      <p>Version: 1.0.0</p>
    </AboutStyles>
  );
};

const AboutStyles = styled.div`
  width: 80vw;
  min-height: 60vh;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export default About;
