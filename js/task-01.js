const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const listItems = item.querySelectorAll('li');

  console.log(`category: ${title}`);
  console.log(`Elements: ${listItems.length}`);
});