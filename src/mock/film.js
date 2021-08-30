
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const DEFAULT_COUNT = 20;
const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
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


const generateDate = () => {
  const date = new Date(getRandomInt(Date.now() - 7889400000, Date.now()));
  const stringData = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}Z`;
  return stringData;
};

const generateFilms = (count, titles, actors, genres, descriptions) => (
  Array(count).fill({}).map(() => ({
    id: getRandomInt(0, 1000),
    comments: [],
    'film_info': {
      title: titles[getRandomInt(0, titles.length - 1)],
      'alternative_title': titles[getRandomInt(0, titles.length - 1)],
      'total_rating': getRandomInt(0, 10),
      poster: 'images/posters/blue-blazes.jpg',
      'age_rating': getRandomInt(0, 18),
      director: shuffle(actors).slice(0, (actors.length - 1))[0],
      writers: shuffle(actors).slice(0, (actors.length - 1)),
      actors: shuffle(actors).slice(0, (actors.length - 1)),
      release: {
        date: generateDate(),
        'release_country': 'Finland',
      },
      runtime: getRandomInt(0, 300),
      genre: shuffle(genres).slice(0, (getRandomInt(0, genres.length - 1))),
      description: shuffle(descriptions).slice(0, (getRandomInt(0, descriptions.length - 1))).join(' '),
      'user_details': {
        'watchlist': false,
        'already_watched': true,
        'watching_date': '2019-04-12T16:12:32.554Z',
        'favorite': false,
      },
    },
  }))
);

const countFilm = DEFAULT_COUNT;

const content = generateFilms(countFilm, TITLES, ACTORS, GENRES, DESCRIPTIONS);
// eslint-disable-next-line no-console
console.log(content);
