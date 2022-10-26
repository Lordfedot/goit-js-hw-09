import Notiflix from "notiflix";

const refs = {
  submitForm: document.querySelector('.form'),
}
refs.submitForm.addEventListener('submit', onFormsubmit)

let delay = 0
let step = 0
let amount = 0
let position = 1

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      }
      else{
        reject({ position, delay })
      }
    },delay) 
  });
}

function onFormsubmit(e) {
  e.preventDefault()
  delay = Number(e.currentTarget.elements[0].value)
  step = Number(e.currentTarget.elements[1].value)
  amount = Number(e.currentTarget.elements[2].value)
  position = 1

  makePromise(position, delay)
  makeInterval()

}

function makePromise(position, delay) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
}


function makeInterval() {
  const intervalId = setInterval(()=>{
    position += 1
    if (position > amount) {
      clearInterval(intervalId)
      return
    }
    delay = delay + step
    makePromise(position, delay)
  },step)
  return intervalId
}