import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    startButton: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true
        setInterval(()=>{
            const currentTime = Date.now()
            const deltaTime = startTime - currentTime
            const timeComponents = convertMs(deltaTime)
            updateClockFace(timeComponents)
        },1000)
    }

}

refs.startButton.disabled = true
refs.startButton.addEventListener('click',timer.start)
let startTime = 0

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date() ) {
        Notiflix.Report.warning('WARNING', "Please choose a date in the future", 'Close');
        return
      }
      refs.startButton.disabled = false
      return startTime = selectedDates[0]
    },
  };
flatpickr('#datetime-picker',options)



function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`
    refs.hours.textContent = `${hours}`
    refs.minutes.textContent = `${minutes}`
    refs.seconds.textContent = `${seconds}`
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }