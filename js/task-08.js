const refs = {
    form: document.querySelector('.login-form'),

}

const onFormSubmit = (event) => {
    event.preventDefault();
    if ([...event.currentTarget.elements].filter(el => el.nodeName === "INPUT").some(el => el.value === "")) {
        alert('Fill all the filds')
    } else {
        const { email, password } = event.currentTarget.elements;
    const obj = {
        email: email.value,
        password: password.value,
    }
        console.log(obj); 
        refs.form.reset();
}
}

refs.form.addEventListener('submit', onFormSubmit);