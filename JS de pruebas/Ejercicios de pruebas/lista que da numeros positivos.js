let lista = [1,2,3,-4,-5]

function Positivo (array){
    let cantidad = 0 ;
    for (numero of array){ 
        if (numero > 0){
            cantidad++;
        
    }
    }
    return cantidad
}

let resultado = Positivo(lista);
console.log(resultado);
