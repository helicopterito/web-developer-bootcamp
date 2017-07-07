function isEven(num){
    if(typeof num === "number"){
        if(num % 2 === 0){
            return true;
        }
        return false;
    }
    else{
        console.log(num + " no es un numero");
        return false;
    }
}

function factorial(num){
     if(typeof num === "number"){
        var total = 1;
        for(var i = 1; i <= num; i++){
            total *= i;
        }
        return total;
     }
     else{
         console.log(num + " no es un numero");
         return NaN;
     }
    
}

function kebabToSnake(cadena){
    if(typeof cadena === "string"){
        return cadena.replace("-", "_");
    }
    else{
         console.log(num + " no es una cadena");
         return "";
    }
}