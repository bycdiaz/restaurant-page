import { createCommon } from './common.js'

const content = document.querySelector('.content');

const createContactInfo = () => {
  const contact = document.createElement('div');
  contact.className = 'contact-container';
  content.appendChild(contact);

  const name = document.createElement('p');
  name.innerText = 'Carlos';
  contact.appendChild(name);

  const email = document.createElement('p');
  email.innerText = 'emailme@email.com';
  contact.appendChild(email);

  const phone = document.createElement('p');
  phone.innerText = '555-555-5555';
  contact.appendChild(phone);
};

const createContact = () => {
  content.innerHTML = '';
  createCommon();
  createContactInfo();
};

export { createContact };
