const numbers = [4, 3, -2, 0, 1, -5, -1, 6];
let count = 0;
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i]>0){count ++}
  else{sum += numbers[i]};
};
console.log("Positive count: " + count);
console.log("Negative sum: " + sum);