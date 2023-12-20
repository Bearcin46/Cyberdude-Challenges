//do manupulation

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
