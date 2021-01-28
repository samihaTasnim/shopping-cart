// function to increase the amount beside the plus sign
function increase(idOfInput, idOfOutput, fixNum) {
  document.getElementById(idOfInput).value++;
  let total = fixNum + parseFloat(document.getElementById(idOfOutput).innerText);
  document.getElementById(idOfOutput).innerText = total;
}

// function to decrease the amount beside the plus sign
function decrease(idOfInput, idOfOutput, fixNum) {
  // a condition that stops the minus button to have a value less then zero
  if(document.getElementById(idOfInput).value < 1) {
    return null;
  }
  document.getElementById(idOfInput).value--;
  let total = parseFloat(document.getElementById(idOfOutput).innerText) - fixNum;
  document.getElementById(idOfOutput).innerText = total;
}

// function to set the total value in the bottom area
function setTotal () {
  // setting the total value
  document.getElementById("total").innerText = parseFloat(document.getElementById("price").innerText) + parseFloat(document.getElementById("price-2").innerText);
  // setting the tax value
  document.getElementById("tax").innerText = 5;
  // setting the subTotal value
  document.getElementById("subTotal").innerText = parseFloat(document.getElementById("total").innerText) + parseFloat(document.getElementById("tax").innerText);
  }
  setTotal()

// event handlers for plus and minus sign triggring
document.getElementById("plus-btn").addEventListener("click", function() {
  increase("input-value", "price", 1219);
  setTotal()
})

document.getElementById("minus-btn").addEventListener("click", function() {
  decrease("input-value", "price", 1219);
  setTotal()
})

document.getElementById("plus-btn-2").addEventListener("click", function() {
  increase("input-value-2", "price-2" , 59)
  setTotal()
})

document.getElementById("minus-btn-2").addEventListener("click", function() {
  decrease("input-value-2", "price-2", 59);
  setTotal()
})