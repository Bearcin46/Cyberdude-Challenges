const formEl = document.forms.formData;
const btnEl = document.querySelector("form button");
const termsEl = formEl.elements.terms;
const confirmationDiv = document.getElementById("confirmation");
const formDiv = document.getElementById("formData");

/*==================================================Main function "Submit====================================*/

const handleSubmit = (event) => {
  event.preventDefault();

  if (termsEl.checked) {
    //send to backend
    const formData = [...new FormData(formEl)];
    const jsonData = Object.fromEntries(formData);
    const stringifiedData = JSON.stringify(jsonData);
    localStorage.setItem("Details", stringifiedData); // const jsonData = JSON.stringify(Object.fromEntries(formData));
    // console.log("JSON BODY:", jsonData);
    handleConfirmation(jsonData);
  } else if (!termsEl.checked) {
    alert("You forgot to agree with our terms and conditions");
  }
};

/*====================================================Submit button=========================================*/

formEl.addEventListener("submit", handleSubmit);

/*====================================================Handling the info=========================================*/

function handleConfirmation(data) {
  alert("Thank you for choosing us! Our team will get you back!");
  confirm(data);
  confirmationDiv.classList.remove("hidden");
  formDiv.classList.add("hidden");
}

function confirm(data) {
  console.log(data);
  const nameEl = data.firstName;
  const emailEl = data.email;
  const thanksEl = document.getElementById("thankCustomer");
  // const displayEmailEl = document.getElementById("displayEmail");
  thanksEl.textContent = `Thank you for trusting us ${nameEl} !`;
  // displayEmailEl.textContent = `at ${emailEl}`;
}

/*==================================================Return Home Button=======================================*/

const returnEl = document.getElementById("return");
returnEl.addEventListener("click", () => {
  confirmationDiv.classList.add("hidden");
  formDiv.classList.remove("hidden");
  const formDataEl = document.getElementsByName("formData");
  console.log(formDataEl);
  formDataEl[0].reset();
});
