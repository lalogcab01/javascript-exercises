const repeatString = function(message, repetitions) {
  if (repetitions < 0) {
    return 'ERROR';
  }

  let outString = "";
  
  i = 0;
  while (i<repetitions) {
    outString = outString + message;
    i++;
  }

  return outString;
};

// Do not edit below this line
module.exports = repeatString;
