//Listar propiedades

const punto = {
    x: 10,
    y:15,
    dibujar() {
        console.log('Dibujando');
    }

};
delete punto.dibujar; //Elimina la propiedad
if('dibujar' in punto){
    punto.dibujar();
}
punto.dibujar

//devuelve un array de las propiedades 
console.log (Object.keys(punto)); 


//listar valores de los objetos
for (let llave of Object.keys(punto)){ //of itera una array
    console.log(llave, punto [llave]);
}

for (let entry of Object.entries(punto)){ //enseña la propiedad y su valor
    console.log(entry)
}

for (let llave in punto){ 
    console.log(llave, punto [llave]);
}
