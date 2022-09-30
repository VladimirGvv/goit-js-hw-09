import Notiflix from 'notiflix';

const form = document.querySelectorAll('.form');
let inputDelay = document.querySelector('input[name=delay]');
let inputDelayStep = document.querySelector('input[name=step]');
let inputAmount = document.querySelector('input[name=amount]');
console.log('hi')

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let firstDelay = Number
 
  
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
      resolve({position, delay})

    } else {
      reject({position, delay})
  }
    }, delay);  
})
  
}
