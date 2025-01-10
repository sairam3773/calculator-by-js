let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("stopwatch");

function padStart(value){
    return String(value).padStart(2, "0")
}

function setTime(){
    const minutes = Math.floor(secondsElapsed/60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    secondsElapsed++;
    setTime()
}

function start(){
    if (interval) stop() // It is uses to unorderd taps on start button
    interval = setInterval(timer, 1000) // It is uses to start the clock
}

function stop(){
    clearInterval(interval) //It pauses the clock
}

function reset(){
    stop() //It stop the clock
    secondsElapsed = 0; // It makes minutes and seconds to 0
    setTime() // We call setTime function cause the user can start the clock again
}