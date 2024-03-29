// OPERADOR REST MINHA LISTA
function cadastrar(usuarios, ...novosUsuarios){

    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    
    return console.log(totalusuarios);
    }
    
    let usuarios = ["Mateus", "Joao"];
    
    let novosUsuarios = cadastrar(usuarios, "Herique", "Andre");