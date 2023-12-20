# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Function-Expression

The concept is, to display quotes and their respective authors in a random manner

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
//do manupulation
const dateEl = document.getElementById("date-section");
const quotesEl = document.getElementById("displayQuotes");
const authorEl = document.getElementById("displayAuthor");
const btnEl = document.getElementById("btn");

let quotes = [
  {
    id: 1,
    quote:
      "Focus more on your desire than on your doubt, and the dream will take care of itself.",
    author: "– Mark Twain",
  },
  {
    id: 2,
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "– Winston S. Churchill",
  },
  {
    id: 3,
    quote:
      "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
    author: "― Abraham Lincoln",
  },
  {
    id: 4,
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "― Oliver Goldsmith",
  },
  {
    id: 5,
    quote:
      "The foundation stones for a balanced success are honesty, character, integrity, faith, love and loyalty.",
    author: "– Zig Ziglar",
  },
];

//generating random numbers
let randomNumber = () => {
  let randomPick = Math.floor(Math.random() * 6);
  return randomPick;
};

//function expression
let quotesGenerator = () => {
  //date
  let date = new Date();
  console.log(date.toLocaleDateString());
  //random number
  let randomid = randomNumber();
  //finding in array
  let findQuotes = quotes.find((val) => {
    return val.id === randomid;
  });
  console.log(` "${findQuotes.quote}"`);
  console.log(`${findQuotes.author}`);
};
quotesGenerator();
```

## References:

<a href="https://youtu.be/j4jO45mO5Cc?si=Xa2Uis2i1i2fI_nH"><img src="https://i.ytimg.com/vi/j4jO45mO5Cc/maxresdefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
