const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`)

categoriesItems.forEach(item => {
    const links = item.lastElementChild.children.length;
    const title = item.firstElementChild;
    
    
        console.log(`Category: ${title.textContent}\n Elements: ${links}`);
});

