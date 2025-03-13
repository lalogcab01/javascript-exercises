const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
  }
  return currentSum;
};

const multiply = function(array) {
  currentProduct = 1;
  for (let i = 0; i < array.length; i++) {
    currentProduct *= array[i];
  }
  return currentProduct;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
