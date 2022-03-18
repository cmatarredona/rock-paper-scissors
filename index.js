let datos=Array();
    datos[0]="Rock";
    datos[1]="Paper";
    datos[2]="Scissors";
function computerPlay(){
    return datos[Math.floor(Math.random()*3)];
}
function checkWinner(playerSelection,computerSelection){
    if(playerSelection===computerSelection)return "draw";
    if(playerSelection=="Rock"){
        if(computerSelection=="Paper") return "lose";
        else return "win";
    }
    if(playerSelection=="Paper"){
        if(computerSelection=="Scissors") return "lose";
        else return "win";
    }
    if(playerSelection=="Scissors"){
        if(computerSelection=="Rock") return "lose";
        else return "win";
    }
}
function displayWinner(result){
    switch (result) {
        case "win":
            userWins++;
            break;
        case "lose":
            cpuWins++;
            break;
        default:
            break;
    }
    document.querySelector("#resUser").textContent=userWins;
    document.querySelector("#resCPU").textContent=cpuWins;
    document.querySelector("#infoResults").textContent=`Computer choose ${computerSelection}. You ${result}`;
}
var userWins=0;
var cpuWins=0;
var computerSelection;
var playerSelection;
var totalWinner;
var options=document.querySelectorAll(".election");
options.forEach(option=>{
    option.addEventListener(
        "click",
        ()=>{
            if(!totalWinner){
                computerSelection=computerPlay();
                playerSelection=option.alt;
                const winner=checkWinner(playerSelection,computerSelection);
                displayWinner(winner);
                if(userWins==5){
                    totalWinner="Usuario";
                    alert("Ganas");
                }
                else if(cpuWins==5){
                    totalWinner="CPU";
                    alert("Pierdes");
                }
            }
        }
    )
    
})