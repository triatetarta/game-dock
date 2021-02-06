import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Navigation>
      <h1>
        <Link to='/'>Game Dock</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </Navigation>
  );
};

const Navigation = styled.nav`
  width: 80vw;
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: var(--secondary-font);
    a {
      color: #8b54ce;
    }
  }

  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 2rem;

      a {
        font-size: 1.1rem;
        font-weight: bold;
        /* color: var(--text-grey); */
        color: rgb(118, 118, 118);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;

    h1 {
      a {
        font-size: 1.2rem;
      }
    }
    ul {
      li {
        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default Navbar;
