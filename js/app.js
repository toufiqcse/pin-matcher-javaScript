// @ts-nocheck
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  const showPinField = document.getElementById("display-pin");
  // @ts-ignore
  showPinField.innerText = pin;
  showPinField.value = pin;
}

//function for calculate
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const keyPinShow = document.getElementById("display-key-pin");
  if (isNaN(number)) {
    if (number == "C") {
      keyPinShow.value = "";
    }
  } else {
    keyPinShow.value += number;
  }
});

//submit
document.getElementById("submit").addEventListener("click", function () {
  const getDisplayPin = document.getElementById("display-pin").value;
  const getTypedPin = document.getElementById("display-key-pin").value;
  const succesLogin = document.getElementById("login-success");
  const failLogin = document.getElementById("login-fail");
  if (getDisplayPin == getTypedPin) {
    succesLogin.style.display = "block";
    failLogin.style.display = "none";
  } else {
    failLogin.style.display = "block";
    succesLogin.style.display = "none";
  }
});

console.log("hellooooooo");
