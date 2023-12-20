# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Array-Loop

The concept is, to display of the developers whose task is pending

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array-primitive</title>
  </head>
  <body>
    <script src="./main.js"></script>
  </body>
</html>
```

## Javascript Code

```javascript
//to create candidate name list
//pick in random manner
//if completed the task add in one array
//if pending add in another array
//then display the result

const candidates = [
  {
    id: 1,
    name: "Bearcin Sweety",
    linkedin: "...Sweety...",
    github: ".....",
  },
  {
    id: 2,
    name: "Swetha",
    linkedin: "...Swetha...",
    github: ".....",
  },
  {
    id: 3,
    name: "Hema",
    linkedin: "...hema...",
    github: ".....",
  },
  {
    id: 4,
    name: "Roshini",
    linkedin: "...roshini...",
    github: ".....",
  },
  {
    id: 5,
    name: "Akalya",
    linkedin: "...akalya...",
    github: ".....",
  },
];

//generate Random Numbers

let randomNumber = () => {
  let randomPick = Math.floor(Math.random() * 5 + 1);
  console.log(randomPick);
  return randomPick;
};

//empty array

let completed = [];
let pending = [];
let absent = [];

//function expression
let verification = () => {
  //random number
  let randomid = randomNumber();

  //finding in array
  let findCandidates = candidates.find((val) => {
    return val.id === randomid;
  });
  console.log(` "${findCandidates.name}"`);

  //completed or pending
  let candidateName = findCandidates.name;

  //status
  let status = "notcompleted";

  //check status
  if (status === "completed") {
    //push to completed array
    completed.push(candidateName);
    //looping in array
    for (val of completed) {
      console.log(`${candidateName} has completed today's task`);
    }
  } else if (status === "absent") {
    //push to completed array
    absent.push(candidateName);
    //looping in array
    for (val of absent) {
      console.log(`${candidateName} is absent `);
    }
  } else {
    //push to pending array
    pending.push(candidateName);
    //looping in array
    for (val of pending) {
      console.log(`${candidateName} had not completed today's task`);
    }
  }

  //check the array
  console.log("Completed:", completed);
  console.log("Pending:", pending);
  console.log("Absent:", absent);
};
verification();

//Again coming to pending people's tasks
(function remainingPeople() {
  for (key in pending) {
    console.log(`After completing others check "${pending[key]}"`);
    let statusNow = "completed";
    if (statusNow === "completed") {
      console.log(`"${pending[key]}" has completed her pending tasks`);
      pending.splice(key, 1);
      console.log("Pending List Now:", pending);
    }
  }
})();
```

## References:

<a href="https://youtu.be/b3M0BTzgr98?si=sX9szU8JwPeWxix4"><img src="https://i.ytimg.com/vi/b3M0BTzgr98/maxresdefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
