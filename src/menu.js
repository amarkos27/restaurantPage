import ChickenFillet from './images/CHICKENFILLETBURGER.jpg';
import renderImage from './renderImage.js';

export default function renderMenu() {
  const container = document.createElement('div');
  container.classList.add('menuContainer');

  const newItem = document.createElement('div');
  newItem.classList.add('menuItem');
  newItem.appendChild(renderImage(ChickenFillet));

  container.appendChild(newItem);

  return container;
}
