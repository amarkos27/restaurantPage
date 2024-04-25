export default function renderHome() {
  const container = document.createElement('div');
  container.classList.add('homeContainer');

  const header = document.createElement('h1');
  header.classList.add('welcome');
  header.textContent = 'WE ARE THE CHICKEN BROTHERS';

  const storeFront = document.createElement('div');
  storeFront.id = 'store';

  container.appendChild(header);
  container.appendChild(storeFront);

  return container;
}
