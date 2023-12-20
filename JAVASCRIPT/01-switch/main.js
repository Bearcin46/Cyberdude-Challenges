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
