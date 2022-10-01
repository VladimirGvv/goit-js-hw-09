const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyStyle = document.querySelector('body');

let colorId = null;
let cheker = true;

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
    if (cheker) {
        cheker = false;
        colorId = setInterval(() => {
            bodyStyle.style.backgroundColor = getRandomHexColor()
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }     
});


stopBtn.addEventListener('click', () => {
    cheker = true;
    clearInterval(colorId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}