//Constructor

function Usuario (){ //recordemos que Uppercamelcase se usa para constructures y clases, su primera palabra es en mayuscula
    this.id = 1;
    this.recuperarClave = function(){ //metodo (funcion asignada a una propiedad de un objeto)
        console.log('recuperando Clave')

    }
}
/*new (crea un objeto literal en el aire, se vincula a un 
prototipo y se le asigna a la palabra "this" al objeto creado)*/

let usuario = new Usuario(); 

console.log (usuario);