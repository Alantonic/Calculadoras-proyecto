function resolucion(altura, ancho){
if (ancho<=200 && altura< 220){
    return 'HD';
    }
else if (ancho<=500 && altura < 520){
    return '4K';
}
else if (ancho<=700 && altura < 720){
    return '8K';
}
else{
    return false;
}

}

let resoluciones = resolucion(190,200);
console.log(resoluciones)

