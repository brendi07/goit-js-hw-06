function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('.widget');

body.addEventListener('click', changingBack);

function changingBack(event) {
  const bodyColor = event.currentTarget;
  bodyColor.style.backgroundColor = getRandomHexColor(body);
  const span = document.querySelector(".color");
  span.textContent = getRandomHexColor(body);
}
  




