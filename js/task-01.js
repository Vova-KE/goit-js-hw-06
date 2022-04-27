const countCategories = document.querySelectorAll('.item');
console.log('Number of categories:', countCategories.length);

const arrCategories = [...countCategories];
arrCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.innerText.split('\n').length - 1}`)
})