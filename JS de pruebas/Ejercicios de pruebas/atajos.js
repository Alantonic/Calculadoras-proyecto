//atajos de javascript

//crea un objeto

let obj = {}; //recordemos que camelcase se usa para funciones, metodos y objetos y la primera palabra es en minuscula

/**
 * Contructores
 * -new Array();
 * -new String();
 * -new Number();
 * -New Boolean();
 */

function Usuario(){
    this.nombre = "Alan Vargas";
}
let user = new Usuario();
console.log(user.constructor);