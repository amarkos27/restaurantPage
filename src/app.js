import 'normalize.css';
import './style.css';
import Logo from './images/Los_Pollos_Hermanos_logo.png';
import renderImage from './renderImage.js';
import { click, unClick } from './buttonAnimation.js';
import renderHome from './home.js';

function render() {
  const content = document.querySelector('#content');
  const header = document.querySelector('header');
  header.insertBefore(renderImage(Logo), header.firstChild);

  content.appendChild(renderHome());

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

        let newContent;

        if (button.classList.contains('home')) {
          newContent = renderHome();
        } else if (button.classList.contains('menu')) {
          import('./menu.js').then((menuModule) => {
            newContent = menuModule.default();
          });
        } else {
          import('./about.js').then((aboutModule) => {
            newContent = aboutModule.default();
          });
        }

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
