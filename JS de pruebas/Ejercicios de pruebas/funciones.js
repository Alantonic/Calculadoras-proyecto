//Funciones
/*
Recordemos que Length se usa para saber la cantidad
de argumentos de una función
*/

function Usuario(nombre){ //para constantes globales que no se reasignan 
    this.nombre = this.nombre = nombre;
}

console.log(Usuario.name); //ndicará el nombre de la función
console.log(Usuario.length);/*
Recordemos que Length se usa para saber la cantidad
de argumentos de una función
*/


//tomar la función y asignarlo a una variable

const U = Usuario
let user = new U ('Nicolas');

console.log(user);


//función como argumento
function of(Fn, arg){
    return new Fn(arg);/*
    new crea una nueva instancia de una clase
    asignando memoria para el objeto y llamando 
    a su constructor para inicializarlo. 
    */
}

let user1 = of (Usuario,'Alan Vargas');
console.log(user1)

function returned() {
    return function() {
        console.log ('Hola');
    }
}

let saludo = returned ();
saludo(); 