const newLogin = [];
const loginUser = localStorage.getItem(
  "loginInformation",
  JSON.parse(loginDetails)
);
if (loginUser) {
  loginUser.push(loginFormValueObj);
  localStorage.setItem("loginInformation", JSON.stringify(loginUser));
} else {
  newLogin.push(loginFormValueObj);
  localStorage.setItem("loginInformation", JSON.stringify(newLogin));
}
