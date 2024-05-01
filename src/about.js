function aboutFring() {
  const fringDiv = document.createElement('div');
  fringDiv.classList.add('fringDiv');

  const portrait = document.createElement('div');
  portrait.classList.add('fring');

  const nameplate = document.createElement('h3');
  nameplate.textContent = 'Founder - Gustavo Fring';

  const description = document.createElement('p');
  description.textContent =
    'Gustavo "Gus" Fring, our founder, was a man of principle. He was a man that cared for his community in more ways than one: pouring his heart into his beloved restaurants, and donating thousands to show his gratitude. Though many have come to see him as an evil drug kingpin, he remains close to our hearts.';

  fringDiv.appendChild(portrait);
  fringDiv.appendChild(nameplate);
  fringDiv.appendChild(description);

  return fringDiv;
}

function contactInfo() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactHeader = document.createElement('h3');
  contactHeader.textContent = 'Contact';

  const info = document.createElement('ul');

  const tel = document.createElement('li');
  tel.textContent = 'Telephone: +1(800)-POLLOSH';

  const email = document.createElement('li');
  email.textContent = 'Email: customerservice@pollos.net';

  info.appendChild(tel);
  info.appendChild(email);

  contact.appendChild(contactHeader);
  contact.appendChild(info);

  return contact;
}

function createMap() {
  const iframe = document.createElement('iframe'); // Create an iframe element
  iframe.classList.add('map');
  iframe.style.border = '0';
  iframe.loading = 'lazy';
  iframe.allowFullscreen = true;
  iframe.src =
    'https://www.google.com/maps/embed/v1/search?q=KFC&key=AIzaSyAoT-2jehAdGYCLVFbaxf3L8zhlDFOOp_k';

  return iframe;
}

function locations() {
  const locationsDiv = document.createElement('div');
  locationsDiv.classList.add('locationsDiv');

  const header = document.createElement('h3');
  header.textContent = 'Locations';

  const map = createMap();

  locationsDiv.appendChild(header);
  locationsDiv.appendChild(map);

  return locationsDiv;
}

export default function renderAbout() {
  const container = document.createElement('div');
  container.classList.add('aboutContainer');

  const header = document.createElement('h1');
  header.textContent = 'ABOUT US';
  header.classList.add('aboutHeader');

  const row1 = document.createElement('div');
  row1.classList.add('row1');

  row1.appendChild(aboutFring());
  row1.appendChild(contactInfo());

  const row2 = document.createElement('div');
  row2.classList.add('row2');

  row2.appendChild(locations());

  container.appendChild(header);
  container.appendChild(row1);
  container.appendChild(row2);

  return container;
}
