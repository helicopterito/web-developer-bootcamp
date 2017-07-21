var colors = [
    "rgb(0, 255, 255)",
    "rgb(255, 0, 0 )",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 0)"
];

function generarColores(){
    for(var i = 0; i < colors.length; i++){
        colors[i] = "rgb(";
        colors[i] += Math.floor(Math.random() * 256);
        colors[i] += ", ";
        colors[i] += Math.floor(Math.random() * 256);
        colors[i] += ", ";
        colors[i] += Math.floor(Math.random() * 256);
        colors[i] += ")"
    }
}

function elegirColor(){
    var numAleatorio = Math.floor(Math.random() * squares.length);
    return colors[numAleatorio];
}


var squares = document.querySelectorAll(".square");
generarColores();
var pickedColor = elegirColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var botonFacil = document.getElementById("botonFacil");
var botonDificil = document.getElementById("botonDificil");

botonFacil.addEventListener("click", function(){
    this.classList.add("selected");
    botonDificil.classList.remove("selected");
    generarColores();
    pickedColor = colors[Math.floor(Math.random() * 3)];
    colorDisplay.textContent = pickedColor;
    colocarColores();
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "Nuevos Colores";
    messageDisplay.textContent = "";
    for(var i = 3; i < squares.length; i++){
        squares[i].style.backgroundColor = "#232323";
    }
});
botonDificil.addEventListener("click", function(){
    this.classList.add("selected");
    botonFacil.classList.remove("selected");
    resetear();
});

function resetear(){
    generarColores();
    pickedColor = elegirColor();
    colorDisplay.textContent = pickedColor;
    colocarColores();
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "Nuevos Colores";
    messageDisplay.textContent = "";
}

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetear);

function compararColor(){
    if(this.style.backgroundColor === pickedColor){
        messageDisplay.textContent = "Correcto";
        if(botonFacil.classList.contains("selected")){
            cambiarColor(3);
        }
        else{
            cambiarColor(6);
        }
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Jugar de nuevo";
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Intenta de nuevo";
    }
}

function cambiarColor(num){
    for(var i = 0; i < num; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}


function colocarColores(){
    for(var i = 0; i < squares.length; i++){
        //agrega el color a los cuadros
        squares[i].style.backgroundColor = colors[i];

        //agrega el eventListener
        squares[i].addEventListener("click", compararColor);
    }
}

h1.style.backgroundColor = "steelblue";
colocarColores();
colorDisplay.textContent = pickedColor;