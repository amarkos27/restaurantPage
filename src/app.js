import 'normalize.css';
import './style.css';
import renderLogo from './logo.js';
import { click, unClick } from './buttonAnimation.js';
import renderHome from './home.js';

function render() {
  const content = document.querySelector('#content');
  const header = document.querySelector('header');
  header.insertBefore(renderLogo(), header.firstChild);

  content.appendChild(renderHome());

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
