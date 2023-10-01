// @ts-nocheck
//get pin
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

///show this pin to the HTML element
function generatePin() {
  const pin = getPin();
  const showPinField = document.getElementById("display-pin");
  showPinField.innerText = pin;
}
//submit
document.getElementById("submit").addEventListener("click", function () {
  //for display pin
  const getDisplayPin = document.getElementById("display-pin");
  const currentshowingPin = getDisplayPin.innerText;
  // for typed pin
  const typedPin = document.getElementById("display-key-pin");
  const curentTypedPin = typedPin.value;
  //check the submitting
  if (currentshowingPin == curentTypedPin) {
    document.write("Login Successfully");
  } else {
    document.write(" Wrong PIN please try again");
  }
});

//field validation
const succesLogin = document.getElementById("");
