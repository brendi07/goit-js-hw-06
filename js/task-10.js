function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const dives = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    var div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor(
      div
    )}`;
    dives.append(div);
  }
  boxes.append(dives);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
