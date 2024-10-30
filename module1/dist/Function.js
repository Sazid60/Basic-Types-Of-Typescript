"use strict";
//Learning Functions in Typescript
//  Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// Arrow Function 
var addArrow = function (num1, num2) { return num1 + num2; };
//  Default Value setting
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add(2, 10);
// Method (kuno object er moddhe jodi function thake tokhon tahke method bole)
var poorUser = {
    name: "Sazid",
    balance: 0,
    addBalance: function (balance) {
        return "My New Balance : ".concat(this.balance + balance);
    }
};
// complex playing with array
var array = [1, 2, 3, 4, 5];
var newArray = array.map((function (element) { return element * element; }));
