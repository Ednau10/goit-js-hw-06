/*Contador con botones -1 y +1  */

const counterValue = document.getElementById("value"); //get the value  of span
console.log(counterValue);

const incrementButton = document.querySelector("[data-action='increment']");//+1
const decrementButton = document.querySelector("[data-action='decrement']");//-1
let count = 0;
incrementButton.addEventListener("click", () => {   //esperar que se ejecute el evento click +1
  count++;
  counterValue.textContent = count; //asignar el valor a span

});
decrementButton.addEventListener("click", () => { //esperar que se ejecute el evento click +1
  count--;
  counterValue.textContent = count; //asignar el valor a span
});
