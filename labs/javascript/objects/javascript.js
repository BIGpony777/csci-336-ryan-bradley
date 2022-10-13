const numbers = [4, 3, -2, 0, 1, -5, -1, 6];

// Maybe write your funciont here.
function getCountSum (userArray) {
    let countAndSum = {count: 0, sum: 0};
    for(let i = 0; i < userArray.length; i++) {
      if(userArray[i]>0){countAndSum.count++}
      else{countAndSum.sum+= userArray[i]};
    };
    return countAndSum;
  }
  
  // Maybe call your function here.
  let answers = getCountSum(numbers);
  let count = answers.count;
  let sum = answers.sum;
  
  // Maybe output the results here with console.log.
  console.log("Positive count: " + count);
  console.log("Negative sum: " + sum);