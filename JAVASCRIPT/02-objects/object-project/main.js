//AIM: To display ipl team details when user enter a team name

//dom manupulation
let inputDataEl = document.getElementById("inputdata");
let btnClick = document.getElementById("btn");
let teamNameEl = document.getElementById("teamName");
let captainEl = document.getElementById("captain");
let currentEl = document.getElementById("current");
let tropiesEl = document.getElementById("tropies");

//creating a object
const ipl = {
  chennai: [
    "Chennai Super Kings",
    "MS Dhoni",
    "Champions",
    "5 times Champions",
  ],
  mumbai: ["Mumbai Indians", "Rohith Sharma", "5 times champion"],
  kolkatta: ["Kolkata Knight Riders", "Nithish Rana", "2 times champion"],
  bangalore: [
    "Bangalore Royal Challengers",
    "Faf Du Plessis",
    "No tropies yet",
  ],
  hyderabad: ["Hyderabad SunRisers", "Margram", "2 times champion"],
  gujarat: ["Gujarat Titans", "Hardik Pandya", "2022 champion"],
  lucknow: ["Lucknow Super Giants", "KL Rahul", "No tropies yet"],
  delhi: ["Delhi Capitals", "David Warner", "No tropies yet"],
  punjab: ["Punjab Lions", "Shikar Dhawan", "No tropies yet"],
};

//adding event listener to button
btnClick.addEventListener("click", function () {
  let outputVal = inputDataEl.value;
  //ternary operator for checking
  outputVal === "csk"
    ? ((teamNameEl.textContent = `Team Name: ${ipl.chennai[0]}`),
      (captainEl.textContent = `Team Captain: ${ipl.chennai[1]}`),
      (currentEl.textContent = `Team position 2023: ${ipl.chennai[2]}`),
      (tropiesEl.textContent = `Tropies: ${ipl.chennai[3]}`))
    : outputVal === "mi"
    ? ((teamNameEl.textContent = `Team Name: ${ipl.mumbai[0]}`),
      (captainEl.textContent = `Team Captain: ${ipl.mumbai[1]}`),
      (tropiesEl.textContent = `Tropies: ${ipl.mumbai[2]}`))
    : outputVal === "kkr"
    ? ((teamNameEl.textContent = `Team Name: ${ipl.kolkatta[0]}`),
      (captainEl.textContent = `Team Captain: ${ipl.kolkatta[1]}`),
      (tropiesEl.textContent = `Tropies: ${ipl.kolkatta[2]}`))
    : outputVal === "rcb"
    ? ((teamNameEl.textContent = `Team Name: ${ipl.bangalore[0]}`),
      (captainEl.textContent = `Team Captain: ${ipl.bangalore[1]}`),
      (tropiesEl.textContent = `Tropies: ${ipl.bangalore[2]}`))
    : outputVal === "lsg"
    ? ((teamNameEl.textContent = `Team Name: ${ipl.lucknow[0]}`),
      (captainEl.textContent = `Team Captain: ${ipl.lucknow[1]}`),
      (tropiesEl.textContent = `Tropies: ${ipl.lucknow[2]}`))
    : outputVal === "gt"
    ? ((teamNameEl.textContent = `Team Name: ${ipl.gujarat[0]}`),
      (captainEl.textContent = `Team Captain: ${ipl.gujarat[1]}`),
      (tropiesEl.textContent = `Tropies: ${ipl.gujarat[2]}`))
    : (teamNameEl.textContent = `Oops! Your ${outputVal} team is not found`);
});
