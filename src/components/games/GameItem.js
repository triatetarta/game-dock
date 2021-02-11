import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameItem = ({
  game: { name, released, background_image, id, platforms },
}) => {
  const newReleased = new Date(released).toDateString();

  return (
    <StyledGame>
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
        </div>

        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled.div`
  height: 250px;
  /* min-height: 30vh; */
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;

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
      font-size: 1.1rem;
    }
    p {
      color: var(--text-light);
      font-size: 0.9rem;
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
        font-size: 0.7rem;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    .card-container {
      h3 {
        font-size: 1rem;
        padding: 0 1rem;
      }
      p {
        font-size: 0.8rem;
      }
      .stores {
        .store {
          padding: 0.3rem 0.5rem;
          font-size: 0.8rem;
        }
      }
      .platforms {
        padding: 0 1rem;
        span {
          padding: 0.3rem 0.4rem;
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default GameItem;
