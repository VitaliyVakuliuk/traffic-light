let time = 5;
let restTime = time;
let digit = document.getElementById('digit');

function timeGreen() {
    restTime--;
    digit.innerHTML = restTime;
    if (restTime <= 0) {
        timeRed();
        restTime = 6;
    }
}
function timeHide() {
    digit.classList.toggle('red');
    digit.classList.toggle('hide');
}
setInterval(timeGreen, 1000);
timeGreen();

function timeRed() {
    digit.classList.toggle('green');
    digit.classList.toggle('hide');
    setTimeout(timeHide, 2000);
}
function trafficLights() {
    green();
    setTimeout(yellow, 5000);
    setTimeout(red, 6000);
}
trafficLights()

function yellow() {
    document.getElementById('yellow').classList.toggle('yellow');
}
function red() {
    document.getElementById('red').classList.toggle('red');
    trafficLights();
    yellow();
}
function green() {
    document.getElementById('green').classList.toggle('green');
}
