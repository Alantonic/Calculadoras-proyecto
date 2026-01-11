//referencias

let a=1;
let b = a;

b.prop = 1; /*
"propiedades" que permiten pasar datos de un 
componente padre a uno hijo.
*/
console.log (a,b);


// b++;

// console.log(a,b);

let x = {prop: 1} ;
function suma (n) {
    n.prop ++;
}

suma (x);
console.log(x)