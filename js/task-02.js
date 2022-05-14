const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  list: document.querySelector('#ingredients'),
}

// function createMarkup(arrey) {
//   let listEl = document.createElement('li');
//   arrey.forEach(el => {
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = el;
//     listItemEl.classList.add('title');
//     listEl.append(listItemEl);
//   })
//   return listEl
// }

// refs.list.append(createMarkup(ingredients));
// console.log(refs.list);

// const markupArray = ingredients.map(el => {
//   const liItem = document.createElement('li');
//   liItem.textContent = el;
//   liItem.classList.add('titel');
//   return liItem
// })

function makeMarkupArray(array) {
  return array.map(el => {
  const liItem = document.createElement('li');
  liItem.textContent = el;
  liItem.classList.add('titel');
  return liItem
})
}

refs.list.append(...makeMarkupArray(ingredients));
