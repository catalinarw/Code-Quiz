var score = 0;
var secondsLeft = 75;
var timer = document.querySelector("#timer")
var startButton = document.querySelector("#startButton");
var startDiv = document.querySelector("#firstDiv");
var QnADiv = document.querySelector("#secondDiv");
var allDoneDiv = document.querySelector("#thirdDiv");
var highScoresDiv = document.querySelector("#fourthDiv");
var options = document.querySelectorAll(".btn btn-primary btn-sm options");
var questionText = document.querySelector("#questionText");
var option1 = document.querySelector("#button1");
var option2 = document.querySelector("#button2");
var option3 = document.querySelector("#button3");
var option4 = document.querySelector("#button4");
var finalScore = document.querySelector("#finalScore");
var submitScore = document.querySelector("#submitScore");
var initials = document.querySelector("#initials");
var highScoreButton = document.querySelector("#highScoreButton");
var highScoresList = document.querySelector("#highScoresList")
// changes questions object into an array
var questionsA = Object.values(questions);

var currentIndex = 0;

// highScoreButton.style.visibility = "visible";
startDiv.style.visibility = "visible";
timer.style.visibility = "hidden";
QnADiv.style.visibility = "hidden";
allDoneDiv.style.visibility = "hidden";
highScoresDiv.style.visibility = "hidden";


    // user clicks start quiz button
startButton.addEventListener("click", function startQuiz() {
    //  timer appears
    timer.style.visibility = "visible";
// Start quiz Div is hidden
    startDiv.style.visibility = "hidden";
    // Question and Answer Div appears 
    QnADiv.style.visibility = "visible";  
    });

// Timer Function
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




option1.addEventListener("click", function() {
  event.stopPropagation();
  // increment currentIndex so we know which one we're on
  currentIndex++;

  score ++;
  //  if reached the end of the array, 
  if (currentIndex >= questionsA.length) {
      //   hide question div
      QnADiv.style.visibility = "hidden";
      // show all done div
      allDoneDiv.style.visibility = "visible";
      
      
      
      
    }
    
    // change the question information
    // in the array using the currentIndex variable
    questionText.textContent = questionsA[currentIndex]["title"];
    
    option1.textContent = questionsA[currentIndex]["choices"][0];
    option2.textContent = questionsA[currentIndex]["choices"][1];
    option3.textContent = questionsA[currentIndex]["choices"][2];
    option4.textContent = questionsA[currentIndex]["choices"][3];
    
});

clearInterval(secondsLeft);

var endScore= score + 10 


finalScore.textContent = ("Your Final Score Is:" + endScore);

var initials = document.querySelector("#initials").value;

submitScore.addEventListener("submit", function() {
    // save to local storage 
    localStorage.setItem("player", initials.value, endScore);
    console.log(player);
    allDoneDiv.style.visibility = "hidden";
    highScoresDiv.style.visibility = "visible";
    highScoreButton.style.visibility = "hidden";

    var lastUser = localStorage.getItem("player");
    newScore.textContent = lastUser;
    var newScore = document.createElement("li");
    highScoresList.appendChild(newScore);
});


