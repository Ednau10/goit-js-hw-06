/*Escriba un script que, si se pierde el enfoque en un input (evento blur), 
comprobará el contenido del instupt, evalua si la cantidad de 
símbolos introducidos es correcto.*/


//get the value validation-input 
const input = document.getElementById('validation-input'); 

input.addEventListener('blur', () => {
    //get the value of the data-length 
  const length = input.getAttribute('data-length');
  
  //get the value and clean spaces
  const value = input.value.trim(); 

// comprobamos si la longitud del valor es igual a la longitud requerida. 
//Si es así, eliminamos la clase CSS invalid y agregamos la clase CSS valid. 
if (value.length === Number(length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    //Si no, hacemos lo contrario y removemos.
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
