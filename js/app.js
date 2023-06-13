const topLeft = document.querySelector("#top-left");
const topRight = document.querySelector("#top-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomRight = document.querySelector("#bottom-right");
const switchOn = document.querySelector(".start");
const strictButton = document.querySelector("#strict");
const turn = document.querySelector(".turn");
const text = document.querySelector(".text");

const buttonsColors = ["red", "green", "yellow", "lightblue"];
const playerClickedPattern = [];
const gamePattern = [];

const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => console.log(btn.id));

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
