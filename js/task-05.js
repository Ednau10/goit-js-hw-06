/*Escriba un script que, cuando se escriba el texto en el input de 
input#nombre-input (evento input),
sustituya su valor actual en span#name-output. 
Si el input está vacío, el span debería mostrar 
la secuencia "Anónimo".*/

let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.addEventListener("input", function() { //espera a que se escriba texto en el input de input#name
  if (input.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = input.value; //sustituye el valor actual en span#name-output
  }
});
