import { createHome } from './home.js'
import { createContact } from './contact.js'
import { createMenu } from './menu.js'
import Image from './la.jpg';

const content = document.querySelector('.content');

const createTitle = () => {
  const title = document.createElement('h1');
  title.innerText = 'The LA Cafe';
  content.appendChild(title);
};

const createNav = () => {
  const navbar = document.createElement('ul');
  content.appendChild(navbar);

  const home = document.createElement('li');
  navbar.appendChild(home);
  const homeLink = document.createElement('a');
  homeLink.addEventListener('click', () => {
    createHome();
  });
  homeLink.innerText = 'Home';
  home.appendChild(homeLink);

  const menu = document.createElement('li');
  navbar.appendChild(menu);
  const menuLink = document.createElement('a');
  menuLink.addEventListener('click', () => {
    createMenu();
  });
  menuLink.innerText = 'Menu';
  menu.appendChild(menuLink);

  const contact = document.createElement('li');
  navbar.appendChild(contact);
  const contactLink = document.createElement('a');
  contactLink.addEventListener('click', () => {
    createContact();
  });
  contactLink.innerText = 'Contact';
  contact.appendChild(contactLink);
};

const createImage = () => {
  const background = document.createElement('img');
  background.className = 'background';
  background.src = Image;
  content.appendChild(background);
};

const createCommon = () => {
  createTitle();
  createNav();
  createImage();
};

export { createCommon };
