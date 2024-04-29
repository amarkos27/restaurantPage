import ChickenFillet from './images/CHICKENFILLETBURGER.png';
import supremeFilletBurger from './images/supremeFilletBurger.png';
import towerBurger from './images/filletTower.png';
import losPollosBurger from './images/losPollosBurger.png';
import singleBurger from './images/burger.png';
import loadedBox from './images/loaded-box.jpeg';
import miniBucket from './images/mini-bucket.png';
import bonelessWings from './images/bonelessWings.png';
import renderImage from './renderImage.js';

function createMenuItem(image, itemName, itemDescription, itemPrice) {
  const newItem = document.createElement('div');
  newItem.classList.add('menuItem');

  const name = document.createElement('h2');
  name.textContent = itemName;
  name.classList.add('itemName');

  const description = document.createElement('p');
  description.textContent = itemDescription;
  description.classList.add('itemDescription');

  const price = document.createElement('p');
  price.textContent = itemPrice;
  price.classList.add('itemPrice');

  newItem.appendChild(renderImage(image));
  newItem.appendChild(name);
  newItem.appendChild(description);
  newItem.appendChild(price);

  return newItem;
}

export default function renderMenu() {
  const container = document.createElement('div');
  container.classList.add('menuContainer');

  const item1 = createMenuItem(
    ChickenFillet,
    'CHICKEN FILLET BURGER',
    'Whole breast fillet with classic or zinger coating.',
    '$3.99'
  );

  const item2 = createMenuItem(
    supremeFilletBurger,
    'SUPREME FILLET BURGER',
    'Whole breast fillet with cheese & hash brown. Available in classic or zinger.',
    '$4.49'
  );

  const item3 = createMenuItem(
    towerBurger,
    'TOWER BURGER',
    'Whole breast fillet with cheese & hashbrown, 3 onion rings. Available in classic or zinger.',
    '$4.99'
  );

  const item4 = createMenuItem(
    losPollosBurger,
    'LOS POLLOS BURGER',
    'Two whole breast fillet with double cheese & hash brown. Available in classic or zinger.',
    '$5.99'
  );

  const item5 = createMenuItem(
    singleBurger,
    '6oz CHEESE BURGER',
    'Beef patty. Available in double ($4.99).',
    '$3.99'
  );

  const item6 = createMenuItem(
    loadedBox,
    'LOADED BOX MEAL',
    'Fillet burger in classic or zinger, chicken strips, fries & drink.',
    '$6.49'
  );

  const item7 = createMenuItem(
    miniBucket,
    'MINI BUCKET',
    '6pc regular, 6pc spicy wings, fries.',
    '$9.99'
  );

  const item8 = createMenuItem(
    bonelessWings,
    'BONELESS WINGS',
    '12pc boneless wings. Available in classic, zinger, or BBQ.',
    '$7.99'
  );

  container.appendChild(item1);
  container.appendChild(item2);
  container.appendChild(item3);
  container.appendChild(item4);
  container.appendChild(item5);
  container.appendChild(item6);
  container.appendChild(item7);
  container.appendChild(item8);

  return container;
}
