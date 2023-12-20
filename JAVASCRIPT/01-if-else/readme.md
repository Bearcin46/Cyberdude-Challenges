# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## If-Else Conditions

The concept is, to check whether the chocolate asked by customer is available or not?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>If-else</title>
  </head>
  <body>
    <input type="text" placeholder="Enter your Full Name?" id="enterName" />
    <input type="text" placeholder="Enter Chocolate Name" id="cName" />
    <input type="number" placeholder="Enter Chocolate Quantity" id="cNumber" />
    <input type="number" placeholder="Enter the cost you want" id="cCost" />
    <button id="submit">Submit</button>
    <!-------- script ------->
    <script src="./main.js"></script>
  </body>
</html>
```

## Javascript Code

```javascript
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
    // function
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
```

## References:

<a href="https://youtu.be/WebG_D9-U80?si=bQtpInrSZ3Gskg9u"><img src="https://i.ytimg.com/vi/WebG_D9-U80/maxresdefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
