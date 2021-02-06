import {
  SEARCHED,
  SET_LOADING,
  CLEAR_SEARCHED,
  GET_GAME_DETAILS,
  GET_NEW_GAMES,
  GET_POPULAR_GAMES,
  GET_UPCOMING_GAMES,
} from '../types';

const GamesReducer = (state, action) => {
  switch (action.type) {
    case SEARCHED: {
      return {
        ...state,
        searched: action.payload,
        loading: false,
      };
    }
    case CLEAR_SEARCHED: {
      return {
        ...state,
        searched: [],
        loading: false,
      };
    }
    case GET_GAME_DETAILS: {
      return {
        ...state,
        singleGame: action.payload,
        loading: false,
      };
    }
    case GET_UPCOMING_GAMES: {
      return {
        ...state,
        upcoming: action.payload,
        loading: false,
      };
    }
    case GET_NEW_GAMES: {
      return {
        ...state,
        newGames: action.payload,
        loading: false,
      };
    }
    case GET_POPULAR_GAMES: {
      return {
        ...state,
        popular: action.payload,
        loading: false,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default GamesReducer;
