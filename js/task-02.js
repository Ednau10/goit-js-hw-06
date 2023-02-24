/*Agrega los siguientes ingredietes del array a una lista desordenada */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Get the container element where the list will be created
const list = document.getElementById('ingredients');
//console.log(list);
// Loop through the ingredients array and create a list item for each one
for (let i = 0; i < ingredients.length; i++) {
  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = ingredients[i]; // Set the text content 
  
  // Add the item to the unordered list
  list.appendChild(listItem);
}

