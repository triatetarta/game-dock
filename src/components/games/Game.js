import React, { useContext, useEffect } from 'react';
import Loader from '../layout/Loader';
import GamesContext from '../../context/games/gamesContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Game = ({ match }) => {
  const gamesContext = useContext(GamesContext);

  const { getGame, singleGame, loading } = gamesContext;

  const {
    name,
    description_raw,
    released,
    background_image,
    platforms,
    stores,
  } = singleGame;

  const newReleased = new Date(released).toDateString();

  useEffect(() => {
    getGame(match.params.id);
    // eslint-disable-next-line
  }, []);

  const transition = { duration: 0.5, ease: 'easeInOut' };

  const gameVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition },
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <GameStyles
          initial='exit'
          animate='enter'
          exit='exit'
          variants={gameVariants}
        >
          <h2>{name}</h2>
          <img src={background_image} alt={name} />
          <p>Release date: {newReleased}</p>
          <h4>Platforms:</h4>
          <div className='single-platforms'>
            {platforms &&
              platforms.map((platform) => {
                const { id, name } = platform.platform;
                return <span key={id}>{name}</span>;
              })}
          </div>

          <h4>Game Description:</h4>
          <p>{description_raw}</p>
          <h4>Get it from:</h4>
          <div className='single-stores'>
            {stores &&
              stores.map((store, index) => (
                <span className='single-store' key={index}>
                  <a href={store.url} target='_blank' rel='noreferrer'>
                    {store.store.name}
                  </a>
                </span>
              ))}
          </div>
          <button>
            <Link to='/'>
              <FaArrowLeft /> Home
            </Link>
          </button>
        </GameStyles>
      )}
    </>
  );
};

const GameStyles = styled(motion.div)`
  width: 80vw;
  max-width: var(--max-width);
  margin: 0 auto;

  h2 {
    padding: 2rem 0;
  }

  img {
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 14px;
  }

  p {
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .single-platforms {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin: 1rem 0 1.5rem 0;

    span {
      border: 1px solid var(--text-grey);
      border-radius: 5px;
      padding: 0.5rem 0.5rem;
      color: var(--text-grey);
      pointer-events: none;
    }
  }

  .single-stores {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    .single-store {
      color: var(--text-light);
      padding: 0.4rem 0.6rem;
      background: var(--text-dark);
      border-radius: 14px;
      font-weight: bold;
      cursor: pointer;

      a {
        color: var(--text-light);
      }
    }
  }

  button {
    margin-top: 2rem;
    background: none;
    outline: none;
    border: none;

    a {
      padding: 0.7rem 0.7rem;
      color: var(--text-dark);
      border-radius: 14px;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }

    h4 {
      font-size: 1rem;
    }
    .single-platforms {
      span {
        padding: 0.3rem 0.3rem;
        font-size: 0.9rem;
      }
    }

    button {
      a {
        padding: 0.7rem 0.7rem;

        font-size: 1rem;
      }
    }
  }
`;

export default Game;
