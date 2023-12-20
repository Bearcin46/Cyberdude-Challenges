const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const cyanBtn = document.getElementById("cyan");
const pinkBtn = document.getElementById("pink");
const yellowBtn = document.getElementById("yellow");
const div = document.getElementById("main-div");
const heading = document.getElementById("heading");

let currentButton;
/*==============================background colour of body======================================*/
redBtn.addEventListener("click", () => {
  reset();
  document.body.style.backgroundColor = "red";
  redBtn.style.backgroundColor = "red";
  redBtn.style.color = "white";
  currentButton = redBtn;
});
blueBtn.addEventListener("click", () => {
  reset();
  document.body.style.backgroundColor = "blue";
  blueBtn.style.backgroundColor = "blue";
  blueBtn.style.color = "white";
  currentButton = blueBtn;
});
greenBtn.addEventListener("click", () => {
  reset();
  document.body.style.backgroundColor = "green";
  greenBtn.style.backgroundColor = "green";
  greenBtn.style.color = "white";
  currentButton = greenBtn;
});
/*==============================background colour of div======================================*/
cyanBtn.addEventListener("dblclick", () => {
  reset();
  div.style.backgroundColor = "cyan";
  cyanBtn.style.backgroundColor = "white";
  cyanBtn.style.color = "cyan";
  heading.style.font = "italic bold 20px arial,serif";
  currentButton = cyanBtn;
});
pinkBtn.addEventListener("dblclick", () => {
  reset();
  div.style.backgroundColor = "pink";
  pinkBtn.style.backgroundColor = "white";
  pinkBtn.style.color = "pink";
  currentButton = pinkBtn;
});
yellowBtn.addEventListener("dblclick", () => {
  reset();
  div.style.backgroundColor = "yellow";
  yellowBtn.style.backgroundColor = "white";
  yellowBtn.style.color = "yellow";
  currentButton = yellowBtn;
});

function reset() {
  if (currentButton) {
    currentButton.style.backgroundColor = "";
    currentButton.style.color = "";
    div.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    heading.style.font = "";
  }
}
