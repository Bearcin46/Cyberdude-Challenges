const listOfDishes = document.getElementsByClassName("dishes");
const list = [];

for (dish of listOfDishes) {
  list.push(dish.textContent);
}
console.log(list);
console.log(`I love eating ${list.join(", ")}.`);
