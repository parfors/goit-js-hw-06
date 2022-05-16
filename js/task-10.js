function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsInput: document.querySelector('#controls input'),
  controlsBtnCreate: document.querySelector('#controls [data-create]'),
  controlsBtnDestroy: document.querySelector('#controls [data-destroy]'),
  boxesPaste: document.querySelector('#boxes')
}

let accum = 0;
let divWidth = 20;

const createAmountBoxes = () => {
  accum = Number(refs.controlsInput.value);
return accum
}
  

const createBoxes = (amount) => {
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    divWidth += 10;
    const markupEl = document.createElement('div');
    markupEl.style.width = `${divWidth}px`;
    markupEl.style.height = `${divWidth}px`;
    markupEl.style.backgroundColor = getRandomHexColor();
    divArray.push(markupEl)
  }
  refs.boxesPaste.append(...divArray)
}

const destroyBoxes = () => {
  refs.boxesPaste.innerHTML = '';
  divWidth = 20;
}

const renderingBoxes = () => {
  createBoxes(accum);
  }

refs.controlsInput.addEventListener('blur', createAmountBoxes);
refs.controlsBtnCreate.addEventListener('click', renderingBoxes )
refs.controlsBtnDestroy.addEventListener('click', destroyBoxes);
