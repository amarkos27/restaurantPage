import 'normalize.css';
import './style.css';
import Logo from './Los_Pollos_Hermanos_logo.png';
import { click, unClick } from './buttonAnimation.js';

function renderLogo() {
  const pollos = new Image();
  pollos.src = Logo;

  return pollos;
}

function render(initialRender = true) {
  if (initialRender) {
    const header = document.querySelector('header');
    header.insertBefore(renderLogo(), header.firstChild);

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
}

render();
