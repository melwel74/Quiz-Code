var questions = [
    {
        question: 'do you like cheese',
        answer: 'yes',
        choices: ['yes', 'no', 'maybe']
    },
    {
        question: 'is it raining',
        answer: 'no',
        choices: ['no', 'sometimes', 'sure']
    }
]
var questionIndex=0

var score = 1
var timeleft = 75;
var buttonEl = document.querySelector('.btn')

buttonEl.addEventListener("click", function () {
    

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
          
        }
    }, 1000);

    nextQuestion()

});
function nextQuestion (){
    document.querySelector('.choice1').textContent = questions[questionIndex].choices[0]
    document.querySelector('.choice2').textContent = questions[questionIndex].choices[1]
    document.querySelector('.choice3').textContent = questions[questionIndex].choices[2]
    document.querySelector('.question').textContent = questions[questionIndex].question
}
function  checkAnswer() {
    var userChoice = this.innerHTML
    console.log(userChoice)
    if (userChoice === questions[questionIndex].answer) {
        //add to score and display another question
        score++

    } else {
        score--
        timeleft-=10
    }
    questionIndex ++
    document.querySelector('#count').textContent = score
    nextQuestion()
}
document.getElementById('choice1').addEventListener('click',checkAnswer )
document.getElementById('choice2').addEventListener('click',checkAnswer )
document.getElementById('choice3').addEventListener('click',checkAnswer )





var count = 0;



var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');






