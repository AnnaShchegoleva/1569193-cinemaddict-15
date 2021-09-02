import {getRandomInt, shuffle, generateDate} from './utils';

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. ',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. ',
  'Sed sed nisi sed augue convallis suscipit in sed felis. ',
  'Aliquam erat volutpat. ',
  'Nunc fermentum tortor ac porta dapibus. ',
  'In rutrum ac purus sit amet tempus. ',
];
const TITLES = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
];

const ACTORS = [
  'Bana Yaga',
  '3 Bogatyrya',
  'Utka',
  'Mutko',
  'Bambarbiya',
];

const GENRES = [
  'Comedy',
  'Tragedy',
  'Action',
  'Documental',
  'Sci-Fi',
];

export const generateFilms = () => {
  const film = {
    id: getRandomInt(0, 1000),
    comments: [],
    'film_info': {
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      'alternative_title': TITLES[getRandomInt(0, TITLES.length - 1)],
      'total_rating': getRandomInt(0, 10),
      poster: 'images/posters/blue-blazes.jpg',
      'age_rating': getRandomInt(0, 18),
      director: shuffle(ACTORS).slice(0, (ACTORS.length - 1))[0],
      writers: shuffle(ACTORS).slice(0, (ACTORS.length - 1)),
      actors: shuffle(ACTORS).slice(0, (ACTORS.length - 1)),
      release: {
        date: generateDate(),
        'release_country': 'Finland',
      },
      runtime: getRandomInt(0, 300),
      genre: shuffle(GENRES).slice(0, (getRandomInt(0, GENRES.length - 1))),
      description: shuffle(DESCRIPTIONS).slice(0, (getRandomInt(0, DESCRIPTIONS.length - 1))).join(' '),
      'user_details': {
        'watchlist': false,
        'already_watched': true,
        'watching_date': '2019-04-12T16:12:32.554Z',
        'favorite': false,
      },
    },
  };
  return film;
};
