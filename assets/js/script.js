var introSection = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var count = 60;
var questionResult = document.getElementById("questionresult")
var interval = null;
var initialsButton= document.getElementById("enterInitials")
var initialsInput = document.getElementById("initials")
var showHighscores= document.getElementById("showHighscores")
var highscores= document.getElementById("highscores");
var listOfHighscores=document.getElementById("listOfHighscores");
var startButton = document.getElementById("start");
var score = 0;
var results = document.getElementById("results");
var goHomeButton = document.getElementById("goHome")
var endGame = false
// results.innerHTML=score

quiz.style.display = "none";
results.style.display="none"

var allHighScores = JSON.parse(localStorage.getItem('highscores'))

var startButton = document.getElementById("start");
var index =0;
endGame = false;
startButton.addEventListener("click", function(){
    quiz.style.display="block";
    results.style.display="none";
    timerEl.style.display="block";
    introSection.style.display = "none";
    index =0;
    score=0;
    count=60;
    endGame=false;
    startTimer();
    renderNewQuestion();
})



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
    },
    {
        title: "What is 4+4",
        answers:[{
            label: "7",
            isCorrect: false,
        },
        {
            label: "2",
            isCorrect: false,
        },
        {
            label: "8",
            isCorrect: true,
        },
        {
            label: "1",
            isCorrect: false,
        }]
    },
    {
        title: "What is the first book in the Bible",
        answers:[{
            label: "Genesis",
            isCorrect: true,
        },
        {
            label: "Exodus",
            isCorrect: false,
        },
        {
            label: "Leviticus",
            isCorrect: false,
        },
        {
            label: "Matthew",
            isCorrect: false,
        }]
    },
    {
        title: "How do you say 'Hello' in Spanish?",
        answers:[{
            label: "Adios",
            isCorrect: false,
        },
        {
            label: "Gracias",
            isCorrect: false,
        },
        {
            label: "Hola",
            isCorrect: true,
        },
        {
            label: "Hasta lluego",
            isCorrect: false,
        }]
    },
    {
        title: "Which president got stuck in a bathtub?",
        answers:[{
            label: "Trump",
            isCorrect: false,
        },
        {
            label: "Obama",
            isCorrect: false,
        },
        {
            label: "Andrew Jackson",
            isCorrect: false,
        },
        {
            label: "William Taft",
            isCorrect: true,
        }]
    },
    {
        title: "What is the meaning of the German word 'Panzer'?",
        answers:[{
            label: "Panther",
            isCorrect: false,
        },
        {
            label: "Gun",
            isCorrect: false,
        },
        {
            label: "Tank",
            isCorrect: true,
        },
        {
            label: "Wedding",
            isCorrect: false,
        }]
    },
    {
        title: "What year is it?",
        answers:[{
            label: "2021",
            isCorrect: false,
        },
        {
            label: "2023",
            isCorrect: false,
        },
        {
            label: "2024",
            isCorrect: false,
        },
        {
            label: "2022",
            isCorrect: true,
        }]
    },
    {
        title: "How many are in a bakers dozen?",
        answers:[{
            label: "11",
            isCorrect: false,
        },
        {
            label: "12",
            isCorrect: false,
        },
        {
            label: "13",
            isCorrect: true,
        },
        {
            label: "14",
            isCorrect: false,
        }]
    }

]

function renderNewQuestion(){
    if(index>=10){
    showResults()
    return
    }
    
    
    console.log("This is the index",index)
    introSection.style.display="none";
    var questionName = document.createElement("h1");
    questionName.innerHTML = questions[index].title;
    var listOfAnswers = document.createElement("ol");
    listOfAnswers.setAttribute("class","ml-5")
    for (var i=0;i<4;i++){
        var singleAnswerLi = document.createElement("li");
        var singleAnswer = document.createElement("button")
        singleAnswer.setAttribute("class", "btn btn-outline-primary")
        singleAnswer.innerHTML = questions[index].answers[i].label
        if(questions[index].answers[i].isCorrect){
            singleAnswer.addEventListener("click",function(){
                score+=10;
                questionResult.innerHTML = "CORRECT";
                questionResult.setAttribute("class"," text-success container");
                clearQuestion();
            }) 
        } else {
            singleAnswer.addEventListener("click",function(){
                questionResult.innerHTML = "INCORRECT";
                questionResult.setAttribute("class","text-danger container");
                clearQuestion();
                count -= 10;
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
function showResults(){
    questionResult.textContent= "";
    endGame = true;
    timerEl.style.display="none" //hide timer
    //create a new p tag
    results.removeChild(results.lastChild) // remove last p tag
    var resultPTag = document.createElement("p");
    //add text with the total points
    resultPTag.innerHTML=score + " points";
    results.appendChild(resultPTag);
    results.style.display="block";
    
}

function clearQuestion(){
    document.getElementById("quiz").innerHTML="";
    index++;
    renderNewQuestion();
    if(index > 9){
        showResults()
    }
    //if index is bigger than the length of the array, then end it
}





function startTimer(){
    interval = setInterval(function(){
    // timerEl.innerHTML="Time: ";
    document.getElementById("timer").innerHTML="Time Remaining: "+ count;
    count--;
    if(count <= 0){
        quiz.style.display='none';
        results.style.display='block';
        timerEl.style.display='none';
        timerEl.textContent= "";
        clearInterval(interval); // clear timer
    }
    if(endGame){
        quiz.style.display='none';
        results.style.display='block';
        timerEl.style.display='none';
        timerEl.textContent = "";
        clearInterval(interval); // clear timer
    }    
  }, 1000);
}

initialsButton.addEventListener("click",function(){
    var result={
        initials:initialsInput.value,
        points: score
    }
    // if highscore exists then append the new score, else, create the first highscore inside an array
    if(allHighScores){
        allHighScores.push(result)
    } else{
        allHighScores = [result]
    }
    localStorage.setItem('highscores', JSON.stringify(allHighScores))
    initialsInput.value =""//reset input value
    results.style.display="none";
    intro.style.display="block";
    showHighscores.style.display="block"; //show button
    
})

showHighscores.addEventListener('click',function(){
    //hide everything
    timerEl.style.display="none" //hide timer
    showHighscores.style.display="none"; //hide button
    intro.style.display="none";
    quiz.style.display="none";
    results.style.display="none";
    listOfHighscores.innerHTML="" //empty the scores
    allHighScores.sort(function(a,b){return b.points - a.points}) //sort highscores in descending order
    for(var i=0;i<allHighScores.length;i++){
        var newScoreElement= document.createElement('li');
        newScoreElement.setAttribute("class","list-group-item")
        newScoreElement.innerHTML=allHighScores[i].initials + " "+allHighScores[i].points
        listOfHighscores.append(newScoreElement); //append each score to the list
    }
    highscores.style.display="block"; //show scores

})

goHomeButton.addEventListener("click",function(){
    quiz.style.display="none";
    results.style.display="none";
    highscores.style.display="none";
    timerEl.innerHTML="Timer"
    showHighscores.style.display="block";
    intro.style.display="block";
    timerEl.style.display="none";
   
})