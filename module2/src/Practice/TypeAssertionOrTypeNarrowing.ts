{
    // Explanation of Type Assertion and Type Narrowing
    // In TypeScript, type assertion and type narrowing are used to control and refine types in specific contexts, making your code safer and reducing errors.

    // Type Assertion: It allows you to manually specify the type of a variable. TypeScript will treat the variable as the asserted type, regardless of its original type.

    // Syntax: (variable as Type)
    // Example: (anything as string).includes("text")
    // Type Narrowing: This refers to refining a variable’s type using conditions or checks. Based on checks like typeof, instanceof, or custom conditions, TypeScript infers a more specific type within a certain block of code.

    // Example:

    function process(input: string | number) {
        if (typeof input === "string") {
            console.log(input.toUpperCase());
        } else {
            console.log(input.toFixed(2));
        }
    }
    // Practice Problems
    // Write a function isString that takes a parameter of type string | number. If the parameter is a string, return true; otherwise, return false. Use type assertion or narrowing as needed.

    const isString = (input: string | number): boolean => {
        if (typeof input === "string") {
            return true
        } else {
            return false
        }
    }
    const res = isString("sazid") as boolean // assertion applied to the return types



    // Create a function describeInput that accepts a parameter input of type string | boolean | number. The function should:

    // Return "This is a string" if the input is a string.
    // Return "This is a boolean" if the input is a boolean.
    // Return the input multiplied by 2 if it is a number.
    // Define a function convertToUpperCase that accepts a parameter input of type string | undefined. Use type assertion or narrowing to check if the input is a string and, if so, return it in uppercase.

    const describeInput = (input: string | boolean | number): string | number | undefined => {
        if (typeof input === "string") {
            return `This is a string: ${input.toUpperCase()}`;
        } else if (typeof input === "boolean") {
            return "This is a boolean";
        } else if (typeof input === "number") {
            return input * 2;
        }
    };

    // Testing describeInput function with assertions
    const res1 = describeInput("Sazid") as string;  // "This is a string: SAZID"
    const res2 = describeInput(true) as string;     // "This is a boolean"
    const res3 = describeInput(12) as number;       // 24

    // Define the convertToUpperCase function
    const convertToUpperCase = (input: string | undefined): string | undefined => {
        if (typeof input === "string") {
            return input.toUpperCase();
        }
        return input;
    };

    // Testing convertToUpperCase function with assertions
    const upper1 = convertToUpperCase("hello") as string;      // "HELLO"
    const upper2 = convertToUpperCase(undefined) as undefined; // undefined





    // Create a type Animal with properties name and sound. Write a function makeSound that takes a parameter of type Animal | string. If it's an Animal, log the sound; if it's a string, log "Unknown sound".

    type Animal = {
        name: string;
        sound: string;
    };

    const makeSound = (input: Animal | string) => {
        if (typeof input === "string") {
            console.log("Unknown sound");
        } else {
            // Use type assertion to assert that 'input' is of type 'Animal'
            const animal = input as Animal; // Type assertion
            console.log(animal.sound);
        }
    };

    // Example usage:
    const dog: Animal = { name: "Dog", sound: "Bark" };
    makeSound(dog); // Logs: Bark

    makeSound("Cat"); // Logs: Unknown sound


    // Write a function getArrayLength that takes an argument of type number[] | string[]. Use type narrowing to return the length of the array if it’s of type number[]. If it’s of type string[], return the concatenated length of all the strings.
    const getArrayLength = (input: number[] | string[]): number => {
        // Check if the input is an array
        if (Array.isArray(input)) {
            // Narrow down the type by asserting
            if (typeof input[0] === "number") {
                return input.length; // Type assertion: input is number[]
            } else if (typeof input[0] === "string") {
                return (input as string[]).reduce((totalLength, str) => totalLength + str.length, 0); // Type assertion: input is string[]
            }
        }
        // If input is not of expected types
        throw new Error("Invalid input type: expected number[] or string[]");
    };

    // Example usage:
    const numberArray = [1, 2, 3, 4];
    console.log(getArrayLength(numberArray)); // Logs: 4

    const stringArray = ["hello", "world"];
    console.log(getArrayLength(stringArray)); // Logs: 10 (5 + 5)

    // Define a type User with properties name (string) and age (number). Create a function isAdult that accepts a parameter user of type User | undefined. Use narrowing to check if user is defined and if their age is at least 18, return true; otherwise, return false.
    // Define the User type
    type User = {
        name: string;
        age: number;
    };

    // Create the isAdult function
    const isAdult = (user: User | undefined): boolean => {
        // Check if the user is defined
        if (user !== undefined) {
            // Use type assertion to treat user as type User
            return (user as User).age >= 18; // Assert user as User and check age
        }
        return false; // If user is undefined, return false
    };

    // Example usage:
    const user1: User = { name: "Alice", age: 20 };
    console.log(isAdult(user1)); // Logs: true

    const user2: User = { name: "Bob", age: 17 };
    console.log(isAdult(user2)); // Logs: false

    const user3: User | undefined = undefined;
    console.log(isAdult(user3)); // Logs: false
}