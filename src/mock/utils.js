import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';

dayjs.extend(duration);

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomFloat = function (from, to) {
  return Math.round((from + Math.random() * (to + 1 - from)) * 10) / 10;
};

export const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

export const generateDate = (date, format) => dayjs(date).format(format);

/*const date = new Date(getRandomInt(Date.now() - 7889400000, Date.now()));
  const stringData = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}Z`;
  return stringData;
};*/

export const getPeriodTime = (time, type) => {
  const {hours, minutes} = dayjs.duration(time, type).$d;

  return `${hours}h ${minutes}m`;
};

//export const isFilmWatchList = (film) => Object.values(film.user_details.watchlist).some(Boolean);
