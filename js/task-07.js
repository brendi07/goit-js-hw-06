const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener("input", changingText);

function changingText(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};
