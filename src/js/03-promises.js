import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let inputDelay = document.querySelector('input[name=delay]');
let inputDelayStep = document.querySelector('input[name=step]');
let inputAmount = document.querySelector('input[name=amount]');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
    let firstDelay = Number(inputDelay.value);
    const step = Number(inputDelayStep.value);
  const amount = Number(inputAmount.value);
  
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += step;
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
