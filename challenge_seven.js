(function(){

var finalScore= 0;


function verifyAnswer(correctAnswer, userAnswer){
    if(correctAnswer == userAnswer){
        return 1;
    }
    return -1;

}
    
function Question(question, answersArray, correctAnswer){
    this.question      = question;
    this.answersArray  = answersArray;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion =  function(){
    console.log(this.question)
    for (x = 0; x < this.answersArray.length; x++ ){
        console.log(this.answersArray[x])
    }

}

Question.prototype.checkAnswer = function(answer, callback){
    var sc = 0;
    if(this.correctAnswer == answer){
        
        console.log("CORRECT")
        sc = callback(true)
        finalScore  = sc
    }else{
        console.log("WRONG")
        sc = callback(false)
    }
    this.displayScore(sc)
}

Question.prototype.displayScore = function(score){
    console.log("Your score is -->", score)
    console.log("----------------------")

}

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score()


var sportsQuestion = new Question('Who won the Cricket WorldCup in 1983?',['1.India','2.Pakistan','3.England'], 1)

var scienceQuestion = new Question('Who published the first known photo of a BlackHole?',['1.Stephen Hawking','2.Katie Bowman','3.Albert Einstein'], 2)

var geographyQuestion = new Question('Which country is called "Land Of The Rising Sun?"',['1.USA','2.Canada','3.Japan'], 3)

function nextQuestion(){
var questionsArray  = [sportsQuestion, scienceQuestion,geographyQuestion] 

var selectRandQuestion = Math.floor(Math.random() * 3)

questionsArray[selectRandQuestion].displayQuestion()

var answer = prompt(questionsArray[selectRandQuestion].question)



if (answer !== 'exit'){
    questionsArray[selectRandQuestion].checkAnswer(parseInt(answer), keepScore)
    nextQuestion();
    
}else{
    console.log("Thanks for playing !!! Your final score is -->", finalScore)

}
}

nextQuestion()


})();


