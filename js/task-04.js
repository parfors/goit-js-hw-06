const refs = {
    decButton: document.querySelector('[data-action="decrement"]'),
    incButton: document.querySelector('[data-action="increment"]'),
    displayVal: document.querySelector('#value'),
}

let counterValue = 0;

const onDecButtonClick = () => {
    counterValue -= 1;
    refs.displayVal.textContent = counterValue
}
const onIncButtonClick = () => {
    counterValue += 1;
    refs.displayVal.textContent = counterValue;
}

refs.decButton.addEventListener('click', onDecButtonClick);
refs.incButton.addEventListener('click', onIncButtonClick)

