"use strict";
//DOM elements
const counterDescription = document.querySelector(".counter-description");
const counterValue = document.querySelector(".counter-value");
const increment = document.querySelector(".incrementBTN");
const decrement = document.querySelector(".decrementBTN");
const reset = document.querySelector(".resetBTN");
const div = document.querySelector(".counter-container");

//counter variable
let counter = 0;
//incrment function
const incrementfn = function () {
  counter++;
  counterValue.textContent = counter;
};

//decrement function
const decrementfn = function () {
  counter--;
  counterValue.textContent = counter;
};
//reset function

const resetfn = function () {
  counter = 0;
  counterValue.textContent = counter;
};
//set background color function
const setbc = function () {
  if (counter > 0) {
    div.style.backgroundColor = "#2feb1a";
  } else if (counter < 0) {
    div.style.backgroundColor = "#f71616";
  } else {
    div.style.backgroundColor = "#21e9ff";
  }
};
//event listeners
increment.addEventListener("click", function () {
  incrementfn();
  setbc();
});
decrement.addEventListener("click", function () {
  decrementfn();
  setbc();
});
reset.addEventListener("click", function () {
  resetfn();
  setbc();
});
