var score = 0;
var secondsLeft = 75;
var timer = document.querySelector("#timer")
var startButton = document.querySelector("#startButton");
var startDiv = document.querySelector("#firstDiv");
var QnADiv = document.querySelector("#secondDiv");
var allDoneDiv = document.querySelector("#thirdDiv");
var highScoresDiv = document.querySelector("#fourthDiv");
startDiv.style.visibility = "visible";
timer.style.visibility = "hidden";
QnADiv.style.visibility = "hidden";
allDoneDiv.style.visibility = "hidden";
highScoresDiv.style.visibility = "hidden";

// startButton.addEventListener("click", startTimer);

// function startTimer() {
    // timer.style.visibility = "visible";
    
    // }
    // 1. user clicks start quiz button
startButton.addEventListener("click", function startQuiz() {
    // 2. timer appears
    timer.style.visibility = "visible";
    startDiv.style.visibility = "hidden";
    QnADiv.style.visibility = "visible";
    
    });
// 3. timer starts
setInterval(function() {
    secondsLeft--;
    if (secondsLeft === 0) {
        QnADiv.style.visibility = "hidden";
        allDoneDiv.style.visibility = "visible";
        timer.style.visibility = "hidden";
    } else {
        timer.textContent = "time:" + secondsLeft;
    }
  }, 1000)
// 4. 1st div display none
// 5. 2nd div display visible

// 1. user clicks answer
    // if correct, 
        // "correct" appears on screen
        // add one to score 
    // if not correct 
        // "incorrect" appears on screen
        // time decreases
// 2. new question and answers populate 
// 3. repeat for each question
    //  once last question is answered timer stops
// 4. 2nd div display none
// 5. 3rd div display visible 

// 1. display score 
// 2. when submitt button clicked, 
    // add user input to highscores list 
    // save to local storage 
    // 3rd div display none
    // 4th div display visible
    // view highscore button display none

// 1. display high score list 
// 2. if go back is clicked
    // 4th div display none
    // 1st div display visible
// 3. if clear high scores is clicked
    // list is cleared and removed from local storage

// if timer runs out, brings to div 3




// 1st div display none, second div display visible
// possible timer function
// function changeValue() {
//     document.getElementById("demo").innerHTML = ++value;
//   }
  
//   var timerInterval = null;
//   function start() {
//     stop(); // stoping the previous counting (if any)
//     value = 0;
//     timerInterval = setInterval(changeValue, 1000);  
//   }
//   var stop = function() {
//     clearInterval(timerInterval);
//   }
//   <p>A script on this page starts this clock:</p>
  
//   <p id="demo">0</p>
  
//   <button onclick="start()">Start time</button>
//   <button onclick="stop()">Stop time</button>