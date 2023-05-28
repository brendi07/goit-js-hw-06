const form = document.querySelector('.login-form');

form.addEventListener('submit', submitingForm);

function submitingForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const data = {
        email : email.value,
        password: password.value
    };
    if (data.email !== '' && data.password !== '') {
        console.log(data);
    } else if (data.email === '' || data.password === "") {
       return window.alert('Please fill in all the fields!');
    }
    event.currentTarget.reset();
}