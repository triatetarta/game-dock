import React from 'react';
import img from '../../images/banner.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { duration: 0.5, ease: 'easeInOut' };

const bannerVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition },
  exit: { opacity: 0, transition },
};

const Banner = () => {
  return (
    <BannerStyles className='banner' variants={bannerVariants}>
      <div className='banner-img'>
        <img src={img} alt='playstation controller banner' />
        <div className='banner-text'>
          <h3>Ultimate Game Dock Tickets</h3>
          <h5>Join now and get access to millions of games</h5>
          <p>
            Try the Ultimate Game Dock Ticket free for 30 days. <br />
            Only £25/month after.
          </p>
          <button>Join now</button>
        </div>
      </div>
    </BannerStyles>
  );
};

const BannerStyles = styled(motion.div)`
  width: 80vw;
  max-width: var(--max-width);
  margin: 0 auto;

  .banner-img {
    overflow: hidden;
    border-radius: 14px;
    margin-top: 3rem;
    position: relative;

    img {
      width: 100%;
    }

    .banner-text {
      position: absolute;
      height: 100%;
      width: 55%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0;
      right: 0;
      padding: 2rem 2rem;

      h3 {
        color: white;
        padding: 0;
        font-size: 1.6rem;
        line-height: 150%;
      }
      h5 {
        color: white;
        font-size: 1rem;
        font-weight: normal;
        margin-bottom: 0.8rem;
      }
      p {
        color: white;
        font-size: 0.9rem;
        font-weight: lighter;
        line-height: 120%;
      }
      button {
        width: 120px;
        height: 30px;
        border: none;
        outline: none;
        background: none;
        background-color: white;
        border-radius: 14px;
        color: #8b54ce;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;

    .banner-img {
      margin-top: 2rem;

      .banner-text {
        width: 65%;
        h3 {
          font-size: 0.6rem;
        }
        h5 {
          display: none;
        }
        p {
          font-size: 0.5rem;
        }
        button {
          font-size: 0.5rem;
          width: 50px;
          height: 30px;
          margin-top: 0.3rem;
        }
      }
    }
  }
`;

export default Banner;
