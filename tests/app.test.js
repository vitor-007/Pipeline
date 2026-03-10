const saudar = require('../src/app');

test('deve retornar a saudação com o nome correto', () => {
  expect(saudar('Vitor')).toBe('Eai, Vitor!');
});