import React, { useContext, useEffect, useState } from 'react';
import GameItem from './GameItem';
import styled from 'styled-components';
import Loader from '../layout/Loader';
import GamesContext from '../../context/games/gamesContext';
import Search from '../layout/Search';
import Banner from '../layout/Banner';
import Alert from '../layout/Alert';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Games = () => {
  const [index, setIndex] = useState(0);
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

  useEffect(() => {
    const lastIndex = upcoming.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, upcoming]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <GameList>
        <Search />
        <Alert />
        <Banner />

        {searched.length ? (
          <div className='searched'>
            <h2>Searched Games</h2>
            <StyledGames>
              {searched.map((game) => (
                <GameItem key={game.id} game={game} />
              ))}
            </StyledGames>
          </div>
        ) : (
          ''
        )}

        <StyledGamesSlider className='section-upcoming'>
          <div className='header'>
            <div className='title'>
              <h2>Upcoming Games</h2>
            </div>
            <div className='buttons'>
              <button className='prev' onClick={() => setIndex(index - 1)}>
                <FaArrowLeft />
              </button>
              <button className='next' onClick={() => setIndex(index + 1)}>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className='section-center'>
            {upcoming.map((game, gameIndex) => {
              let position = 'nextSlide';

              if (gameIndex === index) {
                position = 'activeSlide';
              }
              if (
                gameIndex === index - 1 ||
                (index === 0 && gameIndex === upcoming.length - 1)
              ) {
                position = 'lastSlide';
              }

              const {
                name,
                released,
                background_image,
                id,
                platforms,
                stores,
              } = game;
              const newReleased = new Date(released).toDateString();

              return (
                <article className={position} key={id}>
                  <Link to={`/game/${id}`}>
                    <div className='card-container'>
                      <h3>{name}</h3>
                      <p>{newReleased}</p>
                      <div className='platforms'>
                        {platforms &&
                          platforms.map((platform) => {
                            const { id, name } = platform.platform;
                            return <span key={id}>{name}</span>;
                          })}
                      </div>
                      <div className='stores'>
                        {stores &&
                          stores.map((store, index) => (
                            <span className='store' key={index}>
                              {store.store.name}
                            </span>
                          ))}
                      </div>
                    </div>

                    <img src={background_image} alt={name} />
                  </Link>
                </article>
              );
            })}
          </div>
        </StyledGamesSlider>

        <h2>New Games</h2>
        <StyledGamesNew>
          {newGames.map((game) => {
            return <GameItem key={game.id} game={game} />;
          })}
        </StyledGamesNew>

        <h2>Popular Games</h2>
        <StyledGames>
          {popular.map((game) => {
            return <GameItem key={game.id} game={game} />;
          })}
        </StyledGames>
      </GameList>
    );
  }
};

const GameList = styled.div`
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

const StyledGamesSlider = styled.div`
  width: 80vw;
  max-width: var(--max-width);
  margin: 2rem auto;
  position: relative;

  .header {
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      h2 {
        padding: 0;
      }
    }

    .buttons {
      display: flex;
      justify-content: flex-end;

      button {
        cursor: pointer;
        margin-left: 2rem;
        background: none;
        border: none;
        outline: none;

        svg {
          color: var(--text-dark);
          font-size: 1.5rem;
        }
      }
    }
  }

  .section-center {
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    /* have to have a height */
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: hidden;

    article {
      background-color: white;
      position: absolute;
      top: 0;
      right: 0;
      width: 49%;
      opacity: 0;
      border-radius: 14px !important;
      overflow: hidden;

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }

    .card-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.3);

      h3 {
        color: var(--text-light);
      }
      p {
        color: var(--text-light);
      }

      .stores {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        .store {
          color: var(--text-dark);
          padding: 0.4rem 0.6rem;
          background: var(--text-light);
          border-radius: 14px;
          font-weight: bold;
        }
      }

      .platforms {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 1rem 0 1.5rem 0;

        span {
          border: 1px solid var(--text-light);
          border-radius: 5px;
          padding: 0.5rem 0.5rem;
          color: var(--text-light);
        }
      }
    }

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
    overflow: hidden;
    border-radius: 14px !important;
  }
  article.lastSlide {
    opacity: 1;
    transform: translateX(-100%);
    margin-right: 2%;
    border-radius: 14px !important;

    article.nextSlide {
      opacity: 0;
      transform: translateX(100%);
      border-radius: 14px !important;
    }
  }
`;

const StyledGames = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

const StyledGamesNew = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

export default Games;
