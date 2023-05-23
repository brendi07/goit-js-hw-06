const plusBtn = document.querySelector('button[data-action="decrement"]');
const minusBtn = document.querySelector('button[data-action="increment"]');
let countertValue = document.querySelector('#value');
let number = 0;

plusBtn.addEventListener("click", onMinus);
minusBtn.addEventListener("click", onPlus);


function onPlus() {
    number += 1;
    countertValue.textContent = number;
};

function onMinus() {
    number -= 1;
    countertValue.textContent = number;
};
