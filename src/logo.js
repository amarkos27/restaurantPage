import Logo from './images/Los_Pollos_Hermanos_logo.png';

export default function renderLogo() {
  const pollos = new Image();
  pollos.src = Logo;

  return pollos;
}
