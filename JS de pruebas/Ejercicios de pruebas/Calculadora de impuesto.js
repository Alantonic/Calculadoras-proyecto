function preciocompleto(precio,impuesto){
    resultado = precio+(precio*impuesto)
    return resultado
}

let datos= preciocompleto(200,.16)
console.log(datos)