function ciclo1() {
    console.log("Ciclo #1");
    var i = -10;
    while(i < 20){
        console.log(i);
        i++;
    }
}

function ciclo2() {
    console.log("Ciclo #2");
    var i = 10;    
    while(i <= 40){
        if(i % 2 == 0){
            console.log(i);
        }
        i++;
    }
    
}

function ciclo3() {
    console.log("Ciclo #3");
    var i = 300;
    while(i <= 333){
        if(i % 2 != 0){
            console.log(i);
        }
        i++;
    }
}

function ciclo4() {
    console.log("Ciclo #4");
    var i = 5;
    while(i <= 50){
        if((i % 5 == 0) && (i % 3 == 0)){
            console.log(i);
        }
        i++;
    }
}

ciclo1();
ciclo2();
ciclo3();
ciclo4();