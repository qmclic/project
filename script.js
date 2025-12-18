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




// diff background

const darkModeBtn = document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// hollywood clicks 

// Maclaine image change
const maclaineImg = document.getElementById("change-Maclaine");
function changeMaclaineImage() {
  if (maclaineImg.getAttribute("src") === "hollywood/maclaine.jpg") {
    maclaineImg.alt = "Alternate image of Shirley Maclaine";
    maclaineImg.src = "hollywood/maclaine1.jpg";
  } else {
    maclaineImg.alt = "Shirley Maclaine";
    maclaineImg.src = "hollywood/maclaine.jpg";
  }
}
maclaineImg.addEventListener("click", changeMaclaineImage);

// Kerr image change
const kerrImg = document.getElementById("change-Kerr");
function changeKerrImage() {
  if (kerrImg.getAttribute("src") === "hollywood/Kerr.jpg") {
    kerrImg.alt = "Alternate image of Deborah Kerr";
    kerrImg.src = "hollywood/Kerr1.jpg";
  } else {
    kerrImg.alt = "Deborah Kerr";
    kerrImg.src = "hollywood/Kerr.jpg";
  }
}
kerrImg.addEventListener("click", changeKerrImage);

// Stewart image change
const stewartImg = document.getElementById("change-Stewart");
function changeStewartImage() {
  if (stewartImg.getAttribute("src") === "hollywood/stewart.jpg") {
    stewartImg.alt = "Alternate image of Jimmy Stewart";
    stewartImg.src = "hollywood/stewart1.jpg";
  } else {
    stewartImg.alt = "Jimmy Stewart";
    stewartImg.src = "hollywood/stewart.jpg";
  }
}
stewartImg.addEventListener("click", changeStewartImage);

// Lancaster image change
const lancasterImg = document.getElementById("change-Lancaster");
function changeLancasterImage() {
  if (lancasterImg.getAttribute("src") === "hollywood/lancaster.jpg") {
    lancasterImg.alt = "Alternate image of Burt Lancaster";
    lancasterImg.src = "hollywood/lancaster1.jpg";
  } else {
    lancasterImg.alt = "Burt Lancaster";
    lancasterImg.src = "hollywood/lancaster.jpg";
  }
}
lancasterImg.addEventListener("click", changeLancasterImage);

// Davis image change
const davisImg = document.getElementById("change-Davis");
function changeDavisImage() {
  if (davisImg.getAttribute("src") === "hollywood/davis.jpg") {
    davisImg.alt = "Alternate image of Bette Davis";
    davisImg.src = "hollywood/davis1.jpg";
  } else {
    davisImg.alt = "Bette Davis";
    davisImg.src = "hollywood/davis.jpg";
  }
}
davisImg.addEventListener("click", changeDavisImage);

// Harrison image change
const harrisonImg = document.getElementById("change-Harrison");
function changeHarrisonImage() {
  if (harrisonImg.getAttribute("src") === "hollywood/harrison.jpg") {
    harrisonImg.alt = "Alternate image of Susie Harrison";
    harrisonImg.src = "hollywood/harrison1.jpg";
  } else {
    harrisonImg.alt = "Susie Harrison";
    harrisonImg.src = "hollywood/harrison.jpg";
  }
}
harrisonImg.addEventListener("click", changeHarrisonImage);

// Hepburn image change
const hepburnImg = document.getElementById("change-Hepburn");
function changeHepburnImage() {
  if (hepburnImg.getAttribute("src") === "hollywood/khepburn.jpg") {
    hepburnImg.alt = "Alternate image of Katharine Hepburn";
    hepburnImg.src = "hollywood/khepburn1.jpg";
  } else {
    hepburnImg.alt = "Katharine Hepburn";
    hepburnImg.src = "hollywood/khepburn.jpg";
  }
}
hepburnImg.addEventListener("click", changeHepburnImage);

// Thin Man image change
const thinmanImg = document.getElementById("change-Thinman");
function changeThinmanImage() {
  if (thinmanImg.getAttribute("src") === "hollywood/thinman.jpg") {
    thinmanImg.alt = "Alternate image of William Powell and Myrna Loy";
    thinmanImg.src = "hollywood/thinman1.jpg";
  } else {
    thinmanImg.alt = "William Powell and Myrna Loy";
    thinmanImg.src = "hollywood/thinman.jpg";
  }
}
thinmanImg.addEventListener("click", changeThinmanImage);

// Granger image change
const grangerImg = document.getElementById("change-Granger");
function changeGrangerImage() {
  if (grangerImg.getAttribute("src") === "hollywood/granger.jpg") {
    grangerImg.alt = "Alternate image of Farley Granger";
    grangerImg.src = "hollywood/granger1.jpg";
  } else {
    grangerImg.alt = "Farley Granger";
    grangerImg.src = "hollywood/granger.jpg";
  }
}
grangerImg.addEventListener("click", changeGrangerImage);

// Colbert image change
const colbertImg = document.getElementById("change-Colbert");
function changeColbertImage() {
  if (colbertImg.getAttribute("src") === "hollywood/colbert.jpg") {
    colbertImg.alt = "Alternate image of Claudette Colbert";
    colbertImg.src = "hollywood/colbert1.jpg";
  } else {
    colbertImg.alt = "Claudette Colbert";
    colbertImg.src = "hollywood/colbert.jpg";
  }
}
colbertImg.addEventListener("click", changeColbertImage);