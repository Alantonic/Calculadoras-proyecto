let array = [{
id: 1,
name: 'Alan'

}, {
    id: 2,
    name: 'Daniel'
}, {
    id: 3,
    name: 'Jose'
}];

let pares = [
    [1,{id: 1, name: 'Alan', }],
    [2,{id: 2, name: 'Daniel', }],
    [3,{id: 3, name: 'Jose', }],
];

function toPairs (arr){
    let pairs= [];
    for (idx in arr) {
        let elemento = arr [idx]
        pairs [idx] = [elemento.id,elemento];
    }
    return pairs

}

let resultado = toPairs(array)
console.log(resultado)