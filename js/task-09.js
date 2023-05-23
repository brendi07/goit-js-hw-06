function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('.widget');
const bodyEl = document.querySelector("body");

body.addEventListener('click', changingBack);

function changingBack(event) {
  const bodyColor = event.currentTarget;
  bodyEl.style.backgroundColor = getRandomHexColor();
  const span = document.querySelector(".color");
  span.textContent = getRandomHexColor();
}
  




