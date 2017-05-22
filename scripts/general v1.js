
/*
var q11s[0] = ["Cual es el primero libro de la Biblia?","Génesis","Éxodo","Levítico","Mateo"];
var q11s[1] = ["Cual es el libro antes de Éxodo?","Génesis","Números","Deuteronomio","Levítico"];
var q11s[2] = ["Cual es el libro antes de Levítico?","Éxodo","Génesis","Deuteronomio","Números"];
var q11s[3] = ["Cual es el libro antes de Números?","Levítico","Éxodo","Génesis","Deuteronomio"];


var q11s = [
  ['test00','test01'],
  ['test10','test11']
];

*/
var team1Answered = false
var answerA = 0;
var answerB = 0;
var answerC = 0;
var answerD = 0;


$(document).ready(function(){
  $(".optionsButton a").click(function(){
      $("#options").toggle;
        alert("you just clicked the optionsButton");
  });

loadQuestions();

});



function loadQuestions() {
  alert("questions will be loaded into array");
  $("#questionArea").text(q11s[0][0]);
  $("#answerA a span").text(q11s[0][1]);
  $("#answerB a span").text(q11s[1][0]);
  $("#answerC a span").text(q11s[1][1]);
  $("#answerD a span").text(q11s[1][4]);
}

function newQuestion() {
  team1Answered = false;
  answerA = 0;
  answerB = 0;
  answerC = 0;
  answerD = 0;

  // This randomly assigns answers to letters A,B,C, or D
	var temp:int;
	while(answerD == 0)
	{
		temp = Math.random()*4 + 1;
		if(temp == answerA || temp == answerB || temp == answerC){}
		else
		{
		if (answerA==0) {answerA=temp}
		else if (answerB==0) {answerB=temp}
		else if (answerC==0) {answerC=temp}
		else if (answerD==0) {answerD=temp}
		}
	}

  // This section will choose the question.
	var language:int = 1;
	var category:int = 1; //Math.random()*1 +5;  // the 5 3ill need to be reapaced by 1 but for now all we have is category 5.
	var questionNumber:int = Math.random()* q11s.length + 1; //We will need to replace the 5 with the number of questions in the chosen category.
	var chosenLangCat:String = "q" + language + category + "s";

  // This will put the question into the text boxes
  	$("#questionArea").text(chosenLangCat[questionNumber][0]);
          // original actionscript:  txtQuestion.text = this[chosenLangCat][questionNumber][0];

  // This will put the answers in the answer boxes

          // original actionscript
              //txtAnswerA.text = "A. " + this[chosenLangCat][questionNumber][answerA];
              //txtAnswerB.text = "B. " + this[chosenLangCat][questionNumber][answerB];
              //txtAnswerC.text = "C. " + this[chosenLangCat][questionNumber][answerC];
              //txtAnswerD.text = "D. " + this[chosenLangCat][questionNumber][answerD];



};
