const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");
let msg = document.querySelector(".message");
let crossBtn = document.querySelector(".close");

crossBtn.addEventListener("click", () => {
    msg.style.display = "none";
});

function calculator(date, num) {
  let sum = 0;
  if (date === "" || num === "") {
          msg.style.display = "block";
          msg.innerHTML = "Fields can't be empty!!!";
  } else {
      for (let i = 0; i < date.length; i++) {
          if (Number.isInteger(parseInt(date[i]))) {
              sum += parseInt(date[i]);
          }
      }
      if (sum % num === 0) {
          msg.innerHTML = "Hurray!!You are a lucky person! 🥳";
          msg.style.display = "block";
      } else {
          msg.innerHTML = "Oops!!Your birthday is not lucky 😕";
          msg.style.display = "block";
      }
  }
}

const showMessage = (message) => {
  displayMessage.innerText = message;
};

checkButton.addEventListener("click", (e) => {
  calculator(dateOfBirth.value, luckyNumber.value);
});
