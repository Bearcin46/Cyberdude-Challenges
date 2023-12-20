//dom manupulation
const outputBtn = document.getElementById("output-div");
const displayName = document.getElementById("name-display");
const completedBtn = document.getElementById("completed-btn");
const absentBtn = document.getElementById("absent-btn");
const pendingBtn = document.getElementById("pending-btn");
const generateBtn = document.getElementById("generate");
const profileImg = document.getElementById("myImg");

/*==============================Candidates details======================================*/

const candidates = [
  {
    id: 1,
    name: "Bearcin Sweety",
    sex: "F",
    img: "https://github.com/Bearcin46.png",
  },
  {
    id: 2,
    name: "Swetha Ramesh",
    sex: "F",
    img: "https://github.com/swethadsalvatore.png",
  },
  {
    id: 3,
    name: "Hema Devi V",
    sex: "F",
    img: "https://github.com/hema-venkat3.png",
  },
  {
    id: 4,
    name: "Jeya Rosini. H",
    sex: "F",
    img: "https://github.com/jeya-rosini.png",
  },
  {
    id: 5,
    name: "Muthu Akalya A",
    sex: "F",
    img: "https://github.com/muthuakalya.png",
  },
  {
    id: 6,
    name: "Muthukumari M",
    sex: "F",
    img: "https://github.com/muthukumarimoorthi.png",
  },
  {
    id: 7,
    name: "Muhammed Shajid Shafee",
    sex: "M",
    img: "https://github.com/mshajid.png",
  },
  {
    id: 8,
    name: "Yogha Raj Dhayal N",
    sex: "M",
    img: "https://github.com/yrd369.png",
  },
  {
    id: 9,
    name: "Vijayavedhasekaran",
    sex: "M",
    img: "https://github.com/vedhatech002.png",
  },
  {
    id: 10,
    name: "Riyaz",
    sex: "M",
    img: "https://github.com/riyaz1000.png",
  },

  {
    id: 11,
    name: "Vasanthkumar S",
    sex: "M",
    img: "https://github.com/vk2401.png",
  },
  {
    id: 12,
    name: "Suriya K",
    sex: "M",
    img: "https://github.com/suriyamassmsd.png",
  },
  {
    id: 13,
    name: "Esakki M",
    sex: "M",
    img: "https://github.com/esakki2104prsnl.png",
  },
  {
    id: 14,
    name: "Sudharshan",
    sex: "M",
    img: "https://github.com/danielace1.png",
  },
  {
    id: 15,
    name: "Dinesh S",
    sex: "M",
    img: "https://github.com/dineshdevelope.png",
  },
  {
    id: 16,
    name: "KishoreKumar K",
    sex: "M",
    img: "https://github.com/kishorekumar-kp.png",
  },
  {
    id: 17,
    name: "Gayathri H G",
    sex: "F",
    img: "https://github.com/gayathrihg.png",
  },
  {
    id: 18,
    name: "Mohammed Mushkir",
    sex: "M",
    img: "https://github.com/mushkir.png",
  },
  {
    id: 19,
    name: "Khaja Sharif",
    sex: "M",
    img: "https://github.com/sharif-22.png",
  },
];

/*==============================Generate random names and numbers======================================*/
//generate Random Numbers
let randomNumber = () => {
  let randomPick = Math.floor(Math.random() * candidates.length + 1);
  return randomPick;
};
//generate random names
let randomName = () => {
  let randomid = randomNumber();
  //finding in array
  let findCandidates = candidates.find((val) => {
    return val.id === randomid;
  });
  let candidate = findCandidates.name;
  let image = findCandidates.img;
  return [candidate, image];
};

/*========================================Empty Array======================================*/
let completed = [];
let pending = [];
let absent = [];

//store current candidate name
let currentCandidateName;

/*==============================function to Generate names on clicking===============================*/
generateBtn.addEventListener("click", () => {
  randomNumber();
  //setting name in display
  let randomCandidate = randomName();
  profileImg.src = randomCandidate[1];
  currentCandidateName = randomCandidate[0];
  displayName.textContent = currentCandidateName;
  completedBtn.classList.remove("hidden");
  absentBtn.classList.remove("hidden");
  pendingBtn.classList.remove("hidden");
  profileImg.classList.remove("hidden");
  startConfettiAnimation();
});

/*==============================on clicking completed======================================*/
completedBtn.addEventListener("click", () => {
  let status = "completed";
  checkStatus(status);
});

/*==============================on clicking absent button======================================*/
absentBtn.addEventListener("click", () => {
  let status = "absent";
  checkStatus(status);
});

/*==============================on clicking pending button======================================*/
pendingBtn.addEventListener("click", () => {
  let status = "pending";
  checkStatus(status);
});

/*==============================function for checking status======================================*/
function checkStatus(status) {
  if (status === "completed") {
    //just push to array
    completed.push(currentCandidateName);
    displayName.textContent = "Let's Go 🚀";
    hideButton();
  } else if (status === "absent") {
    //display names
    absent.push(currentCandidateName);
    let absentList = document.getElementById("absent-list");
    absentList.innerHTML = "";
    for (val of absent) {
      let list = document.createElement("li");
      list.textContent = `⁕ ${val} is absent `;
      absentList.appendChild(list);
    }
    displayName.textContent = "Let's Go 🚀";
    hideButton();
  } else {
    //display names
    pending.push(currentCandidateName);
    let pendingList = document.getElementById("pending-list");
    pendingList.innerHTML = "";
    for (val of pending) {
      let list = document.createElement("li");
      list.textContent = `⁕ ${val} had not completed today's task`;
      pendingList.appendChild(list);
    }
    displayName.textContent = "Let's Go 🚀";
    hideButton();
  }
}

/*==============================add - "hidden" class======================================*/
function hideButton() {
  completedBtn.classList.add("hidden");
  absentBtn.classList.add("hidden");
  pendingBtn.classList.add("hidden");
  profileImg.classList.add("hidden");
}

/*==============================function to start the animation======================================*/
function startConfettiAnimation() {
  party.confetti(profileImg);
  setTimeout(stopConfettiAnimation, 2000);
}

/*==============================function to end the animation======================================*/
function stopConfettiAnimation() {
  party.clear();
}
