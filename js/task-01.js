const refCategories = document.querySelector('#categories');
console.log(`У списку ${refCategories.children.length} категорії.`);
const items = refCategories.querySelectorAll('.item');
items.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent;
    const itemCount = item.querySelectorAll("li").length;
    console.log(`Категорія: ${itemTitle}`);
    console.log(`Кількість елементів: ${itemCount}`);
})


// console.log(`У списку ${document.querySelectorAll('li.item').length} категорій.`);
// const itemTitle = document.querySelectorAll('h2');
// const itemCount = document.querySelectorAll('.item');
// (itemTitle).forEach((item) => 
// console.log(`Категорія: ${item.textContent}`));
// itemCount.forEach((item) => 
// console.log(`Кількість елементів: ${item.querySelectorAll('li').length}`))
