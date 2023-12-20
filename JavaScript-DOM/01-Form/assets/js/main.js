const formEl = document.forms.formData;
const btnEl = document.querySelector("form button");
const termsEl = formEl.elements.terms;
const confirmationDiv = document.getElementById("confirmation");
const formDiv = document.getElementById("formData");

const handleSubmit = (event) => {
  event.preventDefault();
  if (termsEl.checked) {
    handleConfirmation();
    //send to backend
    const formData = [...new FormData(formEl)];
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    console.log("JSON BODY:", jsonData);
    con;
  } else if (!termsEl.checked) {
    alert("You forgot to agree with our terms and conditions");
  }
};

formEl.addEventListener("submit", handleSubmit);
function handleConfirmation() {
  alert("Thank you for choosing us! Our team will get you back!");
  confirm();
  confirmationDiv.classList.remove("hidden");
  formDiv.classList.add("hidden");
}

function confirm() {
  const nameEl = document.getElementById("firstName").value;
  const thanksEl = document.getElementById("thankCustomer");
  thanksEl.textContent = `Thank you for trusting us ${nameEl} !`;
}

const returnEl = document.getElementById("return");
returnEl.addEventListener("click", () => {
  confirmationDiv.classList.add("hidden");
  formDiv.classList.remove("hidden");
  const formDataEl = document.getElementsByName("formData");
  formDataEl.elements.reset();
});
