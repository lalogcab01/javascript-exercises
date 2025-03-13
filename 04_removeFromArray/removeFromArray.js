const removeFromArray = function() {
  array = arguments[0];

  for (let i = 1; i < arguments.length; i++) {

    value = arguments[i];

    let j = 0;
    while (j < array.length) {
      if (array[j] === value) {
        // The following lines are sugested in https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        // if (j > -1) {
        //   array.splice(j, 1);
        // }
        array.splice(j, 1);
      } else {
        j++;
      }
    }

  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
