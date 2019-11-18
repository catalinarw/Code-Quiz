var timer = document.querySelector("#timer") // timer Div
var startButton = document.querySelector("#startButton"); //start quiz button
var startDiv = document.querySelector("#firstDiv"); // Start Quiz Div
var QnADiv = document.querySelector("#secondDiv"); //Question and Answer Div
var allDoneDiv = document.querySelector("#thirdDiv"); //all done/enter initials DIV
var highScoresDiv = document.querySelector("#fourthDiv"); //High Scores Div
var options = document.querySelectorAll(".btn btn-primary btn-sm options"); //all answer buttons
var questionText = document.querySelector("#questionText"); //text area where questions will populate
var option1 = document.querySelector("#button1"); // individual question buttons
var option2 = document.querySelector("#button2");
var option3 = document.querySelector("#button3");
var option4 = document.querySelector("#button4");
var secondsLeft = 30; //variable used to track seconds in timer function
var score = 0;
var highScoresList = document.querySelector("#highScoresList")

// resets the div visability to a default starting point 
function resetGame() {
    startDiv.style.visibility = "visible";
    timer.style.visibility = "hidden";
    QnADiv.style.visibility = "hidden";
    allDoneDiv.style.visibility = "hidden";
    highScoresDiv.style.visibility = "hidden";
};``

function clearInterval() {
    secondsLeft = 0;
    
}
resetGame();

//Timer function
setInterval(function() {
    secondsLeft--;
    if (secondsLeft === 0) {
        QnADiv.style.visibility = "hidden";
        allDoneDiv.style.visibility = "visible";
        timer.style.visibility = "hidden";
    } else {
        timer.textContent = "time:" + secondsLeft;
    }
}, 1000);

//start button functionality
function startQuiz() {
    startDiv.style.visibility = "hidden";// Question and Answer Div appears 
    QnADiv.style.visibility = "visible"; // Questions and Answers Div Appear
    timer.style.visibility = "visible"; //Timer becomes visible 
};

startButton.addEventListener("click", startQuiz); //adds event listener to start button

var questionsA = Object.values(questions);
console.log(questionsA); //converts the questions object into an array
var currentIndex = 0;
function changeQuestions() {
    event.stopPropagation();
  // increment currentIndex so we know which one we're on
  currentIndex++;
  //  if reached the end of the array, 
  if (currentIndex >= questionsA.length) {
      
      QnADiv.style.visibility = "hidden"; //Q&A Div will be hidden
      allDoneDiv.style.visibility = "visible"; // All done/initials div will appear
      clearInterval();
    }
    // change the question information
    // in the array using the currentIndex variable
    questionText.textContent = questionsA[currentIndex]["title"];
    option1.textContent = questionsA[currentIndex]["choices"][0];
    option2.textContent = questionsA[currentIndex]["choices"][1];
    option3.textContent = questionsA[currentIndex]["choices"][2];
    option4.textContent = questionsA[currentIndex]["choices"][3];

    scoreKeeper();
};

option1.addEventListener("click", changeQuestions); //when each button is clicked, change question function is run
option2.addEventListener("click", changeQuestions);
option3.addEventListener("click", changeQuestions);
option4.addEventListener("click", changeQuestions);

// function scoreKeeper() {
    
// }

var li = document.createElement("li");
var lastUser = localStorage.getItem("player");
var initials = document.querySelector("#initials").value; //value of initials box

function saveScore() {
    window.localStorage.setItem('player', initials);
    allDoneDiv.style.visibility = "hidden";
    highScoresDiv.style.visibility = "visible";
}

submitScore.addEventListener("click", saveScore);

  
