//creating a array
let fruitBasket = [];

//updating a array
function adding(fruits) {
  fruitBasket.push(fruits);
}
adding("orange");
adding("grapes");
adding("apple");
adding("mango");
console.log(fruitBasket);

//reading
for (fruit in fruitBasket) {
  console.log(`I love eating ${fruitBasket[fruit]}`);
}

//update

fruitBasket.splice(1, 2, "pineapple", "strawberry");
console.log(fruitBasket);

//deleting
function deleting(fruits) {
  findIndex = fruitBasket.indexOf(fruits);
  fruitBasket.splice(findIndex, 1);
  console.log(`You have deleted ${fruits} from the basket`);
}
deleting("orange");
console.log(fruitBasket);
