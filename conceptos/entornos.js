let saludo = process.env.NOMBRE || 'No hay nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Hola ' + saludo);
console.log('Mi web es: ' + web);