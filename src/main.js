//Отрисовка компонента Звание пользователя
import {createUserRateTemplate} from './view/user-rate.js';
import {createMenuFilterTemplate} from './view/menu-stats.js';
import {createSortTemplate} from './view/sort-filter.js';
import {createFilmListTemplate} from './view/film-list.js';
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

//Cписок фильмов
const siteFilmList = document.querySelector('.main');
render (siteFilmList, createFilmListTemplate(), 'beforeend');

//Добавление количества фильмов в футер
const siteAmountFilm = document.querySelector('.footer');
const siteAmountFilmElement = siteAmountFilm.querySelector('.footer__statistics');
render (siteAmountFilmElement, createNumberFilmTemplate(), 'beforeend');
