import {createUserRateTemplate} from './view/user-rate.js';
//Отрисовка компонента Звание пользователя
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.header');
const siteHeaderElement = siteHeader.querySelector('.header__logo');

render(siteHeaderElement, createUserRateTemplate(), 'afterend');

//Отрисовка компонента фильтров и статистики (меню)
import {createMenuFilterTemplate} from './view/menu-stats.js';
const siteMenuFilter = document.querySelector('.main');

render (siteMenuFilter, createMenuFilterTemplate(), 'afterbegin');
