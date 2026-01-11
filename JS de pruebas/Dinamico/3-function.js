//Función con dibujo

function Punto (x,y) {
    this.x=x;
    this.y=y;
    this.dibujar = function() { console.log('Dibujando...'); }

}

let punto = { z: 7};
Punto.call({},1,2); /*
usarlo para llamar funciones y asignar valor o
usa apply pero los valores van en []
*/



//NO HACER ALGO COMO ESO

// const Point = new Function ('x','y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() {console.log(dibujando...); }`
// )

// const p = new Point (1,2);
// console.log(p);