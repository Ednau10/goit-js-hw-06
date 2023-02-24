/*El procesamiento de form.login-form debe ser por el evento submit.
-----La página no debe recargarse cuando se envía el formulario.-----
Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia diciendo que todos los espacios deben ser rellenados.
Si el usuario ha rellenado todos los espacios y ha enviado el formulario, reúne los valores de los espacios en donde el nombre del espacio es el nombre de la propiedad y el valor del espacio es la propiedad. Use la propiedad elements para acceder a los elementos del formulario.
Muestre el objeto con los datos introducidos en la consola y borre los valores de los campos espacio del formulario usando el método reset.
const loginForm = document.querySelector('.login-form');
*/
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

// Obtengo valores de los campos del formulario email y password
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

// Comprueba si los campos están vacíos 
  if (email.trim() === '' || password.trim() === '') {
    alert('Todos los campos son obligatorios');
    return;
  }

// Creo el objeto con los datos introducidos en el formulario
  const formData = {
    email,
    password
  };

// Muestro el objeto con los datos introducidos en la consola
  console.log(formData);


// Reinicia el formulario
  loginForm.reset();
});
