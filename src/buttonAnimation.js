function click(button) {
  button.classList.remove('hover');
  button.classList.add('clicked');
}

function unClick(button) {
  button.classList.remove('clicked');
  button.classList.add('hover');
}

export { click, unClick };
