const refs ={
    startButton: document.querySelector('[data-start]'),
    closeButton: document.querySelector('[data-stop]'),
    body:document.querySelector('body')
}
let idInterval = null
refs.startButton.addEventListener('click', startChangingColor)
refs.closeButton.addEventListener('click', stopChangingColor)

console.log(refs.body);

function startChangingColor() {
    refs.body.style.backgroundColor = getRandomHexColor()
    idInterval = setInterval(()=>{
        refs.body.style.backgroundColor = getRandomHexColor()
    },1000)
    refs.startButton.disabled = true
}
function stopChangingColor(){
    clearInterval(idInterval)
    refs.startButton.disabled = false
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
