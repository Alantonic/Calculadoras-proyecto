function array (arr, idx){
    if (idx<0 || arr.lenght <= idx){
        return 'No encontrado';
    }
    return arr,[idx];
}

let resultado = array([1,2], 1)
console.log(resultado)