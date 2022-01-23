// variables for various buttons

var quizOptionsEl = document.querySelector("#quiz-options-selection")
var submitBtnEl = document.querySelector("#submit-btn")
var retryBtnEl = document.querySelector("#retry-btn")
var clearHighScoreBtnEl = document.querySelector("#clear-high-score-btn")


var timerEl = 11


var quizStemEl = document.querySelector("#quiz-stem")
var highScoreListEl = document.querySelector("#high-score-list")
var scoreEl = document.querySelector("#score")

// start page

// quiz page

// starting the timer

function startTimer() {
    timerEl = timerEl - 1;
    //if ()
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

// }
var quizQuestions = [ {
    "question": "What command is used to create and move into a new branch?",
    "options": ["checkout", "checkout -b", "add .", "add -A"],
    "key": ["checkout -b"]
},
{
    "question": "Which of the following special characters is often called a 'terminator'?",
    "options": [";", ":", "*", "#"],
    "key": [";"]
},
{
    "question": "What does the phrase 'declare a function' mean?",
    "options": ["Deleting the function", "Appending the function", "Creating the function", "Displaying the function"],
    "key": ["Creating the function"]
},
{
    "question": "What do you call the code written between two curly braces?",
    "options": ["Code block", "Code bleak", "Code bland", "Code bloat"],
    "key": ["Code block"]
},
{
    "question": "What code can we use to display something in the console?",
    "options": ["console.call", "console.play", "console.cry", "console.log"],
    "key": ["console.log"]
},
{
    "question": "What special character should be used to see if the following values are equal in value and type: '2' __ 2?",
    "options": ["!=", "==", "===", "="],
    "key": ["==="]
}
]

var maxQuestions = 3;
var randomizeQuestion = Math.floor(Math.random() * quizQuestions.length);

quizStemEl.innerHTML = quizQuestions[randomizeQuestion].question;

for (var i = 0; i < maxQuestions; i++) {
    quizOptionsEl[i].innerHTML = quizQuestions[randomizeQuestion].options[i];
}


// save score to localStorage


// game over page

// high scores page