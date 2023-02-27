let counterValue = 0;

const decrementBt = document.querySelector('[data-action="decrement"]');
const incrementBt = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

decrementBt.addEventListener('click', decrement);
incrementBt.addEventListener('click', increment);

function decrement() {
  counterValue --;

  valueSpan.textContent = counterValue;
}

function increment() {
  counterValue ++;

  valueSpan.textContent = counterValue;  
}