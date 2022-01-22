// variables for various buttons

var quizOptionsSectionEl = document.querySelector("#quiz-options-selection")
var submitBtnEl = document.querySelector("#submit-btn")
var retryBtnEl = document.querySelector("#retry-btn")
var clearHighScoreBtnEl = document.querySelector("#clear-high-score-btn")

var timerEl = document.querySelector("#timer")
var quizStemSectionEl = document.querySelector("#quiz-stem")
var highScoreListEl = document.querySelector("#high-score-list")
var scoreEl = document.querySelector("#score")

// start page

// quiz page

// starting the timer
setInterval(startTimer, 1000);
timerEl = 5000;
function startTimer() {
    if (timerEl > 0) {
      timerEl = timerEl - 1000;
      console.log(timerEl);
    } else if (timerEl <=0) {
        location.href = "./game-over.html"
    }
    
}

startTimer;

// save score to localStorage


// game over page

// high scores page