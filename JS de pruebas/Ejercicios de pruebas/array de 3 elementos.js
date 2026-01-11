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
    [1,{name: 'Alan', }],
    [2,{name: 'Daniel', }],
    [3,{name: 'Jose', }],
];

function toPairs (arr){
    let collection= [];
    for (idx in arr) {
        let elemento = arr [idx];
        collection [idx] = elemento[idx]
        collection [idx] = elemento[idx].id = elemento [0]
    }
    return collection

}

let resultado = toCollection(pairs);
console.log(resultado);