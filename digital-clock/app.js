const myTime = document.querySelector("#time");
const runClock = function (){
    const date = new Date();
    let currentTime = date.toLocaleTimeString();
    // console.log(currentTime);
    myTime.innerHTML = currentTime;
}
// runClock();

setInterval(runClock,1000);
