var pendientes = [];

function listar(){
    console.log("******");
    pendientes.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("******");
}

function agregar(){
    var nuevo = prompt("Ingrese el nuevo pendiente: ");
    pendientes.push(nuevo);
    console.log("Pendiente agregado");
}

function borrar(){
    var indice = prompt("Introduce numero del pendiente: ");
    pendientes.splice(indice, 1);
    console.log("Pendiente eliminado");
}

var input = prompt("Que quieres hacer? ");

while(input !== "salir"){
    if(input === "nuevo")
    {
        agregar();
    }
    else if(input === "lista"){
        listar();
    }
    else if(input === "borrar"){
        borrar();
    }
    input = prompt("Que quieres hacer? ");
}
