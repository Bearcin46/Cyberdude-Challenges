let btnEl = document.getElementById("submit");

btnEl.addEventListener("click", () => {
  let nameEl = document.getElementById("enterName").value;
  let chocoName = document.getElementById("cName").value;
  let chocoQuantity = document.getElementById("cNumber").value;
  let chocoCost = document.getElementById("cCost").value;

  //total cost
  let totalCost = chocoQuantity * chocoCost;

  //create array of chocolists
  const chocolist = [
    "kitkat",
    "diarymilk",
    "fivestar",
    "milkybar",
    "snickers",
    "mars",
    "boundy",
  ];
  //check whether included or not
  const findChoco = chocolist.includes(chocoName);
  console.log(findChoco);

  //condition
  if (findChoco === true) {
    //constructor function
    function Chocolate(name, cname, quantity, cost) {
      alert(
        `Hi ${name}! here's your ${quantity} ${cname} \n Total cost : Rs.${cost} `
      );
    }
    let result = Chocolate(nameEl, chocoName, chocoQuantity, totalCost);
    console.log(typeof result);
  } else {
    alert(`Sorry! We dont have ${chocoName}`);
  }
});
