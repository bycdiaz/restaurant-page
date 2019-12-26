const navbar = () => {
  const content = document.querySelector('.content');
  content.innerHTML = '';

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
}

const createHome = () => {
  navbar();
}

export { createHome }