import 'normalize.css';
import './style.css';
import Logo from './Los_Pollos_Hermanos_logo.png';
import { click, unClick } from './buttonAnimation.js';

function renderLogo() {
  const pollos = new Image();
  pollos.src = Logo;

  return pollos;
}

const header = document.querySelector('header');
header.insertBefore(renderLogo(), header.firstChild);
