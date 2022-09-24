let checkBtn = document.querySelector(".check-button");
let errorDiv = document.querySelector("#error-div");
const checkChange = () => {
  errorDiv.innerHTML = "";
  let billAmount = document.querySelector(`input[name=bill-amount]`).value;
  let cashGiven = document.querySelector(`input[name=cash-given]`).value;
  if (billAmount == "" || cashGiven == "") {
    errorDiv.style.color = "red";
    errorDiv.innerHTML = "Please fill both the fields";
  } else {
    billAmount = Number(billAmount);
    cashGiven = Number(cashGiven);
    if (billAmount < 0 || cashGiven < 0) {
      errorDiv.style.color = "red";
      errorDiv.innerHTML = "Please enter valid values";
    } else if (billAmount <= cashGiven) {
      errorDiv.style.color = "";
      calculate(cashGiven - billAmount);
    } else if (billAmount > cashGiven) {
      errorDiv.style.color = "";
      errorDiv.innerHTML = "Do you wanna wash plates?";
    } else {
      errorDiv.style.color = "red";
      errorDiv.innerHTML = "Please enter valid values";
    }
  }
};

const calculate = (number) => {
  let notes = [2000, 500, 100, 20, 10, 5, 1];
  for (let i = 0; i < notes.length; i++) {
    console.log(number / notes[i]);
    let count = Math.floor(number / notes[i]);
    let note = notes[i].toString();
    document.getElementById(note).innerText = count;
    number = number % notes[i];
  }
};

checkBtn.addEventListener("click", checkChange);
