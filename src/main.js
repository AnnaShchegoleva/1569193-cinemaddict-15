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
import {generateFilms} from './mock/film.js';

// eslint-disable-next-line no-console
// console.log(generateFilms);

const FILM_CARDS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

//создание нового массоива фильмов
const films = new Array(FILM_CARDS_COUNT).fill({}).map(generateFilms);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteHeader = document.querySelector('.header');
const siteHeaderElement = siteHeader.querySelector('.header__logo');
const siteMainElement = document.querySelector('.main');
const siteFooter = document.querySelector('.footer');
const siteFooterElement = siteFooter.querySelector('.footer__statistics');


render(siteHeaderElement, createUserRateTemplate(), 'afterend');
render(siteMainElement, createMenuFilterTemplate(), 'afterbegin');


const navigationElement = siteMainElement.querySelector('.main-navigation');
render(navigationElement, createSortTemplate(), 'afterend');


const mainContainerAfterSort = siteMainElement.querySelector('.sort');
render(mainContainerAfterSort, createFilmContainerTemplate(), 'afterend');


const filmCardIntoMainContainer = siteMainElement.querySelector('.films-list__container');
//render(filmCardIntoMainContainer, createCardFilmTemplate(), 'beforeend');


for (let i = 0; i < FILM_CARDS_COUNT; i++) {
//eslint-disable-next-line no-console
  render(filmCardIntoMainContainer, createCardFilmTemplate(films[i]), 'beforeend');
}

const buttonShowMoreAfterMainContainer = filmCardIntoMainContainer;
render(buttonShowMoreAfterMainContainer, createButtonShowTemplate(), 'afterend');

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

let popup = siteFooter;
render(popup, createPopupTemplate(), 'afterend');

popup = document.querySelector('.film-details').classList.add('visually-hidden');
