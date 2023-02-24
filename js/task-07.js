/*Mover la barra e incrementar o decrementar el tamaño del texto en consecuencia.*/ 
const controlFontSize = document.getElementById('font-size-control'); //get value of the element with id font-size-control

const text = document.getElementById('text'); //get value of the element with id text

//es la posición actual del deslizador en px. 
controlFontSize.addEventListener('input', () => {
  text.style.fontSize = `${controlFontSize.value}px`;
  //Esto cambia el tamaño del texto según la posición del deslizador.
});

