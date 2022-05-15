const refs = {
    input: document.querySelector('body input')
}


const onInputBlur = () => {

    if (Number(refs.input.dataset.length) === refs.input.value.length) {
        refs.input.classList.add('valid')
        refs.input.classList.remove('invalid')
    }
    else {refs.input.classList.remove('valid')
    refs.input.classList.add('invalid');}
}

refs.input.addEventListener('blur', onInputBlur)
