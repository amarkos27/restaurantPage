import 'normalize.css';
import './style.css';
import Logo from './images/Los_Pollos_Hermanos_logo.png';
import renderImage from './renderImage.js';
import { click, unClick } from './buttonAnimation.js';
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderAbout from './about.js';

function render() {
  const content = document.querySelector('#content');
  const header = document.querySelector('header');
  header.insertBefore(renderImage(Logo), header.firstChild);

  const home = renderHome();
  const menu = renderMenu();
  const about = renderAbout();

  content.appendChild(home);

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const alreadyClicked = [...buttons].filter((otherButton) =>
        otherButton.classList.contains('clicked')
      );

      if (!button.classList.contains('clicked')) {
        unClick(alreadyClicked[0]);
        click(button);
        const otherButtons = [...buttons].filter(
          (otherButton) => !otherButton.classList.contains('clicked')
        );

        const newContent = button.classList.contains('home')
          ? home
          : button.classList.contains('menu')
          ? menu
          : about;

        content.classList.add('fadeOut');
        otherButtons.forEach((btn) => (btn.disabled = true));

        content.addEventListener(
          'animationend',
          () => {
            content.removeChild(content.children[0]);
            content.classList.remove('fadeOut');

            content.classList.add('fadeIn');
            content.appendChild(newContent);

            setTimeout(() => {
              content.classList.remove('fadeIn');
              otherButtons.forEach((btn) => (btn.disabled = false));
            }, 500);
          },
          { once: true }
        );
      }
    });
  });
}

render();
