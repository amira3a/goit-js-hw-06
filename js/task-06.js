const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const dataLength = validationInput.dataset.length;
  const inputLength = validationInput.value.length;

  if (inputLength <= dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
    
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});