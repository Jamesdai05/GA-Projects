const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
const onButton = document.querySelector("#on");
const startButton = document.querySelector(".start");
const strictButton = document.querySelector("#strict");
const turnCounter = document.querySelector(".turn");
const text = document.querySelector(".text");

const buttonsColors = ["red", "green", "yellow", "lightblue"];
const playerClickedPattern = [];
let computersSelection = [];
// conditions declaration
let on = false;
let isStrict = false;
let isSound = true;
let flash;
let win;
let noNg;
let computerTurn;
let intervalId;

// add the event to switch on button
onButton.addEventListener("change", (event) => {
  if (onButton.checked === true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener("click", (event) => {
  // if the power is on or win is true, continue to run
  if (on || win) {
    play();
  }
});

const play = () => {
  win = false;
  computersSelection = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  noNg = true;
  for (let i = 0; i < 10; i++) {
    computersSelection.push(Math.floor(Math.random() * 4) + 1);
  }
  // console.log(computersSelection);
  computerTurn = true;
  intervalId = setInterval(gameTurn, 800);
};

function gameTurn() {
  if (flash === turn) {
    clearInterval(intervalId);
    computerTurn = false;
    clearColor();
    on = true;
  }
  if (computerTurn) {
    clearColor();
    setTimeout(() => {
      if (computersSelection[flash] === 1) one();
      if (computersSelection[flash] === 2) two();
      if (computersSelection[flash] === 3) three();
      if (computersSelection[flash] === 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  // audio will play in the respective div
  if (isSound) {
    let audio = new Audio("../sounds/green.mp3");
    audio.play();
  }
  isSound = true;
  green.style.backgroundColor = "#00ff00";
}

function two() {
  // audio will play in the respective div
  if (isSound) {
    let audio = new Audio("../sounds/red.mp3");
    audio.play();
  }
  isSound = true;
  green.style.backgroundColor = "#cc0000";
}

function three() {
  // audio will play in the respective div
  if (isSound) {
    let audio = new Audio("../sounds/yellow.mp3");
    audio.play();
  }
  isSound = true;
  green.style.backgroundColor = "#ff9900";
}

function four() {
  // audio will play in the respective div
  if (isSound) {
    let audio = new Audio("../sounds/blue.mp3");
    audio.play();
  }
  isSound = true;
  green.style.backgroundColor = "#66ccff";
}

function clearColor() {
  green.style.backgroundColor = "green";
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "yellow";
  blue.style.backgroundColor = "blue";
}

// function flashColor() {
//   green.style.backgroundColor = "#00ff00";
//   red.style.backgroundColor = "#cc0000";
//   yellow.style.backgroundColor = "#ff9900";
//   blue.style.backgroundColor = "#66ccff";
// }

// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const playerChoosenColor = event.currentTarget.getAttribute("id");
//     playerClickedPattern.push(playerChoosenColor);
//     console.log(playerClickedPattern);
//   });
// });

//power on the machine
// switchOn.addEventListener("click", () => {
//   console.log("Button is clicked.");
// });

// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log("clicked");
//   });
// });
//   // let userChoosenColors = event.currentTarget.getAttribute("id");
//   // playerClickedPattern.push(userChoosenColors);
//   // playsound of the button
// });

// console.log(userChoosenColor);
