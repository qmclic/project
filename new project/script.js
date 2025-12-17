//Define function:
function checkAnswers(){
  //assign 10 to the score variable
  var score = 0

  //assign the quiz elements to the quiz variable
  quiz = document.forms.Quiz.elements;
// asign the answer to question to answer valiable
answer1= quiz.growth.value
//check answer is correct
if (answer1 === "His Girl Friday") {
    //add one if correct
    score = score + 1;
}

  answer2 = quiz.talent.value;
    // Check the answer to the first question:
    if (answer2 == "70"){
      //Add 1 to the score if the user was correct
      score = score + 1;
  }

    answer3 = quiz.comedies.value;
    // Check the answer to the first question:
    if (answer3 == "40"){
      //Add 1 to the score if the user was correct
      score = score + 1;
  }

  answer4= quiz.fave.value
//check answer is correct
if (answer4 === "The Lion in Winter") {
    //add one if correct
    score = score + 1;
}

  answer5= quiz.rewatch.value
//check answer is correct
if (answer5 === "Re-Animator") {
    //add one if correct
    score = score + 1;
}


  //return the score value as part of an alert in the browser

  alert ('Well done, your score was... ' + score);
}