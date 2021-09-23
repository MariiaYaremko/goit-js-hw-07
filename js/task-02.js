const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

const elements = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    return itemEl;
})
console.log(elements);
document.querySelector('#ingredients').append(...elements);


// const IngredientsList = document.querySelector('#ingredients') 
// const elements = ingredients.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;
//     return itemEl;
// })
// console.log(elements);
// IngredientsList.append(...elements);
