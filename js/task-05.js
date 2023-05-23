const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", addingName);

function addingName(event) {  
    outputName.textContent = event.target.value;
    if (event.target.value.length === 0) {
        outputName.textContent = "Anonymous" 
    }
};
