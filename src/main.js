import {createUserRateTemplate} from './view/user-rate.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.header');
const siteHeaderElement = siteMainElement.querySelector('.header__logo');

render(siteHeaderElement, createUserRateTemplate(), 'afterend');
