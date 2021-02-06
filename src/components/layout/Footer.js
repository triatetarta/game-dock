import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyles>
      <div className='footer-logo'>
        <h3>GAME DOCK</h3>
      </div>
      <div className='footer-container'>
        <div className='info'>
          <h5>Address</h5>
          <p>15 Main Road</p>
          <p>N19DIV, London UK</p>
          <p className='copyright'>
            &copy;{new Date().getFullYear()} Game Dock
          </p>
        </div>
        <div className='company'>
          <h5>Company</h5>
          <ul>
            <li>Live Stream</li>
            <li>Our Mission</li>
            <li>Policy</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='support'>
          <h5>Support</h5>
          <ul>
            <li>Account</li>
            <li>Help center</li>
            <li>Contact</li>
            <li>Join the club</li>
          </ul>
        </div>
        <div className='social'>
          <h5>Follow Us</h5>
          <ul>
            <li>YouTube</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  margin-top: 6rem;
  background-color: var(--light-color);

  .footer-logo {
    width: 80vw;
    max-width: var(--max-width);
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;

    h3 {
      font-family: var(--secondary-font);
      color: var(--text-dark);
    }
  }

  .footer-container {
    width: 80vw;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;

    h5 {
      font-size: 1.1rem;
    }

    p {
      line-height: 1;
      margin-top: 1rem;
    }

    ul {
      margin-top: 1rem;
      li {
        color: var(--text-dark);
        padding: 0.4rem 0;
        font-weight: bold;
      }
    }
  }

  .copyright {
    font-size: 0.8rem;
    margin-top: 3rem !important;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    .footer-container {
      flex-wrap: wrap;
      .info {
        width: 50%;
        padding: 0rem 1rem 1rem 0rem;
      }
      .company {
        width: 50%;
        padding: 0rem 0rem 1rem 1rem;
      }
      .support {
        width: 50%;
        padding: 1rem 1rem 0rem 0rem;
      }
      .social {
        width: 50%;
        padding: 1rem 0rem 0rem 1rem;
      }
    }
  }
`;

export default Footer;
