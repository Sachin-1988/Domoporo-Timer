const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")

let interval
let timeleft = 1500;
function updateTimer(){
    let minutes = Math.floor(timeleft/60)
    let seconds = timeleft%60;
    let formattedTime =  `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;

    timerEl.innerHTML=formattedTime;
}


function startTimer(){
    interval = setInterval(()=>{
        timeleft--;
        // console.log("timer");
     updateTimer();
     if(timeleft===0){
        clearInterval(interval);
        alert("Time is up");
        timeleft=1500;
     }
    },1000)
    // console.log("start");
}

function stopTimer(){
    clearInterval(interval);

    // console.log("stop");
}

function resetTimer(){
    clearInterval(interval);
    timeleft=1500;
    updateTimer();
    // console.log("reset");
}


startEl.addEventListener("click",startTimer)
stopEl .addEventListener("click",stopTimer)
resetEl.addEventListener("click",resetTimer)