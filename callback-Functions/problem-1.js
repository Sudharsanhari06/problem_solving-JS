// Write a JavaScript program to find multiply, add for the given number using the callback


function calculate(number, callback) {
    return callback(number);
  }

  function add(num) {
    return num + 10;
  }
  
  function multiplyByFive(num) {
    return num * 5;
  }

  let number = 4;
  let addedResult = calculate(number, addTen);
  let multipliedResult = calculate(number, multiplyByFive);
  
  console.log(`Original number: ${number}`);
  console.log(`After addition: ${addedResult}`);
  console.log(`After multiplication: ${multipliedResult}`);
  