"use strict";

function clearInputs() {
  document.querySelector("#input-1").value = "";
  document.querySelector("#input-2").value = "";
}

function isValidData() {
  return document.querySelector("#input-1").value &&
    document.querySelector("#input-2").value
    ? true
    : false;
}

function addition() {
  if (!isValidData()) {
    return;
  }
  document.querySelector("#result").innerText =
    Number(document.querySelector("#input-1").value) +
    Number(document.querySelector("#input-2").value);
  clearInputs();
}

function subtraction() {
  if (!isValidData()) {
    return;
  }
  document.querySelector("#result").innerText =
    Number(document.querySelector("#input-1").value) -
    Number(document.querySelector("#input-2").value);
  clearInputs();
}

function multiplication() {
  if (!isValidData()) {
    return;
  }
  document.querySelector("#result").innerText =
    Number(document.querySelector("#input-1").value) *
    Number(document.querySelector("#input-2").value);
  clearInputs();
}

function division() {
  if (!isValidData()) {
    return;
  }
  if (document.querySelector("#input-2").value === "0") {
    document.querySelector("#result").innerText = "На ноль делить нельзя!";
    return;
  }
  document.querySelector("#result").innerText =
    Number(document.querySelector("#input-1").value) /
    Number(document.querySelector("#input-2").value);
  clearInputs();
}
