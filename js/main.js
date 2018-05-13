// Quiz Paper Prototype
    // Html
// Text Tags for the Questions 
// Ways to take answers
    //^ input = text
    //^ buttons
    //^ input = radios
// keep score of right and wrong
    //^ h1 for wrong
    //^ h1 for right
//Feedback on choice selection - on submit button
    //^ submit button for every question

    // Javascript
//An array of objects that have pairs of questions and answers
//function that takes user input of the exact question and answer 

let quizArr = [
    {
        question: "Most hated HR?",
        answer: "Toby Flenderson"
    },
    {
        question: "What does Micheal give Oscar on Micheal's last day?",
        answer: "scarecrow"
    },
    {
        question: "Who goes by the name Nard Dog?",
        answer: "Andy Bernard"
    },
    {
        question:"What does the company Athlead name switch to?",
        answer: "Athleap"
    },
    {
        question:"Where does Bob Vance work?",
        answer: "Vance Refrigeration"
    },
    {
        question:"What is Gabe's Halloween costume?",
        answer: "Lady Gaga"
    },
    {
        question:"Who was the Assistant to the Assistant Regional Manager?",
        answer: "Dwight Schrute"
    },
    {
        question:"Who was the Garden Party for at Schrute Farms?",
        answer: "Andy Bernard"
    },
    {
        question:"Who was in Jury Duty for the case Scranton Strangler?",
        answer: "Toby Flenderson"
    }
];

// This for loop puts the questions from the array into their respective h1s on the html
for(let i = 0; i < quizArr.length; i++){
    // Target the corresponding h1
    let thisHeader = document.getElementById("q"+i);
    // Target the corresponding object question
    let thisQuestion = quizArr[i].question
    // put the question in the h1
    thisHeader.textContent = thisQuestion
}

function checkAnswers(){
    //Get the #score div and save it into a var
    let score = document.getElementById("score");
    score.innerHTML = "";
    //Check Score - created 2 variables to keep track of how many the user got right and wrong
    let correct = 0;
    let incorrect = 0;
    //Take user input and check it vs their corresponding questions
    let userGuess = document.getElementsByClassName("userGuess");
    console.log(userGuess)

    for(let i = 0; i < quizArr.length; i++){
        if(userGuess[i].value == quizArr[i].answer ){
            document.getElementById('q'+i).style = "color: green;";
            correct++;
        }else{
            document.getElementById('q'+i).style = "color: red;";
            incorrect++;
        }
    }
    console.log("correct: " + correct);
    console.log("incorrect: " + incorrect);

    //Create elements for the score
    let correctBox = document.createElement("h1");
    let incorrectBox = document.createElement("h1");

    //put the text into the new elements
    correctBox.innerHTML = "Correct: " + correct;
    incorrectBox.innerHTML = "Incorrect: " +incorrect;
    //send the two elements to the #score div
    score.appendChild(correctBox);
    score.appendChild(incorrectBox);

    //change display of #score div to block
    score.style = "display:block;"
}