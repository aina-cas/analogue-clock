
// The Clock function 

const secondsHand =  document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;

    //console.log(now);
    //console.log(seconds);

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';


}

setInterval(getTime, 100);


// Light/Dark Mode 

let button = document.getElementById('button');

button.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        button.innerHTML = "Dark"
    } else {
        button.innerHTML = "light";
    }
}


// Remove glow from clock hands 

document.getElementById("seconds-hand").classList.add("light-theme");
document.getElementById("seconds-hand").classList.remove("light-theme")

document.querySelector("h1").classList.add('light-theme');
document.querySelector("h1").classList.remove("light-theme");

