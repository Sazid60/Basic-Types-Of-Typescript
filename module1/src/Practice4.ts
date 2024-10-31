// Problem 1: Destructure Array
// Write a function named getFirstTwoElements that takes an array of numbers and returns the first two elements using array destructuring.

const getFirstTwoElements = (array: number[]): number[] => {
    // Use array destructuring to get the first two elements
    const [first, second] = array;

    // Return them as an array
    return [first, second];
};

// Example usage
const numbers = [10, 20, 30, 40, 50];
const firstTwo = getFirstTwoElements(numbers);
console.log(firstTwo);  // Output: [10, 20]


// Problem 2: Destructure Object
// Create a function called getUserInfo that takes an object with properties name, age, and email. Use object destructuring to extract these properties and return a string in the format: "Name: [name], Age: [age], Email: [email]".
type User = {
    name: string;
    age: number;
    email: string;
};

const getUserInfo = ({ name, age, email }: User): string => {
    // Return the formatted string with square brackets around the properties
    return `Name: [${name}], Age: [${age}], Email: [${email}]`;
};

// Example usage
const userInfo = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

console.log(getUserInfo(userInfo));

// Problem 3: Nested Destructuring
// Implement a function named getCoordinates that takes an object representing a point in a 2D space with properties x and y, which are themselves objects containing latitude and longitude. Use nested destructuring to extract the coordinates.

type Point = {
    x: {
        latitude: number;
        longitude: number;
    };
    y: {
        latitude: number;
        longitude: number;
    };
};

const getCoordinates = ({ x: { latitude: xLat, longitude: xLong }, y: { latitude: yLat, longitude: yLong } }: Point): string => {
    // Return the formatted coordinates
    return `X Coordinates: [Latitude: ${xLat}, Longitude: ${xLong}], Y Coordinates: [Latitude: ${yLat}, Longitude: ${yLong}]`;
};

// Example usage
const point: Point = {
    x: {
        latitude: 34.0522,
        longitude: -118.2437,
    },
    y: {
        latitude: 40.7128,
        longitude: -74.0060,
    },
};

console.log(getCoordinates(point));



// Problem 4: Function Parameters with Destructuring
// Write a function called printBookDetails that takes an object with properties title, author, and year. Use destructuring in the function parameters to print the details in the format: "Title: [title], Author: [author], Year: [year]".
type Book = {
    title: string;
    author: string;
    year: number;
};

const printBookDetails = ({ title, author, year }: Book): void => {
    // Print the book details using destructured parameters
    console.log(`Title: [${title}], Author: [${author}], Year: [${year}]`);
};

// Example usage
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

printBookDetails(book);
// Output: Title: [The Great Gatsby], Author: [F. Scott Fitzgerald], Year: [1925]

// Problem 5: Default Values with Destructuring
// Create a function named createProfile that takes an object with properties username, age, and bio. Use destructuring to extract these properties and set default values for age (default to 18) and bio (default to "No bio available"). Return a profile string with the extracted values.
type Profile = {
    username: string;
    age?: number;  // Making age optional since it has a default value
    bio?: string;  // Making bio optional since it has a default value
};

const createProfile = ({ username, age = 18, bio = "No bio available" }: Profile): string => {
    // Return a formatted profile string
    return `Username: ${username}, Age: ${age}, Bio: ${bio}`;
};

// Example usage
const userProfile1 = {
    username: "john_doe",
    age: 25,
    bio: "Software Developer"
};

const userProfile2 = {
    username: "jane_smith"
    // age and bio are omitted
};

console.log(createProfile(userProfile1));
// Output: Username: john_doe, Age: 25, Bio: Software Developer

console.log(createProfile(userProfile2));
// Output: Username: jane_smith, Age: 18, Bio: No bio available

// Problem 6: Destructure in a Loop
// Write a function called logProducts that takes an array of objects representing products. Each product object has properties id, name, and price. Use destructuring in a loop to log the product details in the format: "[name] (ID: [id]) costs [price]".
type Product = {
    id: number;
    name: string;
    price: number;
};

const logProducts = (products: Product[]): void => {
    // Loop through each product and use destructuring to extract properties
    for (const { id, name, price } of products) {
        console.log(`${name} (ID: ${id}) costs ${price}`);
    }
};

// Example usage
const productList: Product[] = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 599.99 },
    { id: 3, name: "Tablet", price: 399.99 }
];

logProducts(productList);


// Problem 7: Destructure with Rest Operator
// Implement a function named extractDetails that takes an array of numbers and uses destructuring to extract the first number as first and the rest as rest. Return an object containing first and rest.

const extractDetails = (numbers: number[]): { first: number; rest: number[] } => {
    // Destructure the array to get the first number and the rest
    const [first, ...rest] = numbers;

    // Return an object containing first and rest
    return { first, rest };
};

// Example usage
const numberArray = [10, 20, 30, 40, 50];
const result = extractDetails(numberArray);

console.log(result);
// Output: { first: 10, rest: [20, 30, 40, 50] }


// Type alias in function 
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => {
    return x + y;
};

console.log(add(5, 3)); // Output: 8

// 
{
    type Greet = (name: string, greeting?: string) => string;

    const greet: Greet = (name, greeting = "Hello") => {
        return `${greeting}, ${name}!`;
    };

    console.log(greet("Alice")); // Output: Hello, Alice!
    console.log(greet("Bob", "Hi")); // Output: Hi, Bob!
}

// 
{
    type Sum = (...numbers: number[]) => number;

    const sum: Sum = (...nums) => {
        return nums.reduce((acc, curr) => acc + curr, 0);
    };

    console.log(sum(1, 2, 3, 4)); // Output: 10

}