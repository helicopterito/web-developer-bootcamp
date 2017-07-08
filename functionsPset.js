function printReverse(arreglo){
    for(var i = arreglo.length - 1; i >= 0 ; i--){
        console.log(arreglo[i]);
    }
}

function isUniform(arreglo){
    var esUniforme = false;
    for(var i = 0; i < (arreglo.length - 1); i++){
        if(arreglo[i] === arreglo[i+1]){
            esUniforme = true;
        }
        else{
            return false;
        }
    }
    return esUniforme;
}

function sumArray(arreglo){
    if(typeof arreglo[0] === "number"){
        var total = 0;
        for(var i = 0; i < arreglo.length; i++){
            total += arreglo[i];
        }

        console.log("Total: " + total);
    }
    else{
        console.log("El valor introducido no es un numero");
    }
}

function max(arreglo){
    var max = arreglo[0];

    for(var i = 1; i < arreglo.length; i++){
        if(arreglo[i] > max){
            total = arreglo[i];
        }
    }

    return total;
}