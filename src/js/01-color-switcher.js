const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyStyle = document.querySelector('body');

let colorId = null;
let cheker = true;

startBtn.disabled = true;

startBtn.addEventListener('click', () => {
    if (cheker) {
        cheker = false;
        colorId = setInterval(() => {
            bodyStyle.style.backgroundColor = getRandomHexColor()
        }, 1000);
    }     
});


stopBtn.addEventListener('click', () => {
    cheker = true;
    clearInterval(colorId);
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}