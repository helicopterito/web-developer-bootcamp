var pendientes = [];

var input = prompt("Que quieres hacer? ");

while(input !== "salir"){
    if(input === "nuevo")
    {
        var nuevo = prompt("Ingrese el nuevo pendiente: ");
        pendientes.push(nuevo);
    }
    else if(input === "lista"){
        console.log(pendientes);
    }
    input = prompt("Que quieres hacer? ");
}
