var introSection = document.getElementById("intro");
var quiz = document.getElementById("quiz");
quiz.style.display = "none";


var startButton = document.getElementById("start");
var score = 0;
var results = document.getElementById("results");
results.innerHTML=score
results.style.display="none"

var startButton = document.getElementById("start");
startButton.addEventListener("click", function(){
    // startTimer();
    introSection.style.display = "none";
    renderNewQuestion(0);
})



// function nextQuestion(){
//     index++;
//     console.log(index);
//     renderNewQuestion()
// }

var questions = [
    {
        title: "What is 1+1",
        answers:[{
            label: "1",
            isCorrect: false,
        },
        {
            label: "2",
            isCorrect: true,
        },
        {
            label: "3",
            isCorrect: false,
        },
        {
            label: "4",
            isCorrect: false,
        }]
    },
    {
        title: "What is the capital of Washington",
        answers:[{
            label: "Olympia",
            isCorrect: true,
        },
        {
            label: "Seattle",
            isCorrect: false,
        },
        {
            label: "Tacoma",
            isCorrect: false,
        },
        {
            label: "Yakima",
            isCorrect: false,
        }]
    },
    {
        title: "What is the meaning of the German word 'Schmetterling'?",
        answers:[{
            label: "Banana",
            isCorrect: false,
        },
        {
            label: "Yellow",
            isCorrect: false,
        },
        {
            label: "Butterfly",
            isCorrect: true,
        },
        {
            label: "House",
            isCorrect: false,
        }]
    }

]



var index =0;
function renderNewQuestion(index){
    if(index===3){
        quiz.style.display="none"
        results.innerHTML="Score " + score
        results.style.display="block"
    }

    
    console.log(index)
    introSection.style.display="none";
    var questionName = document.createElement("h1");
    questionName.innerHTML = questions[index].title;
    var listOfAnswers = document.createElement("ol");
    for (var i=0;i<4;i++){
        // var singleAnswer = document.createElement("li");
        // var singleAnswer = quiz.appendChild(listofAnswers).createElement("button")
        var singleAnswerLi = document.createElement("li");
        var singleAnswer = document.createElement("button")
        singleAnswer.innerHTML = questions[index].answers[i].label
        if(questions[index].answers[i].isCorrect){
            singleAnswer.addEventListener("click",function(){
                score+=10;
                // getElementById(quiz).innerHTML = "";
                // renderNewQuestion(index+1);
                clearQuestion();
            }) 
        } else {
            singleAnswer.addEventListener("click",function(){
                // getElementById(quiz).innerHTML = "";
                // renderNewQuestion(index+1);
                clearQuestion();
            }) 
        }
        singleAnswerLi.appendChild(singleAnswer)
        listOfAnswers.appendChild(singleAnswerLi);
    }
    console.log("score = ",score);
    quiz.appendChild(questionName);
    quiz.appendChild(listOfAnswers);
    quiz.style.display="block";
    console.log("question is number",index)
    
}
function clearQuestion(){
    document.getElementById("quiz").innerHTML="";
    renderNewQuestion(index+1);
}


// function renderNewQuestion(){
//     quizSection.style.display = "block";
//     var quizQuestion = document.getElementById("question");
    
//     quizQuestion.textContent = questions[index].title

//     var choiceA = document.getElementById("choiceA")
//     var choiceB = document.getElementById("choiceB")
//     var choiceC = document.getElementById("choiceC")
//     var choiceD = document.getElementById("choiceD")

//     choiceA.textContent = questions[index].choices[0]
//     choiceB.textContent = questions[index].choices[1]
//     choiceC.textContent = questions[index].choices[2]
//     choiceD.textContent = questions[index].choices[3]

//     choiceA.addEventListener("click", function(){
//         if(choiceA === questions.correctAnswer){
//             console.log(questions.correctAnswer)
//             window.alert("YOU ANSWERED CORRECT")
//         } else {
//             window.alert("YOU ANSWERED INCORRECT")
//         };
//         nextQuestion()
//     })
//     choiceB.addEventListener("click", function(){
//         if(choiceB === questions.correctAnswer){
//             console.log(questions.correctAnswer)
//             window.alert("YOU ANSWERED CORRECT")
//         } else {
//             window.alert("YOU ANSWERED INCORRECT")
//         };
//         nextQuestion()})
//     choiceC.addEventListener("click", function(){
//         nextQuestion()})
//     choiceD.addEventListener("click", function(){
//         nextQuestion()})
    



