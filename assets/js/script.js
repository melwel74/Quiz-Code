var count = 0;

var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
var incrementEl = document.querySelector('#increment');

function setCounterText() {
    countEl.textContent = count;
}

incrementEl.addEventListener('click', function () {
    count++;
    setCounterText();
});

decrementEl.addEventListener('click', function () {
    if (count > 0) {
        count--;
        setCounterText();
    }
});

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');



function countdown() {
    var timeleft = 5;
    var timeInterval = setInterval(function () {
        if (timeleft > 1) {
            timerEl.textContent = timeleft + 'seconds remaining';
            timeleft--;
        } else if (timeleft === 1) {
            timerEl.textContent = timeleft + 'second remaining';
            timeleft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    var wordCount = 0;
    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 300);

}

startBtn.onclick = countdown;