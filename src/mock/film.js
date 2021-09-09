import {getRandomInt, shuffle, generateDate, getRandomFloat} from './utils';
//import {generateComment} from './mock/comment.js';

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
  'Morgan Freeman',
  'Erich von Stroheim',
  'Mary Beth Hughes',
  'Dan Duryea',
];

const GENRES = [
  'Comedy',
  'Tragedy',
  'Action',
  'Documental',
  'Sci-Fi',
  'Mystery',
  'Film-Noir',
  'Drama',
];

const DIRECTORS = [
  'Tom Ford',
  'Alexey German',
  'Aleksandr Sakurov',
  'Anthony Mann',
];

const WRITERS = [
  'Takeshi Kitano',
  'Eldar Ryzanov',
  'Leonid Filatov',
  'Anne Wigton',
  'Heinz Herald',
  'Richard Weil',
];

const POSTERS = [
  'images/posters/blue-blazes.jpg',
  'images/posters/popeye-meets-sinbad.png',
  'images/posters/sagebrush-trail.jpg',
];

export const generateFilm = () => {
  const film = {
    id: getRandomInt(0, 1000),
    comments: [],
    'film_info': {
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      'alternative_title': TITLES[getRandomInt(0, TITLES.length - 1)],
      'total_rating': getRandomFloat((0, 10), 1),
      poster: POSTERS[getRandomInt(0, POSTERS.length - 1)],
      'age_rating': getRandomInt(0, 18),
      director: shuffle(DIRECTORS).slice(0, (DIRECTORS.length - 1))[0],
      writers: shuffle(WRITERS).slice(0, (WRITERS.length - 1)),
      actors: shuffle(ACTORS).slice(0, (ACTORS.length - 1)),
      release: {
        date: generateDate(),
        'release_country': 'Finland',
      },
      runtime: getRandomInt(0, 300),
      genre: shuffle(GENRES).slice(0, (getRandomInt(1, GENRES.length - 1))),
      description: shuffle(DESCRIPTIONS).slice(0, (getRandomInt(1, DESCRIPTIONS.length - 1))).join(' '),
      // eslint-disable-next-line camelcase
      user_details: {
        watchlist: Boolean(getRandomInt(0, 1)),
        // eslint-disable-next-line camelcase
        already_watched: Boolean(getRandomInt(0, 1)),
        // eslint-disable-next-line camelcase
        watching_date: '2019-04-12T16:12:32.554Z',
        favorite: Boolean(getRandomInt(0, 1)),
      },
    },
  };
  return film;
};
