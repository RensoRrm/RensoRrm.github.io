const { validateEmail } = require('../assets/js/validateEmail');

test('Validar un correo correcto', () => {
  expect(validateEmail('renso@example.com')).toBe(true);
});

test('Validar un correo incorrecto', () => {
  expect(validateEmail('renso@.com')).toBe(false);
});
