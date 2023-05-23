const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const liItem = ingredients.map(ingr => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingr;
  return li;
});

ul.append(...liItem);

