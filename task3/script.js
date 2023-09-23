const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#traf');

function makeGreen() {
trafficLightEl.style.background = ('green');
trafficLightEl.removeEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeYellow);
trafficLightEl1.style.background = 'black';
trafficLightEl2.style.background = 'black';
}

function makeYellow() {
trafficLightEl1.style.background = 'yellow';
trafficLightEl1.removeEventListener('click', makeYellow);
trafficLightEl3.addEventListener('click', makeRed);
trafficLightEl.style.background = 'black';
trafficLightEl2.style.background = 'black';
}

function makeRed() {
trafficLightEl2.style.background = 'red';
trafficLightEl2.removeEventListener('click', makeRed);
trafficLightEl3.addEventListener('click', makeGreen);
trafficLightEl.style.background = 'black';
trafficLightEl1.style.background = 'black';
}
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed);
