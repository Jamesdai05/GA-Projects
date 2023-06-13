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
const gamePattern = [];
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
    computersSelection.push(Math.floor(Math.random() * 4));
  }
};
//convert the nodelists to an array
const btns = Array.from(document.querySelectorAll(".btn"));
// console.log(btns);

const computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonsColors[randomNumber];
  gamePattern.push(randomChosenColor);
  return gamePattern;
};

console.log(gamePattern);

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
