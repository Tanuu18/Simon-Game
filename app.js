let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns=["yellow","red","blue","green"];

let h2=document.querySelector("h2");

function startHandler() {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
}

document.addEventListener("keypress", startHandler);
document.addEventListener("touchstart", startHandler);

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was<b> ${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
        btn.addEventListener("click",btnPress);
}

function reset(){
     started=false;
     gameseq=[];
     userseq=[];
     level=0;
}
