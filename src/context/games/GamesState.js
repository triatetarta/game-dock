import React, { useReducer } from 'react';
import axios from 'axios';
import gamesContext from './gamesContext';
import GamesReducer from './gamesReducer';
import {
  newGamesURL,
  searchGameURL,
  gameDetailsURL,
  popularGamesURL,
  upcomingGamesURL,
} from '../../api';
import {
  SEARCHED,
  SET_LOADING,
  CLEAR_SEARCHED,
  GET_GAME_DETAILS,
  GET_NEW_GAMES,
  GET_POPULAR_GAMES,
  GET_UPCOMING_GAMES,
} from '../types';

const GamesState = (props) => {
  const initialState = {
    upcoming: [],
    newGames: [],
    popular: [],
    searched: [],
    singleGame: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GamesReducer, initialState);

  //   Search Games
  const searchGames = async (text) => {
    setLoading();
    const res = await axios.get(searchGameURL(text));

    dispatch({
      type: SEARCHED,
      payload: res.data.results,
    });
  };

  //   Get Upcoming Games
  const upcomingGames = async () => {
    setLoading();
    const res = await axios.get(upcomingGamesURL());

    dispatch({
      type: GET_UPCOMING_GAMES,
      payload: res.data.results,
    });
  };

  // Get New Games
  const getNewGames = async () => {
    setLoading();
    const res = await axios.get(newGamesURL());

    dispatch({
      type: GET_NEW_GAMES,
      payload: res.data.results,
    });
  };

  // Get Popular Games
  const popularGames = async () => {
    setLoading();

    const res = await axios.get(popularGamesURL());

    dispatch({
      type: GET_POPULAR_GAMES,
      payload: res.data.results,
    });
  };

  //   Get Single Game Details
  const getGame = async (game_id) => {
    setLoading();
    const res = await axios.get(gameDetailsURL(game_id));
    console.log(res);
    dispatch({
      type: GET_GAME_DETAILS,
      payload: res.data,
    });
  };

  // Clear Searched Games
  const clearSearch = () => dispatch({ type: CLEAR_SEARCHED });

  //   Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <gamesContext.Provider
      value={{
        searched: state.searched,
        upcoming: state.upcoming,
        newGames: state.newGames,
        popular: state.popular,
        singleGame: state.singleGame,
        loading: state.loading,
        searchGames,
        clearSearch,
        getGame,
        upcomingGames,
        popularGames,
        getNewGames,
      }}
    >
      {props.children}
    </gamesContext.Provider>
  );
};

export default GamesState;
