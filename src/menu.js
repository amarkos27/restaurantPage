import ChickenFillet from './images/CHICKENFILLETBURGER.jpg';
import renderImage from './renderImage.js';

export default function renderMenu() {
  const container = document.createElement('div');
  container.classList.add('menuContainer');

  const newItem = document.createElement('div');
  newItem.classList.add('menuItem');

  const name = document.createElement('h2');
  name.textContent = 'CHICKEN FILLET BURGER';
  name.classList.add('itemName');

  const description = document.createElement('p');
  description.textContent = 'Whole bread fillet with classic or zinger coating';
  description.classList.add('itemDescription');

  const price = document.createElement('p');
  price.textContent = '$3.99';
  price.classList.add('itemPrice');

  newItem.appendChild(renderImage(ChickenFillet));
  newItem.appendChild(name);
  newItem.appendChild(description);
  newItem.appendChild(price);

  container.appendChild(newItem);

  return container;
}
