const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(values) { 
  // let total = 0;

  // for (i = 0; i < values.length; i++) {
  //   total += values[i];
  // }
  // return total;

  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  // let total = 1;

  // for (i = 0; i < values.length; i++) {
  //   total *= values[i];
  // }
  // return total;

   return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(base,exp) {
  total = 1;

	while(exp > 0) {
    total *= base;
    exp--;
  }
  return total;
};

const factorial = function(value) {
	if(value === 0)
    return 1;
  return value * factorial(value - 1);
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
