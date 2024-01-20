import JustValidate from "just-validate";
import { formatMyDate } from "./utils";
const localStorageKey = "userDetails";
const registerEl = document.getElementById("register");
const loginEl = document.getElementById("login");
const loginSloganEl = document.getElementById("loginSlogan");
const registerSloganEl = document.getElementById("registerSlogan");
const ipAddressDiv = document.getElementById("ipAddressDiv");
const tableFormatDiv = document.getElementById("tableFormat");
const logOutDiv = document.getElementById("logOutDiv");
const welcomeText = document.getElementById("loginText");

const signupFormEl = document.getElementById("signupForm");
const validateForm = new JustValidate("#signupForm", {
  validateBeforeSubmitting: true,
});

validateForm.addField("#signup-userName", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 24,
  },
]);
validateForm.addField("#signup-email", [
  {
    rule: "required",
  },
  {
    rule: "email",
  },
]);
validateForm.addField("#signup-password", [
  {
    rule: "required",
  },
  {
    rule: "password",
  },
]);
validateForm.addField("#cPassword", [
  {
    rule: "required",
  },
  {
    validator: (value, fields) => {
      if (fields["#signup-password"] && fields["#signup-password"].elem) {
        const repeatPasswordValue = fields["#signup-password"].elem.value;

        return value === repeatPasswordValue;
      }

      return true;
    },
    errorMessage: "Passwords should be the same",
  },
]);

/*===========================================Validation on success(signup)==========================================*/
validateForm.onSuccess((e) => {
  e.preventDefault();
  const formData = new FormData(signupFormEl);
  const signupInfo = formatMyDate(Date.now());
  formData.append("signupAt", signupInfo);
  const formValueObj = Object.fromEntries(formData.entries());
  const userDetails = {
    userName: formValueObj.username,
    password: formValueObj.password,
    signUpTime: formValueObj.signupAt,
  };
  console.log(userDetails);
  const newUserdata = [];
  const existingData = JSON.parse(localStorage.getItem(localStorageKey));
  if (existingData) {
    console.log(existingData);
    existingData.push(userDetails);
    localStorage.setItem(localStorageKey, JSON.stringify(existingData));
  } else {
    newUserdata.push(userDetails);
    localStorage.setItem(localStorageKey, JSON.stringify(newUserdata));
  }
  alert("Account created Successfully");
  routeToLogin();
  //change to login page
});

//================================================Function to switch============================================//
function routeToLogin() {
  registerEl.classList.add("hidden");
  loginEl.classList.remove("hidden");
  loginSloganEl.classList.remove("hidden");
  registerSloganEl.classList.add("hidden");
  signupFormEl.reset();
}

function routeToRegister() {
  registerEl.classList.remove("hidden");
  loginEl.classList.add("hidden");
  loginSloganEl.classList.add("hidden");
  registerSloganEl.classList.remove("hidden");
}

/*================================================click to login==============================================*/
const loginHereEl = document.getElementById("loginHere");
loginHereEl.addEventListener("click", () => {
  routeToLogin();
});

/*===============================================register button=============================================*/
const registerBtnEl = document.getElementById("registerBtn");
registerBtnEl.addEventListener("click", () => {
  routeToRegister();
});

/*=================================================Validate Login===========================================*/
const loginFormEl = document.getElementById("loginForm");
const validateLoginForm = new JustValidate("#loginForm", {
  validateBeforeSubmitting: true,
});
validateLoginForm.addField("#loginUserName", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 24,
  },
]);
validateLoginForm.addField("#loginPassword", [
  {
    rule: "required",
  },
  {
    rule: "password",
  },
]);
/*=================================================Login button=============================================*/
validateLoginForm.onSuccess((e) => {
  e.preventDefault();
  const loginFormData = new FormData(loginFormEl);
  const loginInfo = formatMyDate(Date.now());
  loginFormData.append("loginAt", loginInfo);
  const loginFormValueObj = Object.fromEntries(loginFormData.entries());
  const loginDetails = {
    username: loginFormValueObj.username,
    password: loginFormValueObj.password,
    loginTime: loginFormValueObj.loginAt,
  };

  //get details from signup info and verify with login
  const retrievedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (retrievedData === null) {
    alert("User not found! please signup");
    loginFormEl.reset();
  }
  const result = retrievedData.filter((val) => {
    return val.userName == loginDetails.username;
  });
  if (result.length == 0) {
    alert("User not Found");
  }
  if (loginDetails.password == result[0].password) {
    console.log("success");
    loginSuccess();
    //greet the user

    welcomeText.innerHTML = `<span style='font-size:28px;'>&#10024;</span> We missed you <span class="text-red-700 font-semibold">${loginDetails.username} !</span> <span style='font-size:28px;'>&#10024;</span>`;
    //store login details to local storage
    const newLogin = [];
    const loginUser = JSON.parse(localStorage.getItem("loginInformation"));
    if (loginUser) {
      loginUser.push(loginFormValueObj);
      localStorage.setItem("loginInformation", JSON.stringify(loginUser));
    } else {
      newLogin.push(loginFormValueObj);
      localStorage.setItem("loginInformation", JSON.stringify(newLogin));
    }

    loginHistory(loginDetails);
    logOutDiv.classList.remove("hidden");
  } else {
    alert("Login Failed! please check your details again.");
  }
  console.log(result);
});

/*=================================================Ip Address grabber =============================================*/

function loginSuccess() {
  const apiURL = "https://ipv4.icanhazip.com/";
  (async function handleapi() {
    try {
      const response = await fetch(apiURL);
      const ipAddress = await response.text();
      const ipaddressEl = document.getElementById("ipAddress");
      ipaddressEl.textContent = ipAddress;

      console.log(ipAddress);
    } catch (err) {
      console.log("Error occured :", err);
    }
  })();
  loginEl.classList.add("hidden");
  ipAddressDiv.classList.remove("hidden");
  tableFormatDiv.classList.remove("hidden");
}

/*=====================================Login  history retrive=================================================*/
function loginHistory(history) {
  const loginCredentials = JSON.parse(localStorage.getItem("loginInformation"));
  const filertedData = loginCredentials.filter((data) => {
    return data.username === history.username;
  });
  const loginCard = document.querySelector("#userDataTable");
  const tableEl = document.getElementById("userDataTable");
  if (loginCredentials && loginCredentials.length > 0) {
    tableEl.innerHTML = "";
    const newFinalValue = [];
    //map the filtered data
    filertedData.map((dataObj, index) => {
      console.log(dataObj);
      const trEl = document.createElement("tr");
      const tdCustomerNoEl = document.createElement("td");
      const tdEl1 = document.createElement("td");
      const tdEl2 = document.createElement("td");

      tdCustomerNoEl.classList.add("px-2", "py-2", "border");
      tdCustomerNoEl.textContent = index + 1;

      tdEl1.classList.add("px-2", "py-2", "border");
      tdEl1.textContent = dataObj.username;

      tdEl2.classList.add("px-2", "py-1", "border");
      tdEl2.textContent = dataObj.loginAt;

      // tdEl3.append(deleteBtnEl);
      trEl.append(tdCustomerNoEl, tdEl1, tdEl2);
      newFinalValue.push(trEl);
    });
    newFinalValue.forEach((element) => {
      tableEl.append(element);
    });
  } else {
    tableEl.innerHTML = "No Login History Available";
  }
}

/*==========================================logout==========================================================*/
logOutDiv.addEventListener("click", () => {
  routeToRegister();
  logOutDiv.classList.add("hidden");
  ipAddressDiv.classList.add("hidden");
  tableFormatDiv.classList.add("hidden");
  loginFormEl.reset();
  welcomeText.innerHTML = `We waited for you <span style="font-size:28px">
  &#128151;
</span>`;
});
