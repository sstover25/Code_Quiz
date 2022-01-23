// variables for various buttons

var quizOptionsSectionEl = document.querySelector("#quiz-options-selection")
var submitBtnEl = document.querySelector("#submit-btn")
var retryBtnEl = document.querySelector("#retry-btn")
var clearHighScoreBtnEl = document.querySelector("#clear-high-score-btn")

// timer variables
var timerEl = 11


var quizStemSectionEl = document.querySelector("#quiz-stem")
var highScoreListEl = document.querySelector("#high-score-list")
var scoreEl = document.querySelector("#score")

// start page

// quiz page

// starting the timer

function startTimer() {
    timerEl = timerEl - 1;
    if (timerEl < 11) {
        timer.innerHTML = timerEl;
    }

    if (timerEl < 1) {
        window.clearInterval(timerInterval);
        location.href = "./game-over.html";
    }
}

timerInterval = setInterval("startTimer()", 1000);


// function setScore() {


//     // if the 5th question is answered
//     scoreEl = parseInt(timerEl) % 1000;
//     localStorage.setItem("initialScore", JSON.stringify(scoreEl));
// }

//startTimer;

// save score to localStorage


// game over page

// high scores page