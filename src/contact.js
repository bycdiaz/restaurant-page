import { createHome } from './home.js'
import { createMenu } from './menu.js'

const content = document.querySelector('.content');

const createTitle = () => {
  const title = document.createElement('h1');
  title.innerText = 'The LA Cafe - Contact Page';
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

const createContactInfo = () => {
  const contact = document.createElement('div');
  contact.innerText = 'This is the contact page!';
  content.appendChild(contact);
};

const createContact = () => {
  content.innerHTML = '';
  createTitle();
  createNav();
  createContactInfo();
};

export { createContact };