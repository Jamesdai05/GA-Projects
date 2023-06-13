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

//convert the nodelists to an array
const btns = Array.from(document.querySelectorAll(".btn"));
// console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const playerChoosenColor = event.currentTarget.getAttribute("id");
    playerClickedPattern.push(playerChoosenColor);
    console.log(playerClickedPattern);
  });
});

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
