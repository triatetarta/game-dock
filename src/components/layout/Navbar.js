import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <Navigation>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='game dock logo' />
        </Link>
      </div>
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

  .logo {
    a {
      img {
        width: 100%;
      }
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

        &:hover {
          border-bottom: 2px solid #8b54ce;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;

    .logo {
      a {
        img {
          width: 100%;
        }
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
