
document.querySelector('.login-form').addEventListener('submit', (e) => {
  
  e.preventDefault();

  
  const email = document.querySelector('[name="email"]');
  const password = document.querySelector('[name="password"]');

  
  if (email.value === '' || password.value === '') {
    alert('All fields must be filled in!');
    return;
  }

  
  const data = {
    email: email.value,
    password: password.value,
  };

  
  console.log(data);  
  e.target.reset();  
});

