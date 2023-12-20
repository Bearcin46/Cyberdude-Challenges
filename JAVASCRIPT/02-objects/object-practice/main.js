//Create a object about ur self with all datatype values. And try to manipulate it.

const myData = {
  name: "Bearcin Sweety",
  favNumber: 3,
  isGraduated: true,
  email: "sweetybrzn@abcd.com",
  hobbies: ["eat", "sleep", "code"],
  skills(val) {
    switch (val) {
      case "softSkills":
        return "I have good communication, interpersonal as well as good analytical skills.";
      case "others":
        return "I love story writing";
      default:
        return `React JS, TailwindCSS, Node JS, Mongo DB`;
    }
  },
  goal() {
    return "Setting an inspiration for those who look at me";
  },
  summary() {
    return `Hi!, I'm ${this.name} and my favorite number is ${
      this.favNumber
    } and my goal is, ${this.goal()}`;
  },
};

console.log(myData.skills("softSkills"));
console.log(myData.name);
//update
// myData.favNumber = 7;
// console.log(myData.favNumber);
// console.log(myData.goal());

//delete
// delete myData.favNumber;
// console.log(myData.favNumber)
// console.log(myData.summary())

//create
const country = {
  livesCountry: "Malaysia",
};
const addingNew = Object.assign(myData, country);

console.log(myData);
console.log(country);
