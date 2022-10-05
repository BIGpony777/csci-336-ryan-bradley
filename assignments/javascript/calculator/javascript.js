document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-button");
    const subButton = document.getElementById("subtract-button");
    const resetButton = document.getElementById("reset-button");
    const result = document.getElementById("result-value");

    addButton.onclick = function() {
        const numA = document.getElementById("number-a").value;
        const numB = document.getElementById("number-b").value;
       if(numA == "" || numB == "") {
         result.textContent = "you need to enter a number"}
       else {
         result.textContent = parseInt(numA) + parseInt(numB);
       };
    };

    subButton.onclick = function() {
        const numA = document.getElementById("number-a").value;
        const numB = document.getElementById("number-b").value;
        if(numA == "" || numB == "") {
            result.textContent = "you need to enter a number"}
          else {
            result.textContent = parseInt(numA) - parseInt(numB);
          };
    };

    resetButton.onclick = function() {
        document.getElementById("number-a").value = "";
        document.getElementById("number-b").value = "";
        result.textContent = "";
    };
    
  }, false);