
var team1Answered = false;
var answerA = 0;
var answerB = 0;
var answerC = 0;
var answerD = 0;
var response = "0";
var pointValue = 4;
var questionsRemaining = 3;
var counter = 10;
var t;
var isTimerOn = false;

$(document).ready(function(){
  $("#optionsButton").click(function(){
      $("div #options").slideToggle("fast");
    //    alert("you just clicked the optionsButton");
  });
  $("#cheatSheetButton").click(function(){
      $("div #cheatSheet").toggle();
  });

  $("#answerA a").click(function(){
    if (answerA != 1){pointValue = -pointValue}
    checkAnswer();
  });

  $("#answerB a").click(function(){
      if (answerB != 1){pointValue = -pointValue}
      checkAnswer();
  });

  $("#answerC a").click(function(){
    if (answerC != 1){pointValue = -pointValue}
    checkAnswer();
  });

  $("#answerD a").click(function(){
    if (answerD != 1) {pointValue = -pointValue}
    checkAnswer();
  });

function checkAnswer() {
  $("#score span").text(parseInt($("#score span").text()) + pointValue);
  questionsRemaining--;
  $("#questionsRemaining span").text(questionsRemaining);
  if (questionsRemaining==0) {
    endGame();
  } else {
    newQuestion();
  }
}



newGame();
});

function endGame() {
  stopMe();
  alert("Your final score is " + $("#score span").text());
  newGame();
}

function newGame() {
  $("#score span").text(0);
  questionsRemaining = 3;
  $("#questionsRemaining span").text(questionsRemaining);
  newQuestion();
};

function countdown() {
  $("#timeRemaining span").text(counter);
  counter--;
  pointValue=4;
  if(counter<9) {pointValue=4}
  if(counter<7) {pointValue=3}
  if(counter<5) {pointValue=2}
  if(counter<3) {pointValue=1}
  if(counter<1) {newQuestion()}
  $("#questionValue span").text(pointValue);
  t = setTimeout("countdown();",1000);
}
function startMe()
{
  if(!isTimerOn) {
    isTimerOn=true;
    countdown();
  }
}

function stopMe() {
  isTimerOn = false;
  clearTimeout(t);
}

function newQuestion() {
  team1Answered = false;
  answerA = 0;
  answerB = 0;
  answerC = 0;
  answerD = 0;
  counter = 10;
  startMe();
  // This randomly assigns answers to letters A,B,C, or D
	var temp;
	while(answerD == 0)
	{
		temp = Math.floor(Math.random()*4) + 1;
		if(temp == answerA || temp == answerB || temp == answerC){}
		else
		{
		if (answerA==0) {answerA=temp}
		else if (answerB==0) {answerB=temp}
		else if (answerC==0) {answerC=temp}
		else if (answerD==0) {answerD=temp}
		}
	}
//alert('answerA = ' + answerA); //**** Just a test - Delete this line ****

  // This section will choose the question.
	var language = 1;
	var category = 1; //Math.random()*1 +5;  // the 5 3ill need to be reapaced by 1 but for now all we have is category 5.
	var questionNumber = Math.floor(Math.random()* q11s.length) + 1; //We will need to replace the 5 with the number of questions in the chosen category.
	var chosenLangCat = "q" + language + category + "s";



  // This will put the question into the text boxes
  //*********************************************************************** dot notation vs bracket notation *******************************
  	$("#questionArea").text(this[chosenLangCat][questionNumber][0]);
          // original actionscript:  txtQuestion.text = this[chosenLangCat][questionNumber][0];
//var answerA = 2;
  // This will put the answers in the answer boxes
  $("#answerA a span").text(this[chosenLangCat][questionNumber][answerA]);
  $("#answerB a span").text(this[chosenLangCat][questionNumber][answerB]);
  $("#answerC a span").text(this[chosenLangCat][questionNumber][answerC]);
  $("#answerD a span").text(this[chosenLangCat][questionNumber][answerD]);
          // original actionscript
              //txtAnswerA.text = "A. " + this[chosenLangCat][questionNumber][answerA];
              //txtAnswerB.text = "B. " + this[chosenLangCat][questionNumber][answerB];
              //txtAnswerC.text = "C. " + this[chosenLangCat][questionNumber][answerC];
              //txtAnswerD.text = "D. " + this[chosenLangCat][questionNumber][answerD];
  };
