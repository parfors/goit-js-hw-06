const refs = {
    input: document.querySelector('#name-input'),
    spanOutput: document.querySelector('#name-output'),
}

const showInputContent = () => {
    // refs.spanOutput.textContent = refs.input.value;
    // if (refs.input.value === '') {
    //     refs.spanOutput.textContent = 'Anonymous'
    // }
    refs.spanOutput.textContent = refs.input.value === '' ? 'Anonymous' : refs.input.value;
    }

refs.input.addEventListener('input', showInputContent)

