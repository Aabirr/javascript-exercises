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
};
