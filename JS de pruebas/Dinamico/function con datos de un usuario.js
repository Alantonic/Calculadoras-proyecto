//function con datos dentro y guardarlos
function crearUsuario(nombre, email){ //la funcion para los factory deben de usar camelcase
    return{
    id: 1,
    email,
    nombre,
    activo: false,
        Recuperar_datos: function (){
            console.log('Recuperando datos...');  
        },
    };
    }

    let user1 = crearUsuario('Felipe','Felipe123@gmail.com' );
    let user2 = crearUsuario('Alan','alantonic123@gmail.com' );
    console.log(user1)