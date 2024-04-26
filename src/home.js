function renderQuote() {
  const homePageQuote = document.createElement('div');
  homePageQuote.classList.add('homePageQuote');

  const quoteHeader = document.createElement('h1');
  quoteHeader.classList.add('quoteHeader');
  quoteHeader.textContent = 'WE ARE THE CHICKEN BROTHERS';

  const quote = document.createElement('p');
  quote.classList.add('quote');
  quote.textContent =
    "The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.";

  homePageQuote.appendChild(quoteHeader);
  homePageQuote.appendChild(quote);

  return homePageQuote;
}

export default function renderHome() {
  const container = document.createElement('div');
  container.classList.add('homeContainer');

  const header = document.createElement('h1');
  header.classList.add('welcome');
  header.textContent = 'WELCOME TO LOS POLLOS HERMANOS';

  const storeFront = document.createElement('div');
  storeFront.id = 'store';

  container.appendChild(header);
  container.appendChild(renderQuote());
  container.appendChild(storeFront);

  return container;
}
