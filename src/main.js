//Отрисовка компонента Звание пользователя
import {createUserRateTemplate} from './view/user-rate.js';
import {createMenuFilterTemplate} from './view/menu-stats.js';
import {createSortTemplate} from './view/sort-filter.js';
import {createFilmContainerTemplate} from './view/film-container.js';
import {createCardFilmTemplate} from './view/film-card.js';
import {createButtonShowTemplate} from './view/show-more.js';
import {createTopRatedTemplate} from './view/top-tated-movies.js';
import {createMostCommentTemplate} from './view/most-commented.js';
import {createNumberFilmTemplate } from './view/amount-films.js';
import {createPopupTemplate} from './view/popup.js';
import {generateFilm} from './mock/film.js';
import {generateFilter} from './mock/filter.js';
import {getRandomInt} from './mock/utils';

// eslint-disable-next-line no-console
// console.log(generateFilms);

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

const TOP_RATED_COUNT = 8;
export const FILM_CARDS_COUNT_STEP = 5;

const films = new Array(FILM_CARDS_COUNT).fill(null).map(generateFilm);
const ratedFilms = films
  .filter((film) => film.total_rating > TOP_RATED_COUNT)
  .sort((a, b) => (b.total_rating > a.total_rating) ? 1 : -1)
  .slice(0, 2);

const commentedFilms = films
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length)
  .slice(0, 2);

//доделай позже
//const comments = new Array(getRandomInt(1, 20)).fill('').map(generate)

const filters = generateFilter(films);

// eslint-disable-next-line no-console
console.log(filters);
// eslint-disable-next-line no-console
console.log(films.user_details);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.header');
const siteHeaderElement = siteHeader.querySelector('.header__logo');
const siteMainElement = document.querySelector('.main');
const siteFooter = document.querySelector('.footer');
const siteFooterElement = siteFooter.querySelector('.footer__statistics');

render(siteHeaderElement, createUserRateTemplate(), 'afterend');
render(siteMainElement, createMenuFilterTemplate(filters), 'afterbegin');

const navigationElement = siteMainElement.querySelector('.main-navigation');
render(navigationElement, createSortTemplate(), 'afterend');

const mainContainerAfterSort = siteMainElement.querySelector('.sort');
render(mainContainerAfterSort, createFilmContainerTemplate(), 'afterend');

const filmCardIntoMainContainer = siteMainElement.querySelector('.films-list__container');
//render(filmCardIntoMainContainer, createCardFilmTemplate(), 'beforeend');

for (let i = 0; i < Math.min(films.length, FILM_CARDS_COUNT_STEP); i++) {
//eslint-disable-next-line no-console
  render(filmCardIntoMainContainer, createCardFilmTemplate(films[i]), 'beforeend');
}

const filmListElement = siteMainElement.querySelector('.films-list');

if (films.length > FILM_CARDS_COUNT_STEP) {
  let renderedFilmsCount = FILM_CARDS_COUNT_STEP;

  render (filmListElement, createButtonShowTemplate(), 'beforeend');

  const buttonShowMore = filmListElement.querySelector('.films-list__show-more');
  buttonShowMore.addEventListener('click', (evt) => {
    evt.preventDefault();
    films.slice(renderedFilmsCount, renderedFilmsCount + FILM_CARDS_COUNT_STEP).forEach((film) => render(filmCardIntoMainContainer, createCardFilmTemplate(film), 'beforeend'));

    renderedFilmsCount += FILM_CARDS_COUNT_STEP;

    if (renderedFilmsCount >= films.length) {
      buttonShowMore.remove();
    }
  });
}

//render(buttonShowMoreAfterMainContainer, createButtonShowTemplate(), 'afterend');

render(siteFooterElement, createNumberFilmTemplate(), 'beforeend');

const containerTopRated = siteMainElement.querySelector('.films');
render(containerTopRated, createTopRatedTemplate(), 'beforeend');

const containerMostComment = siteMainElement.querySelector('.films');
render(containerMostComment, createMostCommentTemplate(), 'beforeend');

const extraContainers = document.querySelectorAll('.films-list--extra');
const topRatedElement = extraContainers[0];
const mostCommentedElement = extraContainers[1];

const topRatedFilmsContainer = topRatedElement.querySelector('.films-list__container');
for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(topRatedFilmsContainer, createCardFilmTemplate(films[i]), 'beforeend');
}

const mostCommentedFilmsContainer = mostCommentedElement.querySelector('.films-list__container');
for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(mostCommentedFilmsContainer, createCardFilmTemplate(films[i]), 'beforeend');
}

// popup

render(siteFooter, createPopupTemplate(films[0]), 'afterend');
