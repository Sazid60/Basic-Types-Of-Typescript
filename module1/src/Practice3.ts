// Problem 1: Normal Function - Calculate Area
// Write a normal function named calculateArea that takes the width and height of a rectangle as parameters and returns the area. If either parameter is missing, set its default value to 1.

function calculateArea (width:number , height:number):number {
 return width * height
}

calculateArea(1,22)
// Problem 2: Arrow Function - Square a Number
// Create an arrow function named square that takes a number as an argument and returns its square.

const square = (a:number):number =>{
    return a*a
}

square(12)
// Problem 3: Default Values - Greeting Function
// Write a function called greet that takes a name and an optional greeting message. If the greeting message is not provided, set the default value to "Hello". The function should return a greeting string.

const greet = (name:string, msg?:string ):string =>{
return `${name}, ${msg}`
}

// using interfaces
greet('sazid', 'welcome')

type Data = {
    name: string;
    msg ?: string;
}

const greet1 = (data : Data):string =>{
return `${data.name}, ${data.msg}`
}

greet('sazid', 'welcome')


// Problem 5: Arrow Function - Check Even or Odd
// Create an arrow function named isEven that takes a number as an argument and returns true if the number is even, or false if it is odd.

const isEven = (num: number): boolean => {
    return num % 2 === 0;
};

// Example usage
console.log(isEven(4));  // Output: true
console.log(isEven(5));  // Output: false


// Problem 6: Normal Function - Convert to Celsius
// Write a normal function named toCelsius that takes a temperature in Fahrenheit as a parameter and returns the equivalent temperature in Celsius.
function toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9);
}

// Example usage
console.log(toCelsius(32));  // Output: 0
console.log(toCelsius(68));  // Output: 20



// Problem 8: Arrow Function - Filter Positive Numbers
// Write an arrow function named filterPositiveNumbers that takes an array of numbers and returns a new array containing only the positive numbers.

const filterPositiveNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num > 0);
};

// Example usage
const nums = [-1, 2, -3, 4, 5, -6];
console.log(filterPositiveNumbers(nums));  // Output: [2, 4, 5]


// Problem 9: Default Values - Power Function
// Create a function named power that takes two parameters: a base and an exponent. If the exponent is not provided, set its default value to 2. The function should return the base raised to the exponent.
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// Example usage
console.log(power(3));      // Output: 9 (3^2)
console.log(power(3, 3));   // Output: 27 (3^3)


