# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Array-Primitive

The concept is, to perform CRUD operations in array-primitive

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
```

## References:

<a href="https://youtu.be/fHrXYaJdaNI?si=EaiX8FxGuCCWUabM"><img src="https://i.ytimg.com/vi/fHrXYaJdaNI/maxresdefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
