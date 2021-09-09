import {getRandomInt, shuffle} from './utils';

const authors = [
  'Tim Macoveev',
  'John Doe',
  'Richard White',
  'Ilya O Reilly',
];

const comments = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. ',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. ',
  'Aliquam erat volutpat. ',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const dates = [
  '2014-02-02T20:01:54.554Z',
  '2015-03-03T11:12:34.554Z',
  '2016-07-13T17:10:55.554Z',
  '2017-09-16T19:16:32.554Z',
  '2019-10-10T16:12:32.554Z',
  '2020-08-11T16:12:11.554Z',
];

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

export const generateComment = () => {
  const comment = {
    id: getRandomInt(0, 50),
    author: shuffle(authors).slice(0, (authors.length - 1)),
    comment: shuffle(comments).slice(0, (getRandomInt(1, comments.length - 1))).join(' '),
    date: shuffle(dates).slice(0, (dates.length - 1)),
    emotion: shuffle(emotions).slice(0, (emotions.length - 1)),
  };
  return comment;
  //console.log(comment);
};
