import React, { useContext, useState } from 'react';
import GamesContext from '../../context/games/gamesContext';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components';
import close from '../../images/close.svg';

const Search = () => {
  const gamesContext = useContext(GamesContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const { setAlert } = alertContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'danger');
    } else {
      gamesContext.searchGames(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <SearchBar>
      <form className='form' onSubmit={onSubmit}>
        <input
          className='text'
          type='text'
          name='text'
          placeholder='Search Game...'
          value={text}
          onChange={onChange}
        />
        <input className='btn' type='submit' value='Search' />
      </form>
      {gamesContext.searched.length > 0 && (
        <div className='btn-container'>
          <button onClick={gamesContext.clearSearch} className='clear-btn'>
            <img src={close} alt='close button' />
            Clear Search
          </button>
        </div>
      )}
    </SearchBar>
  );
};

const SearchBar = styled.div`
  width: 80vw;
  max-width: var(--max-width);
  margin: 0 auto;

  form {
    width: 100%;
    display: flex;
    height: 40px;
    position: relative;
    .text {
      width: 100%;
      border: none;
      outline: none;
      border-radius: 14px;
      background: url('/search.svg') no-repeat 16px;
      background-size: 18px;
      background-color: #d9d9d9;
      font-size: 1rem;
    }

    input[type='text'] {
      padding: 0.5rem 0 0.5rem 2.5rem;
    }

    .btn {
      width: 10%;
      position: absolute;
      right: 6px;
      top: 6px;
      height: 28px;
      border: none;
      outline: none;
      border-radius: 14px;
      background-color: #8b54ce;
      color: white;
      cursor: pointer;
      font-weight: normal;
      font-size: 0.9rem;
      transition: all 0.2s linear;

      &:hover {
        background-color: #592caa;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 80vw;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;

    form {
      .btn {
        width: 70px;
      }
    }
  }
`;

export default Search;
