let array = [2,10,11,1,15,150];

function lista (arr){
mayor = arr[0];
menor = arr [0];
for (numero of arr){
    menor = menor < numero ? menor : numero
    mayor = mayor > numero ? mayor : numero
return [menor, mayor];
}

}

let numeros = lista(array)
console.log(numeros)