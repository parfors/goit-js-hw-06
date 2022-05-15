const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}

const onInputInput = () => {
    refs.span.style.fontSize = `${refs.input.value}px`;
    console.log(Number(refs.input.value));
}

refs.input.addEventListener('input', onInputInput);
