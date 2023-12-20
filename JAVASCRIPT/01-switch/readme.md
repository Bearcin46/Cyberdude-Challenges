# Javascript Challenge

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

## Switch

The concept is, to make a schedule to wake up morning

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Switch</title>
  </head>
  <body>
    <script src="./main.js"></script>
  </body>
</html>
```

## Javascript Code

```javascript
//Switch case for alarm which need to at 4AM in monday &5AM on tuesday-friday ,8AM on saturday and 10AM on sunday

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Wake up at 4 AM");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Wake up at 5 AM");
    break;
  case "Saturday":
    console.log("Wake up at 8 AM");
    break;
  case "Sunday":
    console.log("Wake up at 10 AM");
    break;
  default:
    console.log("Sorry your input is invalid!");
}
```

## References:

<a href="https://youtu.be/xG5IUyZvbDk?si=OF4hj2ofe5JWEkXX"><img src="https://i.ytimg.com/vi/xG5IUyZvbDk/sddefault.jpg"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
