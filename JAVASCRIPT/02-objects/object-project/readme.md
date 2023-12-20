# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Object

The concept is, to generate details for ipl clubs based on input

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <main class="main">
      <h1>IPL TEAMS</h1>
      <!-------input----->
      <div class="input-div">
        <input
          type="text"
          placeholder="Enter your favourite IPL team"
          id="inputdata"
        />
        <button id="btn">Get Details</button>
      </div>
      <!--------output------>
      <div class="output-div">
        <h2 id="teamName"></h2>
        <h2 id="captain"></h2>
        <h2 id="current"></h2>
        <h2 id="tropies"></h2>
      </div>
    </main>
    <!-------script----->
    <script src="./main.js"></script>
  </body>
</html>
```

## Javascript Code

```javascript
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
```

## References:

<a href="https://youtu.be/KQ8cMc9wCmk?si=LNHWYZaJ1aPNchKN"><img src="https://i.ytimg.com/vi/KQ8cMc9wCmk/sddefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
