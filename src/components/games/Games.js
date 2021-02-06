import React, { useContext, useEffect } from 'react';
import GameItem from './GameItem';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loader from '../layout/Loader';
import GamesContext from '../../context/games/gamesContext';
import Search from '../layout/Search';
import Banner from '../layout/Banner';
import Alert from '../layout/Alert';

const Games = () => {
  const gamesContext = useContext(GamesContext);

  const {
    searched,
    loading,
    upcoming,
    popular,
    upcomingGames,
    popularGames,
    getNewGames,
    newGames,
  } = gamesContext;

  useEffect(() => {
    upcomingGames();
    getNewGames();
    popularGames();
    // eslint-disable-next-line
  }, []);

  const gamesVariants = {
    enter: { transition: { staggerChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.015 } },
  };

  const titleVariants = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { duration: 1 } },
    out: { opacity: 0 },
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <GameList
        initial='initial'
        animate='enter'
        exit='exit'
        variants={gamesVariants}
      >
        <Search />
        <Alert />
        <Banner />

        {searched.length ? (
          <div className='searched'>
            <motion.h2
              variants={titleVariants}
              initial='from'
              animate='to'
              exit='out'
            >
              Searched Games
            </motion.h2>
            <StyledGames>
              {searched.map((game) => (
                <GameItem key={game.id} game={game} />
              ))}
            </StyledGames>
          </div>
        ) : (
          ''
        )}

        <motion.h2
          variants={titleVariants}
          initial='from'
          animate='to'
          exit='out'
        >
          Upcoming Games
        </motion.h2>
        <StyledGames>
          {upcoming.map((game) => {
            return <GameItem key={game.id} game={game} />;
          })}
        </StyledGames>

        <motion.h2
          variants={titleVariants}
          initial='from'
          animate='to'
          exit='out'
        >
          New Games
        </motion.h2>
        <StyledGames>
          {newGames.map((game) => {
            return <GameItem key={game.id} game={game} />;
          })}
        </StyledGames>

        <motion.h2
          variants={titleVariants}
          initial='from'
          animate='to'
          exit='out'
        >
          {' '}
          Popular Games
        </motion.h2>
        <StyledGames>
          {popular.map((game) => {
            return <GameItem key={game.id} game={game} />;
          })}
        </StyledGames>
      </GameList>
    );
  }
};

const GameList = styled(motion.div)`
  width: 80vw;
  max-width: var(--max-width);
  margin: 0 auto;

  h2 {
    padding: 4rem 0rem 1.5rem 0rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;

    h2 {
      font-size: 1.2rem;
      padding: 2rem 0rem 1rem 0rem;
    }
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
  }
`;

export default Games;
