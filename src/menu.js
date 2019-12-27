import { createCommon } from './common.js'

const content = document.querySelector('.content');

const menuItems = () => {
  const menuItem1 = document.createElement('div');
  menuItem1.className = 'menu-item';
  content.appendChild(menuItem1);

  const menuItemImage1 = document.createElement('img');
  menuItem1.appendChild(menuItemImage1);

  const menuItemTitle1 = document.createElement('h4');
  menuItemTitle1.innerText = 'Ham & Eggs';
  menuItem1.appendChild(menuItemTitle1);

  const menuItemDescription1 = document.createElement('p');
  menuItemDescription1.innerText = 'Sliced ham with eggs.';
  menuItem1.appendChild(menuItemDescription1);

  const menuItem2 = document.createElement('div');
  menuItem2.className = 'menu-item';
  content.appendChild(menuItem2);

  const menuItemImage2 = document.createElement('img');
  menuItem2.appendChild(menuItemImage2);

  const menuItemTitle2 = document.createElement('h4');
  menuItemTitle2.innerText = 'Turkey Sandwich';
  menuItem2.appendChild(menuItemTitle2);

  const menuItemDescription2 = document.createElement('p');
  menuItemDescription2.innerText = 'Trukey in toasted bread slices.';
  menuItem2.appendChild(menuItemDescription2);
};

const createMenu = () => {
  content.innerHTML = '';
  createCommon();
  menuItems();
};

export { createMenu };
