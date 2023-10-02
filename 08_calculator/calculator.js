<<<<<<< HEAD
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;

  for (a of array) sum += a;

  return sum;
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) return 1;

  let num = 1;

  for (i = n; i > 0; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
=======
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(myArray) {
    //let myArray = [];

    let sum = 0;

    for (i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    return sum;
};

const multiply = function(array) {
    return array.reduce((a, b) => a * b);
 };

const power = function(a, b) {
    return Math.pow(a, b);
 };

const factorial = function(n) {
    if (n === 0) return 1;

    let a = 1;

    for(i = n; i > 0; i--){
        a *= i;
    }
    return a;
 };

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
>>>>>>> 91ec5372dd4871b8de0d84cc80d15b8ecd77a3c9
};
