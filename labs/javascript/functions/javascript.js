const numbers = [4, 3, -2, 0, 1, -5, -1, 6];

// Maybe write your funciont here.
function getCountSum (userArray) {
    let returnArray = [0,0];
    
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i]>0){returnArray[0] ++}
  else{returnArray[1] += numbers[i]};
};
return returnArray;
}

// Maybe call your function here.
let answers = getCountSum(numbers);
let count = answers[0];
let sum = answers[1];

// Maybe output the results here with console.log.
console.log("Positive count: " + count);
console.log("Negative sum: " + sum);