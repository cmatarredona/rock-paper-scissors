let datos=Array();
    datos[0]="Rock";
    datos[1]="Paper";
    datos[2]="Scissors";
function computerPlay(){
    return datos[Math.floor(Math.random()*3)];
}
function checkWinner(playerSelection,computerSelection){
    if(playerSelection===computerSelection)return `Empate con ${playerSelection}`;
    if(playerSelection=="Rock"){
        if(computerSelection=="Paper") return `Pierdes, ${computerSelection}>${playerSelection}`;
        else return `Ganas, ${computerSelection}<${playerSelection}`;
    }
    if(playerSelection=="Paper"){
        if(computerSelection=="Scissors") return `Pierdes, ${computerSelection}>${playerSelection}`;
        else return `Ganas, ${computerSelection}<${playerSelection}`;
    }
    if(playerSelection=="Scissors"){
        if(computerSelection=="Rock") return `Pierdes, ${computerSelection}>${playerSelection}`;
        else return `Ganas, ${computerSelection}<${playerSelection}`;
    }
}
for (let i = 0; i < 5; i++) {
    const computerSelection=computerPlay();
    const playerSelection=datos[prompt("0=(Rock) | 1=(Paper) | 2=(Scissors)")];
    console.log(checkWinner(playerSelection,computerSelection));
}