const refs = {
    categoriesItemsEl: document.querySelectorAll('#categories .item'),
    categoriesTitleEl: document.querySelectorAll('#categories h2'),
}


function showCategoriTitle() {
console.log(`Number of categories: ${refs.categoriesItemsEl.length}`);
    refs.categoriesTitleEl.forEach(el => {
        console.log(`Category: ${el.textContent}
        Elements: ${el.nextElementSibling.children.length}`);
    })
    }

showCategoriTitle()