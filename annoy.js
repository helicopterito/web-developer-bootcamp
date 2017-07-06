var answer = "no";

//while((answer !== "si") || (answer !== "sip")){
while(answer.indexOf("si") === -1){
    answer = prompt("Ya llegamos? ");
}
alert("Hemos llegado chaval");