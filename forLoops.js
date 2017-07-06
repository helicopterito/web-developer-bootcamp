function funcion1(){
    for(var i = -10; i < 20; i++){
        console.log("Punto #1");
        console.log(i);
    }
}

function funcion2(){
    for(var i = 10; i <= 40; i++){
        console.log("Punto #2");
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

function funcion3(){
    for(var i = 300; i <= 333; i++){
        console.log("Punto #3");
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

function funcion4(){
    for(var i = 5; i <= 50; i++){
        console.log("Punto #4");
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log(i);
        }
    }
}


funcion1();
funcion2();
funcion3();
funcion4();