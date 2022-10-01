import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    body: document.querySelector('body'),
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    fields: document.querySelectorAll('.field'),
    values: document.querySelector('.value'),
    label: document.querySelectorAll('.label'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
};

refs.body.style.backgroundColor = 'aqua';
refs.startBtn.style.backgroundColor = 'yellow';
refs.timer.style.display = 'flex';
refs.timer.style.marginTop = '15px';
refs.startBtn.disabled = true;

for (const key of refs.fields) {
    key.style.display = 'flex';
    key.style.alignItems = 'center';
    key.style.marginRight = '10px'; 
};

for (const key of refs.label) {
    key.style.marginLeft = '5px';  
};

let selectedDate = null;
let interval = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
        if (selectedDates[0] <= new Date()){
            refs.startBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
            return clearInterval(interval);   
        };
        if (selectedDates[0] > new Date()){
            refs.startBtn.disabled = false;
        };
    
        selectedDate = selectedDates[0];
    },
};

refs.startBtn.addEventListener('click', startTimer);

function startTimer() {
    interval = setInterval(timer, 1000);
    refs.startBtn.disabled = true;
};

function timer () {
    let deltaTime = selectedDate - new Date();
            const time = convertMs(deltaTime);

            if (deltaTime <= 0) {
                clearInterval(interval);
                return;
            }
            updateClockface(time);
};


function updateClockface({ days, hours, minutes, seconds }) {
    refs.dataSeconds.textContent = `${seconds}`;
    refs.dataMinutes.textContent = `${minutes}`;
    refs.dataHours.textContent = `${hours}`;
    refs.dataDays.textContent = `${days}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

flatpickr("#datetime-picker", options);