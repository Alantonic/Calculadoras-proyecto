//Dinamico
function crearusuario(nombre,email){
    return {
    id: 1,
    email,
    nombre,
    activo: false,
        Recuperar_datos: function (){
            console.log('Recuperando datos...');  
        },
    };
}    
