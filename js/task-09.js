/*Cambia el color del body dando clic en el botón. los colores se dan a partir de la funcion getRandomHexColor() */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Obtener elementos 
const body = document.querySelector('body'); 
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

// Función para cambiar el color de fondo
function changeBackgroundColor() {

  // asigna el color del background generado por la función getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor();

  // Muestra el valor del color en el span.color
  colorSpan.textContent = getRandomHexColor();
}

// Agrego un event listener al botón de cambiar color
changeColorBtn.addEventListener('click', changeBackgroundColor);