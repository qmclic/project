

// your name
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");
const nameInput = document.getElementById("name");

function submitName() {
    const name = nameInput.value;
    if (!name) return;
    output.textContent = `Welcome to the film club, ${name}!`;
    nameInput.value = '';
}

submitBtn.addEventListener("click", submitName);

nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitName();
    }
});




// diff background

const darkModeBtn = document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



// maya image change
const mayaImg = document.getElementById("change-maya");
function changeMayaImage() {
  if (mayaImg.getAttribute("src") === "mayaderen3.jpg") {
    mayaImg.alt = "A New Image of Maya Deren";
    mayaImg.src = "mayaderen2.jpg";
  } else {
    mayaImg.alt = "Original Maya Deren Image";
    mayaImg.src = "mayaderen3.jpg";
  }
}
mayaImg.addEventListener("click", changeMayaImage);

// yoko image change
const yokoImg = document.getElementById("change-yoko");
function changeYokoImage() {
  if (yokoImg.getAttribute("src") === "yoko.jpg") {
    yokoImg.alt = "A New Image of Yoko Ono";
    yokoImg.src = "yoko1.jpg";
  } else {
    yokoImg.alt = "Original Yoko Ono Image";
    yokoImg.src = "yoko.jpg";
  }
}
yokoImg.addEventListener("click", changeYokoImage);


// agnes image change
const agnesImg = document.getElementById("change-agnes");
function changeAgnesImage() {
  if (agnesImg.getAttribute("src") === "agnes.jpg") {
    agnesImg.alt = "A New Image of Agnes Varda";
    agnesImg.src = "agnes2.jpg";
  } else {
    agnesImg.alt = "Original Agnes Varda Image";
    agnesImg.src = "agnes.jpg";
  }
}
agnesImg.addEventListener("click", changeAgnesImage);


// elaine may image change
const elaineImg = document.getElementById("change-elaine");
function changeElaineImage() {
  if (elaineImg.getAttribute("src") === "elainemay.jpg") {
    elaineImg.alt = "A New Image of Elaine May";
    elaineImg.src = "elainemay1.jpg";
  } else {
    elaineImg.alt = "Original Elaine May Image";
    elaineImg.src = "elainemay.jpg";
  }
}
elaineImg.addEventListener("click", changeElaineImage);


// pasolini image change
const pasoliniImg = document.getElementById("change-pasolini");
function changePasoliniImage() {
  if (pasoliniImg.getAttribute("src") === "pasolini.jpg") {
    pasoliniImg.alt = "A New Image of Pasolini";
    pasoliniImg.src = "pasolini1.jpg";
  } else {
    pasoliniImg.alt = "Original Pasolini Image";
    pasoliniImg.src = "pasolini.jpg";
  }
}
pasoliniImg.addEventListener("click", changePasoliniImage);

// hammer image change
const hammerImg = document.getElementById("change-hammer");
function changeHammerImage() {
  if (hammerImg.getAttribute("src") === "hammer.png") {
    hammerImg.alt = "A New Image of Barbara Hammer";
    hammerImg.src = "hammer1.jpg";
  } else {
    hammerImg.alt = "Original Barbara Hammer Image";
    hammerImg.src = "hammer.png";
  }
}
hammerImg.addEventListener("click", changeHammerImage);

// dorothy image change
const dorothyImg = document.getElementById("change-dorothy");
function changeDorothyImage() {
  if (dorothyImg.getAttribute("src") === "dorothy.jpg") {
    dorothyImg.alt = "A New Image of Dorothy Arzner";
    dorothyImg.src = "dorothy2.jpg";
  } else {
    dorothyImg.alt = "Original Dorothy Arzner Image";
    dorothyImg.src = "dorothy.jpg";
  }
}
dorothyImg.addEventListener("click", changeDorothyImage);


// demy image change
const demyImg = document.getElementById("change-demy");
function changeDemyImage() {
  if (demyImg.getAttribute("src") === "demy.jpg") {
    demyImg.alt = "A New Image of Jacques Demy";
    demyImg.src = "demy1.jpg";
  } else {
    demyImg.alt = "Original Jacques Demy Image";
    demyImg.src = "demy.jpg";
  }
}
demyImg.addEventListener("click", changeDemyImage);


// cronenberg image change
const davidImg = document.getElementById("change-david");
function changeDavidImage() {
  if (davidImg.getAttribute("src") === "david.jpg") {
    davidImg.alt = "A New Image of David Cronenberg";
    davidImg.src = "david1.jpg";
  } else {
    davidImg.alt = "Original David Cronenberg Image";
    davidImg.src = "david.jpg";
  }
}
davidImg.addEventListener("click", changeDavidImage);


//rock paper scissors
function play(userChoice) {
    const choices = ["rock", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let outcome;

    if (userChoice === computerChoice) {
        outcome = "<br>DRAW! Can humans and computers really be... equal? This is... incredibly vexing.";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        outcome = "<br>WIN! Well done :) Humans will always be victorious over machine because we have a SOUL.";
    } else {
        outcome = "<br>LOSE! Too bad. Better luck next time. I guess computers will beat humans and slaughter us all.";
    }

    document.getElementById("result").innerHTML =
        `You chose: ${userChoice}<br>Computer chose: ${computerChoice}<br>${outcome}`;
}


// clock
const datetimeEl = document.getElementById("current-datetime");

function updateDateTime() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // months are 0-based
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

datetimeEl.textContent = `${hours}:${minutes}:${seconds} | ${day}/${month}/${year}`;
// datetimeEl.textContent = `Hey there! It’s currently ${day}-${month}-${year} at ${hours}:${minutes}:${seconds}`;
}

// Initial call
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);



// poll
const form = document.getElementById("pollForm");
const results = document.getElementById("results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.style.display = "none";
  results.classList.remove("hidden");
});
