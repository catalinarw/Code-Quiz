// create a variable for score
var score = 0;
// create a variable for time
var secondsLeft = 10;

var currentIndex = 0;
// create a variable for the quiz box div
var quizBox = document.querySelector("#quizBox");
// create a variable for div title
var heading = document.querySelector("#heading");

var intro = document.querySelector("#intro");
// create a variable for timer div
var timerText = document.querySelector("#timerText");
// create a div for the start button
var startButton = document.querySelector("#startButton");
// create a var for view highscores button
var HSButton = document.querySelector("#HSButton");
// convert the questions object into an array and create a variable with that value
var questionsArray = Object.values(questionsObj);
var questionOne = document.createElement("BUTTON");

var questionTwo = document.createElement("BUTTON");
var questionThree = document.createElement("BUTTON");
var questionFour = document.createElement("BUTTON");
console.log(questionsArray);

// Timer function
function countDown() {

    setInterval(function() {
        secondsLeft--;
        if (secondsLeft === 0) {
        heading.textContent = ("Game Over! Your Score is" + score)
        questionOne.style.visibility = "hidden";
        questionTwo.style.visibility = "hidden";
        questionThree.style.visibility = "hidden";
        questionFour.style.visibility = "hidden";
      
            timerText.style.visibility = "hidden";
        } else {
            timerText.textContent = ("Time:" + secondsLeft);
        };
       
    }, 1000);
};

//start button functionality



startButton.addEventListener("click", function () {
    
    quizBox.append(questionOne);
    quizBox.append(questionTwo);
    quizBox.append(questionThree);
    quizBox.append(questionFour);
    changeQuestions();
    startButton.style.visibility = "hidden"
    intro.style.visibility = "hidden";
    countDown();
}); //adds event listener to start button



var currentIndex = 0;
function changeQuestions() {
    event.stopPropagation();
  // increment currentIndex so we know which one we're on
  currentIndex++;
  //  if reached the end of the array, 
  if (currentIndex > questionsArray.length) {
    heading.textContent = ("Game Over! Your Score is" + score)
    questionOne.style.visibility = "hidden";
    questionTwo.style.visibility = "hidden";
    questionThree.style.visibility = "hidden";
    questionFour.style.visibility = "hidden";
    timerText.style.visibility = "hidden";

      clearInterval();
    }
    // change the question information
    // in the array using the currentIndex variable
    heading.textContent = questionsArray[currentIndex]["title"];
    questionOne.textContent = questionsArray[currentIndex]["choices"][0];
    questionTwo.textContent = questionsArray[currentIndex]["choices"][1];
    questionThree.textContent = questionsArray[currentIndex]["choices"][2];
    questionFour.textContent = questionsArray[currentIndex]["choices"][3];

    
};

questionOne.addEventListener("click", function() {
  changeQuestions();
  score = (score + 2);  
});  //when each button is clicked, change question function is run
questionTwo.addEventListener("click", function() {
    changeQuestions();
secondsLeft = 5;
});
questionThree.addEventListener("click", function() {
    changeQuestions();
    secondsLeft = 2;
});
questionFour.addEventListener("click", function() {
    changeQuestions();
    secondsLeft = 0;
});




// var li = document.createElement("li");
// var lastUser = localStorage.getItem("player");
// var initials = document.querySelector("#initials").value; //value of initials box

// function saveScore() {
//     window.localStorage.setItem(lastUser, initials);
    
// }

// submitScore.addEventListener("click", saveScore);

  


   

//     for (var i=0; i < questionsArray.length; i++) {
//     heading.textContent = questionsArray[i]["title"];

//     questionOne.textContent = questionsArray[i]["choices"][0];
//     questionTwo.textContent = questionsArray[i]["choices"][1];
//     questionThree.textContent = questionsArray[i]["choices"][2];
//     questionFour.textContent = questionsArray[i]["choices"][3];

//     }

//     // heading.textContent = ("Game Over! Your Score is" + score)

// };
// // // add click event to start button
// startButton.addEventListener("click", function() {
//     //begin countdown

//     startButton.style.visibility = "hidden"
//     countDown();
    
//     displayQuestions();
      
// });
// questionOne.addEventListener("click", displayQuestions);
// questionTwo.addEventListener("click", displayQuestions);
// questionThree.addEventListener("click", displayQuesti
    //         // replace body with answer buttons
     

// }


// create a function to cycle through questions

    // if the correct answer is selected 
    // score++

    // else time -2

// if time == 0 
    // score = final score
    // display final score 
    // display initials text box 

// add a click event to the save score button 
    // store the textbox value  + final score to local storage

// add click event to the view highscores button
    // display higscores header
    // display local storage list

