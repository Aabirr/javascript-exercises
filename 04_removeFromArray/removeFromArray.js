const removeFromArray = function(...args) {
     const array = args[0];
     const myArr = [];

     array.forEach(element => {
        if(!args.includes(element)) {
            myArr.push(element);
        }
     });
     return myArr;
};

removeFromArray([1,2,3,4], 3);
// Do not edit below this line
module.exports = removeFromArray;
