import 'normalize.css';
import './style.css';
import Logo from './images/Los_Pollos_Hermanos_logo.png';
import renderImage from './renderImage.js';
import { click, unClick } from './buttonAnimation.js';
import renderHome from './home.js';
import renderMenu from './menu.js';

function render() {
  const content = document.querySelector('#content');
  const header = document.querySelector('header');
  header.insertBefore(renderImage(Logo), header.firstChild);

  content.appendChild(renderMenu());

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const alreadyClicked = [...buttons].filter((otherButton) =>
        otherButton.classList.contains('clicked')
      );

      unClick(alreadyClicked[0]);
      click(button);
    });
  });
}

render();
