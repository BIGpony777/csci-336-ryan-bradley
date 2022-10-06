document.addEventListener('DOMContentLoaded', function () {
  const blueButton = document.getElementById("blue-button");
  const greenButton = document.getElementById("green-button");
  const redButton = document.getElementById("red-button");
  const yellowButton = document.getElementById("yellow-button");
  const textElement = document.getElementById("colorful-text");

  blueButton.onclick = function() {
    textElement.classList.add("blue");
    textElement.classList.remove("green");
    textElement.classList.remove("red");
    textElement.classList.remove("yellow");
  }

  greenButton.onclick = function() {
    textElement.classList.add("green");
    textElement.classList.remove("blue");
    textElement.classList.remove("red");
    textElement.classList.remove("yellow");
  }

  redButton.onclick = function() {
    textElement.classList.add("red");
    textElement.classList.remove("green");
    textElement.classList.remove("blue");
    textElement.classList.remove("yellow");
  }

  yellowButton.onclick = function() {
    textElement.classList.add("yellow");
    textElement.classList.remove("green");
    textElement.classList.remove("blue");
    textElement.classList.remove("red");
  }
}, false);