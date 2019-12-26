import Image from './la.jpg';

const content = document.querySelector('.content');

const createImage = () => {
  const myImage = new Image();
  myImage.src = Image;
  content.appendChild(myImage);
};

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
  homeLink.href = '';
  homeLink.innerText = 'Home';
  home.appendChild(homeLink);

  const menu = document.createElement('li');
  navbar.appendChild(menu);
  const menuLink = document.createElement('a');
  menuLink.href = '';
  menuLink.innerText = 'Menu';
  menu.appendChild(menuLink);

  const contact = document.createElement('li');
  navbar.appendChild(contact);
  const contactLink = document.createElement('a');
  contactLink.href = '';
  contactLink.innerText = 'Contact';
  contact.appendChild(contactLink);
};

const createHome = () => {
  content.innerHTML = '';
  createTitle();
  createNav();
  createImage();
};

export { createHome };
