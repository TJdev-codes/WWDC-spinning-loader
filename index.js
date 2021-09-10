// Challenge instructions

// Wire up the loader so that it spins

// Stretch goals:

// 1. Add a timer
// 2. Change the loader style

let surpriseBtn = document.getElementById("btn")
let animation = document.getElementById("loader")
let timeleft = 5;

function onStart() {
    animation.classList.remove("loader-active")
}
onStart()

function startCountdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
      counter--;
    if (counter < 0 ) {
        clearInterval(interval);
      }
    }, 1000);
}
startCountdown(5)

surpriseBtn.addEventListener("click", function() {
    animation.classList.add("loader-active")
    let surpriseTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(surpriseTimer);
          document.getElementById("countdown").innerHTML = "Surprise!";
          animation.classList.remove("loader-active")
          setTimeout(function(){alert("You, YES YOU, are beautiful!")}, 1000)
        } else {
          document.getElementById("countdown").innerHTML = timeleft + " seconds until your surprise!";
        }
        timeleft -= 1;
      }, 1000);
} )







