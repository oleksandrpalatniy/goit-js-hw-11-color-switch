const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
}

const { startBtn, stopBtn, body } = refs;


const startStop = {
    intervalId: null,
    start() {
        startBtn.setAttribute('disabled', '')
        this.intervalId = setInterval(() => 
        bodyStyle(), 1000)
    },
    stop() {
        clearInterval(this.intervalId);
        startBtn.removeAttribute('disabled', '')
     }
}
    
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyStyle = () => {
    body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

startBtn.addEventListener('click', () => {
    startStop.start()
   })

stopBtn.addEventListener('click', () => {
    startStop.stop()
   })


