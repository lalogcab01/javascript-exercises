function gaussSum(num) {
  return (num * (num + 1))/2;
}
function isPositiveInteger(num) {
  if (Number.isInteger(num) && (num > 0)) {
    return true;
  }
  return false;
}

const sumAll = function(num1, num2) {
  if (isPositiveInteger(num1) && isPositiveInteger(num2)) {
    min = Math.min(num1, num2);
    max = Math.max(num1, num2);
    return gaussSum(max) - gaussSum(min - 1);
  }
  return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
