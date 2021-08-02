//Отрисовка компонента Звание пользователя
import {createUserRateTemplate} from './view/user-rate.js';
import {createMenuFilterTemplate} from './view/menu-stats.js';
import {createSortTemplate} from './view/sort-filter.js';
import {createFilmListTemplate} from './view/film-list-container.js';
import {createCardFilmTemplate} from './view/film-list-element.js';
import {createButtonShowTemplate} from './view/show-more.js';
import {createTopRatedTemplate} from './view/top-tated-movies.js';
import {createMostCommentTemplate} from './view/most-commented.js';
import {createNumberFilmTemplate } from './view/amount-films.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.header');
const siteHeaderElement = siteHeader.querySelector('.header__logo');

render (siteHeaderElement, createUserRateTemplate(), 'afterend');

//Отрисовка компонента фильтров и статистики (меню)
const siteMenuFilter = document.querySelector('.main');
render (siteMenuFilter, createMenuFilterTemplate(), 'afterbegin');

//Добавление сортировки фильмов
const siteSort = document.querySelector('.main');
render (siteSort, createSortTemplate(), 'beforeend');

//Cписок фильмов/ Контайнер
const siteFilmList = document.querySelector ('.main');
render (siteFilmList, createFilmListTemplate(), 'beforeend');

//Карточки фильмов
const siteFilmCard = document.querySelector('.films-list__container');
render (siteFilmCard, createCardFilmTemplate(), 'beforeend');

//Кнопка Show more на всю стр
const siteButtonShow = document.querySelector('.films-list');
render (siteButtonShow, createButtonShowTemplate(), 'beforeend');

//Фильмы с высоким рейтингом
const siteTopRated = document.querySelector('.films-list');
render (siteTopRated, createTopRatedTemplate(), 'afterend');

//Наиболее комментируемые
const siteMostComment = document.querySelector('.films');
render (siteMostComment, createMostCommentTemplate(), 'beforeend');

//Добавление количества фильмов в футер
const siteAmountFilm = document.querySelector('.footer');
const siteAmountFilmElement = siteAmountFilm.querySelector('.footer__statistics');
render (siteAmountFilmElement, createNumberFilmTemplate(), 'beforeend');
