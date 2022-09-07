const checkChange = () => {
  document.getElementById("error-div").innerHTML = "";
  let billAmount = document.querySelector(`input[name=bill-amount]`).value;
  let cashGiven = document.querySelector(`input[name=cash-given]`).value;

  billAmount = parseFloat(billAmount);
  cashGiven = parseFloat(cashGiven);
  if (billAmount <= cashGiven) {
    calculate(cashGiven - billAmount);
  } else if (billAmount > cashGiven) {
    document.getElementById("error-div").innerHTML =
      "Do you wanna wash plates?";
  } else {
    document.getElementById("error-div").innerHTML = "Invalid Bill Amount";
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
