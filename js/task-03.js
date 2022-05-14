const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const refs = {
  list: document.querySelector('.gallery')
}

function makeImageMarkup({ url, alt }) {
  return `    <li class="gallery-item"><img class="gallery-img" src="${url}" alt="${alt}" width="400"></li>
`
}
// const image = {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   }
//   const imageMarkup = makeImageMarkup(image)
// refs.list.insertAdjacentHTML("afterbegin", imageMarkup)

const galleryMarkup = images.map(makeImageMarkup).join('');
console.log(galleryMarkup);
refs.list.insertAdjacentHTML("beforeend", galleryMarkup);
