const images=document.querySelectorAll('.no-click');
const stone=document.querySelector('#stone');
const paper=document.querySelector('#paper');
const text=document.querySelector('.text');
const scissor=document.querySelector('#scissor');
const p=document.querySelector('.p-1');
const p2=document.querySelector('.p-2');
const btn=document.querySelector('.btn');


let user;
let userScore=0;
let computerScore=0;
let resetButton;

function handleClickStone(e) {
    e.preventDefault();
    compute(1);
}

function handleClickPaper(e) {
    e.preventDefault();
    compute(2);
}

function handleClickScissor(e) {
    e.preventDefault();
    compute(3);
}


stone.addEventListener('click', handleClickStone);
paper.addEventListener('click', handleClickPaper);
scissor.addEventListener('click', handleClickScissor);

p2.textContent=`computer:${computerScore}`;
p.textContent=`User:${userScore}`;

function compute(user){
    let computer = Math.floor(Math.random() * 3+ 1);
    console.log("comp is: "+computer);
    if(user==computer){
        text.textContent="Draw";
        text.style.backgroundColor = "whitesmoke";
    }
    else if(user<computer){
        computerScore++;
       text.textContent="Computer Won This Chance";
       text.style.backgroundColor = "lightcoral";
       p2.textContent=`computer:${computerScore}`
    }
    else{
    userScore++;
    text.textContent="User Won This Chance";
    text.style.backgroundColor = "lightgreen";
    p.textContent= `user:${userScore}`;
    }
    if(userScore==5 || computerScore==5){
        gameOver();
    }
}


function gameOver(){
    stone.removeEventListener('click', handleClickStone);
    paper.removeEventListener('click', handleClickPaper);
    scissor.removeEventListener('click', handleClickScissor);
    
    if(userScore==5){
        text.textContent="Hurrah! You Won The Game";
    }else if(computerScore==5){
        text.textContent="Oh No! You lost!!...";
    }
   
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    btn.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


function resetGame(){
    userScore=0;
    computerScore=0;
    text.textContent='';
    text.style.backgroundColor="white";
    btn.removeChild(resetButton);
    p.textContent= `user:${userScore}`;
    p2.textContent= `Computer:${computerScore}`;
    stone.addEventListener('click', handleClickStone);
    paper.addEventListener('click', handleClickPaper);
    scissor.addEventListener('click', handleClickScissor);    
}


