//Base URL
const base_url = 'https://api.rawg.io/api/';
const base_url2 = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_ID}`;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url2}${popular_games}`;
export const upcomingGamesURL = () => `${base_url2}${upcoming_games}`;
export const newGamesURL = () => `${base_url2}${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/screenshots`;
//Searched game
export const searchGameURL = (text) =>
  `${base_url2}&search=${text}&page_size=9`;

//Popular Games
// const popular_games = `games?key=${process.env.REACT_APP_RAWG_ID}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// export const popularGamesURL = () => `${base_url}${popular_games}`;
// export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
// export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
// export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// //Game ScreenShots
// export const gameScreenshotURL = (game_id) =>
//   `${base_url}games/${game_id}/screenshots`;
//Searched game
// export const searchGameURL = (text) =>
//   `${base_url}games?search=${text}&page_size=9`;
