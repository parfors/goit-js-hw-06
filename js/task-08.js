const refs = {
    form: document.querySelector('.login-form'),

}

const onFormSubmit = (event) => {
    event.preventDefault();
console.dir(event.currentTarget.elements.email.value);
}

refs.form.addEventListener('submit', onFormSubmit);