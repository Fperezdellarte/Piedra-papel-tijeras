let option = ["piedra", "papel", "tijera"]
let play = 1;
let choice = 0;
let victorybot = 0
let victoryuser = 0
let tie = 0
while (play!=0) {
    optionlen=Math.round(Math.random()*2);
    choice=option[optionlen]
    let userchoice = prompt("Elije: 1 = piedra, 2 = papel o 3 = tijera")
    switch (true) {
        case optionlen+1==userchoice:
            alert("¡Empate! Ambos eligimos: " + choice);   
            console.log("¡Empate! Ambos eligimos: " + choice);
            tie++;
            break;
        case choice=="piedra" && userchoice==2:
            alert("¡Ganaste! Yo habia elegido " + choice);
            console.log("¡Ganaste! Yo habia elegido " + choice);
            victoryuser++;
            break;
        case choice=="papel" && userchoice==3:
            alert("¡Ganaste! Yo habia elegido " + choice);
            console.log("¡Ganaste! Yo habia elegido " + choice);
            victoryuser++;
            break;
        case choice=="tijera" && userchoice==1:
            alert("¡Ganaste! Yo habia elegido " + choice);
            console.log("¡Ganaste! Yo habia elegido " + choice);
            victoryuser++;
            break;
        case choice=="tijera" && userchoice==2:
            alert("¡Perdiste! Yo habia elegido " + choice); 
            console.log("¡Perdiste! Yo habia elegido " + choice);
            victorybot++;
            break;
        case choice=="papel" && userchoice==1:
            alert("¡Perdiste! Yo habia elegido " + choice);     
            console.log("¡Perdiste! Yo habia elegido " + choice);
            victorybot++;
            break;
        case choice=="piedra" && userchoice==3:
            alert("¡Perdiste! Yo habia elegido " + choice);
            console.log("¡Perdiste! Yo habia elegido " + choice);
            victorybot++;
            break;
        default:
            alert("Lo que eligio no esta entre las opciones")
            break;
    }

play = prompt("Si quiere terminer el juego digite 0")
}
alert('Usted gano ' + victoryuser + ', yo gane ' + victorybot + ' y empatamos ' + tie)
console.log("Que tenga un buen dia");