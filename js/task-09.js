function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  changeColBtn: document.querySelector('.change-color'),
  displayColorSpan: document.querySelector('.widget .color')
}

const onBtnClick = () => {
  const color = getRandomHexColor();
  refs.displayColorSpan.textContent = color;
  refs.body.style.backgroundColor = color;
}

refs.changeColBtn.addEventListener('click', onBtnClick)