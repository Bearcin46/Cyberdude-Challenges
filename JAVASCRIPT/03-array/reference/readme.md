# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Array-Primitive

The concept is, to perform CRUD operations in array-reference

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
let userInput = prompt("Please enter your Buget");
const mobiles = [
  { brand: "samsung", model: "Galaxy S23 Ultra", price: 58351 },
  { brand: "samsung", model: "Galaxy Z Flip5", price: 61395 },
  { brand: "samsung", model: "Galaxy Z Fold5", price: 106300 },
  { brand: "samsung", model: "Galaxy A24 4G", price: 14689 },
  { brand: "samsung", model: "Galaxy A13 5G", price: 12038 },
  { brand: "samsung", model: "Galaxy M13 5G", price: 12672 },
  { brand: "apple", model: "iPhone 15 Pro Max", price: 153222 },
  { brand: "apple", model: "iPhone 15 Plus", price: 951375 },
  { brand: "apple", model: "iPhone 15 Pro", price: 101454 },
];

let output = mobiles
  .filter((val) => {
    return val.price <= userInput;
  })
  .map((val) => {
    return `Brand Name:${val.brand} Model: ${val.model} Price: ₹${val.price}`;
  });

for (let i = 0; i < output.length; i++) {
  console.log(output[i]);
}

console.log(`Total product Available on your budget is ${output.length}`);
// console.log(typeof(output))

//for apple
const reducedApple = mobiles
  .filter((val) => {
    return val.brand === "apple";
  })
  .map((val) => {
    return val.price;
  });
console.log(
  `The Range of Apple products we have is from ₹${Math.min(
    ...reducedApple
  )} to ₹${Math.max(...reducedApple)}`
);

//for samsung
const reducedSamsung = mobiles
  .filter((val) => {
    return val.brand === "samsung";
  })
  .map((val) => {
    return val.price;
  });
console.log(
  `The Range of Samsung products we have is from ₹${Math.min(
    ...reducedSamsung
  )} to ₹${Math.max(...reducedSamsung)}`
);
```

## References:

<a href="https://youtu.be/7AIMdzNQtkY?si=4CCVBStWT1xl4kNz"><img src="https://i.ytimg.com/vi/xPLa25ZDlI4/maxresdefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
