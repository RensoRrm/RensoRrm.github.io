// subscribe.js

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (name === '' || email === '') {
      alert('Por favor completa todos los campos.');
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Por favor ingresa un correo válido.');
      return;
    }
    
    alert(`¡Gracias por suscribirte, ${name}!`);
  });
  