const refs = {
    categoriesItemsEl: document.querySelectorAll('.item'),
    categoriesTitleEl: document.querySelectorAll('.item h2'),
}

function showCategoriTitle() {
console.log(`Number of categories: ${refs.categoriesItemsEl.length}`);
    refs.categoriesTitleEl.forEach(el => {
        console.log(`Category: ${el.textContent}
        Elements: ${el.nextElementSibling.children.length}`);
    })
    }

showCategoriTitle()