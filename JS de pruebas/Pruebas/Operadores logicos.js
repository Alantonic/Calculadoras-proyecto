//Operadores logicos



console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let mayor= true;
let suscrito = true;

console.log('operador and', mayor && suscrito);
console.log('operador and', mayor || suscrito);

// ejemplo de falsy

let nombre = '';
let username = nombre || 'Juanito'

console.log(username);