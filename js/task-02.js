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

const markupArray = [];
ingredients.map(el => {
  const liItem = document.createElement('li');
  liItem.textContent = el;
  liItem.classList.add('titel');
  markupArray.push(liItem);
})

// console.log(markupArray);
refs.list.append(...markupArray);
console.log(refs.list);
