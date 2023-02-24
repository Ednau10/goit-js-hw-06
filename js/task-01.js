//select all elements identified with any class name or id as a list of nodes
const categoriesList = document.querySelectorAll("#categories .item");
//console.log("categoriesList: ", categoriesList);

console.log("Number of categories: ", categoriesList.length);

//recorre cada elemento de la lista y muestra su contenido en caso de H2 obten el texto y en caso de li cuenta los elementos
for (let category of categoriesList) {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
}