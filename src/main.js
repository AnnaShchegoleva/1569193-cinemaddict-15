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

const FILM_CARD_COUNT = 4;
const TOP_RATED_COUNT = 1;
const MOST_COMMENTED_COUNT = 1;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.header');
const siteHeaderElement = siteHeader.querySelector('.header__logo');
const siteMainElement = document.querySelector('.main');
const siteFooter = document.querySelector('.footer');
const siteFooterElement = siteFooter.querySelector('.footer__statistics');

render (siteHeaderElement, createUserRateTemplate(), 'afterend');
render (siteMainElement, createMenuFilterTemplate(), 'afterbegin'); //Отрисовка компонента фильтров и статистики (меню)

//Добавление сортировки фильмов
const sortFilm = siteMainElement.querySelector('.main-navigation');
render (sortFilm, createSortTemplate(), 'afterend');

//Cписок фильмов/ Контайнер
const MainContainer = siteMainElement.querySelector('.sort');
render (MainContainer, createFilmContainerTemplate(), 'afterend');

//Карточка фильма
const filmCard = siteMainElement.querySelector('.films-list__container');
render (filmCard, createCardFilmTemplate(), 'beforeend');

for (let i=0; i < FILM_CARD_COUNT; i++) {
  render (filmCard, createCardFilmTemplate(), 'beforeend');
}

//Кнопка Show more на всю стр
const buttonShowMore = siteMainElement.querySelector('.films-list');
render (buttonShowMore, createButtonShowTemplate(), 'beforeend');

//Фильмы с высоким рейтингом - контейнер
const containerTopRated = siteMainElement.querySelector('.films');
render (containerTopRated, createTopRatedTemplate(), 'beforeend');

//Карта Фильма в топ по рейтингу
const filmCardTop = containerTopRated.querySelector('.films-list--extra');
const filmCardTopElement = filmCardTop.querySelector('.films-list__container');
render (filmCardTopElement, createCardFilmTemplate(), 'beforeend');

for (let i=0; i < TOP_RATED_COUNT; i++) {
  render (filmCardTopElement, createCardFilmTemplate(), 'beforeend');
}

//const MOST_COMMENTED_COUNT = 1;
//Наиболее комментируемые - контейнер
const containerMostComment = siteMainElement.querySelector('.films');
render (containerMostComment, createMostCommentTemplate(), 'beforeend');

//Карта Фильма в Наиболее комментируемых ф
const filmCardMostComm = containerMostComment.querySelector('.films-list--extra');
const filmCardMostCommElement = filmCardMostComm.querySelector('.films-list__container');
render (filmCardMostCommElement, createCardFilmTemplate(), 'afterbegin');

//Добавление количества фильмов в футер
render (siteFooterElement, createNumberFilmTemplate(), 'beforeend');
