const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", changingBorder);
function changingBorder(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
};

