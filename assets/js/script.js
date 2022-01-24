// variables for various buttons
var quizOptionsEl = document.querySelector("#quiz-options-selection")
var opt1El = document.getElementById("opt1")
var opt2El = document.getElementById("opt2")
var opt3El = document.getElementById("opt3")
var opt4El = document.getElementById("opt4")
var timerEl = 20

var quizStemEl = document.querySelector("#quiz-stem")
var highScoreListEl = document.querySelector("#high-score-list")
var scoreEl = document.querySelector("#score")

// starting the timer

function startTimer() {
    timerEl = timerEl - 1;
    //if ()
    if (timerEl < 20) {
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
    question: "What command is used to create and move into a new branch?",
    option1: "checkout",
    option2: "checkout -b",
    option3: "add .",
    option4: "add -A",
    key: "checkout -b"
},
{
    question: "Which of the following special characters is often called a 'terminator'?",
    option1: ";",
    option2: ":",
    option3: "*",
    option4: "#",
    key: ";"
},
{
    question: "What does the phrase 'declare a function' mean?",
    option1: "Deleting the function",
    option2: "Appending the function",
    option3: "Creating the function",
    option4: "Displaying the function",
    key: "Creating the function"
},
{
    question: "What do you call the code written between two curly braces?",
    option1: "Code block",
    option2: "Code bleak",
    option3: "Code bland",
    option4: "Code bloat",
    key: "Code block"
},
{
    question: "What code can we use to display something in the console?",
    option1: "console.call",
    option2: "console.play",
    option3: "console.cry",
    option4: "console.log",
    key: "console.log"
},
{
    question: "What special character(s) should be used to see if the following values are equal in value and type: '2' __ 2?",
    option1: "!=",
    option2: "==",
    option3: "===",
    option4: "=",
    key: "==="
}
]

var currentQuestion = 0
var maxQuestions = 3;

function loadQuestion() {
    var randomizeQuestion = Math.floor(Math.random() * quizQuestions.length);
    var currentQuestion = randomizeQuestion;
    quizStemEl.innerHTML = quizQuestions[currentQuestion].question;
    opt1El.textContent = quizQuestions[currentQuestion].option1;
    opt2El.textContent = quizQuestions[currentQuestion].option2;
    opt3El.textContent = quizQuestions[currentQuestion].option3;
    opt4El.textContent = quizQuestions[currentQuestion].option4;


    answeredQuestion();
}

function checkQuestion1() {
    var correctAnswer = quizQuestions[currentQuestion].key;
    if (correctAnswer = opt1El.textContent) {
        currentQuestion++;
        loadQuestion();
    } else {
        timerEl = timerEl - 2;
        currentQuestion++;
        loadQuestion();
    }
}

function checkQuestion2() {
    var correctAnswer = quizQuestions[currentQuestion].key;
    if (correctAnswer = opt2El.textContent) {
        currentQuestion++;
        loadQuestion();
    } else {
        timerEl = timerEl - 2;
        currentQuestion++;
        loadQuestion();
    }
}

function checkQuestion3() {
    var correctAnswer = quizQuestions[currentQuestion].key;
    if (correctAnswer = opt3El.textContent) {
        currentQuestion++;
        loadQuestion();
    } else {
        timerEl = timerEl - 2;
        currentQuestion++;
        loadQuestion();
    }
}

function checkQuestion4() {
    var correctAnswer = quizQuestions[currentQuestion].key;
    if (correctAnswer = opt4El.textContent) {
        currentQuestion++;
        loadQuestion();
    } else {
        timerEl = timerEl - 2;
        currentQuestion++;
        loadQuestion();
    }
}

function answeredQuestion() {
    if(currentQuestion == maxQuestions) {
        window.clearInterval(timerInterval);
        location.href = "./game-over.html";
    } else {
        opt1El.addEventListener("click", checkQuestion1);
        opt2El.addEventListener("click", checkQuestion2);
        opt3El.addEventListener("click", checkQuestion3);
        opt4El.addEventListener("click", checkQuestion4);
    }

}


// save score to localStorage

loadQuestion();