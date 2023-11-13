var cmd = "";
var timer = 60;
var score = 0;
var hitVal = Number(0);

function generateBubble(){
    cmd = "";
    for(var i=1;i<=60;i++){
        var num = Math.floor(Math.random()*10);
        cmd += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#bottom").innerHTML = cmd;
}

function generateTarget(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#newTarget").textContent = hitVal;
}

function setTimer(){
    var time = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(time);
            var score =Number(document.querySelector("#score").textContent);
            document.querySelector("#bottom").innerHTML = `<h2>Time Up</h2> <br> <label> Your final Score: ${score} </label>`;
        }
    }, 1000);
}

function increaseScore(){
    score = score+10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#bottom").addEventListener("click",function(details){
    var clickedVal = Number(details.target.textContent);
    if(clickedVal == hitVal){
        increaseScore();
        generateTarget();
        generateBubble();
    }
});

function showGame(){
    document.getElementById("game").style.display = "block";
    document.getElementById("start").style.display = "none";
}

generateBubble();
generateTarget();
setTimer();