import JustValidate from "just-validate";
import { v4 as uuidv4 } from "uuid";
import party from "party-js";
const formEl = document.getElementById("formData");

const localStorageKey = "customerDetails";
const validateForm = new JustValidate("#formData", {
  validateBeforeSubmitting: true,
});
console.log(validateForm);

//JS validation

validateForm.addField("#name", [
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
validateForm.addField("#mobile", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 10,
  },
  {
    rule: "maxLength",
    value: 10,
  },
]);
validateForm.addField("#email", [
  {
    rule: "required",
  },
  {
    rule: "email",
  },
]);
validateForm.addField("#address", [
  {
    rule: "required",
  },
]);
validateForm.addField("#quantity", [
  {
    rule: "required",
  },
]);
validateForm.addRequiredGroup(
  "#selected-coffee",
  "You should select at least one "
);

/*=============================================Validation on Success=======================================*/

validateForm.onSuccess(() => {
  const formData = new FormData(formEl);
  formData.append("id", uuidv4());
  const selectedCoffee = getSelectedCoffee();
  formData.append("SelectedCoffee", selectedCoffee[0]);
  formData.append("NumberOfItems", selectedCoffee[1]);
  const formValueObj = Object.fromEntries(formData.entries());
  console.log(formValueObj);

  //show details
  /*============================================confirmation ================================================*/
  const confirmationDiv = document.getElementById("confirmation");
  const orderMessageDiv = document.getElementById("orderMessage");
  const greetingEl = document.getElementById("greeting");
  const ordereditemsEl = document.getElementById("orderedItems");
  const totalCostEl = document.getElementById("totalCost");
  greetingEl.innerText = `Hi ${formValueObj.fullName} !! `;
  ordereditemsEl.innerText = ` ${formValueObj.SelectedCoffee} `;
  const totalOrderedItems = `${selectedCoffee[1]}`;
  const quantity = formValueObj.quantity;
  const totalCost = totalOrderedItems * quantity * 8;
  totalCostEl.textContent += totalCost;
  confirmationDiv.classList.remove("hidden");
  formEl.classList.add("hidden");

  //if ordered
  const orderBtn = document.getElementById("order");
  const cancelBtn = document.getElementById("cancel");
  const dismissBtn = document.getElementById("dismiss");
  const table = document.getElementById("tableFormat");
  orderBtn.addEventListener("click", () => {
    confirmationDiv.classList.add("hidden");
    orderMessageDiv.classList.remove("hidden");
    table.classList.remove("hidden");
    startConfettiAnimation();
  });
  //dismiss
  dismissBtn.addEventListener("click", () => {
    orderMessageDiv.classList.add("hidden");
    formEl.classList.remove("hidden");
    formEl.reset();
  });
  // if cancelled
  cancelBtn.addEventListener("click", () => {
    confirmationDiv.classList.add("hidden");
    formEl.classList.remove("hidden");
    table.classList.add("hidden");
    formEl.reset();
  });

  /*======================================================================================================*/
  const newCustomerDetails = [];
  //get existing local storage value
  const existingData = localStorage.getItem(localStorageKey);

  const existingDataArray = JSON.parse(existingData);

  if (existingDataArray) {
    existingDataArray.push(formValueObj);
    localStorage.setItem(localStorageKey, JSON.stringify(existingDataArray));
  } else {
    newCustomerDetails.push(formValueObj);
    localStorage.setItem(localStorageKey, JSON.stringify(newCustomerDetails));
  }
  getallcustomerDetails();
});
/*=============================================Selected coffee details=======================================*/
function getSelectedCoffee() {
  let form = document.getElementById("formData");
  let checkboxes = form.elements["coffee"];
  let selectedValues = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedValues.push(checkboxes[i].value);
      // console.log(selectedValues);
    }
  }
  const totalItems = selectedValues.length;
  const orderedItems = selectedValues.join(", ");
  alert(orderedItems);
  return [orderedItems, totalItems];
}

/*=============================================Create table with details=======================================*/

function getallcustomerDetails() {
  //get all stored data available in local
  var customerData = localStorage.getItem(localStorageKey);
  var customerDataArr = JSON.parse(customerData);

  const customerCard = document.querySelector("#customerDataTable");
  const tableEl = document.getElementById("customerDataTable");
  //display;
  if (customerDataArr && customerDataArr.length > 0) {
    customerCard.classList.remove("hidden");
    tableEl.innerHTML = "";
    const newFinalValue = [];

    customerDataArr.map((DataObj, index) => {
      const trEl = document.createElement("tr");
      const tdEl = document.createElement("td");
      const tdCustomerNoEl = document.createElement("td");
      const td2El = document.createElement("td");
      const td3El = document.createElement("td");
      const td4El = document.createElement("td");
      const td5El = document.createElement("td");
      const deleteBtnEl = document.createElement("button");

      tdCustomerNoEl.classList.add("px-2", "py-1", "border");
      tdCustomerNoEl.textContent = index + 1;

      tdEl.classList.add("px-2", "py-1", "border");
      tdEl.textContent = DataObj.fullName;

      td2El.classList.add("px-2", "py-1", "border");
      td2El.textContent = DataObj.mobile;
      td3El.classList.add("px-2", "py-1", "border");
      td3El.textContent = DataObj.SelectedCoffee;
      td4El.classList.add("px-2", "py-1", "border");
      td4El.textContent = DataObj.address;
      td5El.classList.add("px-2", "py-1", "border");

      deleteBtnEl.textContent = "Delete";
      deleteBtnEl.classList.add("deleteEl", "deleteBtn");
      deleteBtnEl.addEventListener("click", () => {
        deleteDetails(DataObj);
      });
      td5El.append(deleteBtnEl);
      trEl.append(tdCustomerNoEl, tdEl, td2El, td3El, td4El, td5El);

      newFinalValue.push(trEl);
    });
    newFinalValue.forEach((element) => {
      tableEl.append(element);
    });
  } else {
    console.log("No value available on local Storage");
    customerCard.classList.add("hidden");
  }
}

function deleteDetails(data) {
  const existingData = localStorage.getItem(localStorageKey);
  const existingDataArray = JSON.parse(existingData);
  if (existingDataArray.length > 0) {
    const filteredDataArr = existingDataArray.filter((el) => el.id !== data.id);
    localStorage.setItem(localStorageKey, JSON.stringify(filteredDataArr));
    getallcustomerDetails();
  }
}

document.addEventListener("DOMContentLoaded", () => getallcustomerDetails());

/*==============================function to start the animation======================================*/
const orderSectionDiv = document.getElementById("orderSection");
function startConfettiAnimation() {
  party.confetti(orderSectionDiv);
  setTimeout(stopConfettiAnimation, 5000);
}

/*==============================function to end the animation======================================*/
function stopConfettiAnimation() {
  party.clear();
}
