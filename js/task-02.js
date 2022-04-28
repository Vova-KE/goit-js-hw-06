const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListItemWithMarkup = ingredients.map(ingredient => {
  const createListItem = document.createElement('li');
  createListItem.classList.add('item');
  createListItem.textContent = ingredient;

  return createListItem;
})

const list = document.getElementById('ingredients');

list.append(...createListItemWithMarkup);

