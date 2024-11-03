{
    // ## Tasks

    // ### Task 1: Basic Data Types and First Program

    // **Objective**: Write a TypeScript program that outputs a welcome message.

    // **Instructions**:

    // - Create a TypeScript program.
    // - Print the following message to the console:
    //   > Hello World, I will complete this course successfully and become a Next level Web Developer!

    type Greetings = {
        message: string
    }

    const greetings: Greetings = { message: "Hello World, I will complete this course successfully and become a Next level Web Developer!" }
    console.log(greetings.message);
    // ---

    // ### Task 2: Functions, Optional, and Literal Types

    // **Objective**: Create a function with parameters and an optional literal type.

    // **Instructions**:

    // - Define a function that takes:
    //   - `name` (string)
    //   - `age` (number)
    //   - `role` (optional, with type `'admin' | 'user' | 'guest'`)
    // - The function should log these values or perform a basic action.

    const user1 = (name: string, age: number, role?: 'admin' | 'user' | 'guest') => {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Role: ${role ?? 'guest'}`);
    };

    // Example usage:
    user1("Alice", 25, "admin"); // logs Name: Alice, Age: 25, Role: admin
    user1("Bob", 30); // logs Name: Bob, Age: 30, Role: guest (default)

    type UserRole = 'admin' | 'user' | 'guest';

    type User2 = {
        name: string;
        age: number;
        role?: UserRole; // Optional property
    };

    interface User3 {
        name: string;
        age: number;
        role?: 'admin' | 'user' | 'guest'; // Optional property
    }

    const user = (userInfo: User3) => {
        console.log(`Name: ${userInfo.name}`);
        console.log(`Age: ${userInfo.age}`);
        console.log(`Role: ${userInfo.role ?? 'guest'}`); // Default to 'guest' if role is not provided
    };

    // Example usage:
    user({ name: "Alice", age: 25, role: "admin" });
    user({ name: "Bob", age: 30 }); // role will default to 'guest'

    // ---

    // ### Task 3: Object Types, Type Alias, & Literal Types

    // **Objective**: Define a structured `Person` object using Type Aliases.

    // **Instructions**:

    // - Define a `Person` type alias with properties for `Name`, `Address`, `Hair and Eye Color`, `Income and Expense`, `Hobbies`, `Family Members`, `Job`, `Skills`, `Marital Status`, and `Friends`.

    type Person = {
        name: string;
        address: string;
        hairColor: string;
        eyeColor: string; // Changed to camelCase
        income: number;
        expense: number;
        hobbies: string[];
        familyMembers: number; // Renamed for clarity
        job: string;
        skills: string[];
        maritalStatus: 'single' | 'married' | 'divorced' | 'widowed'; // Optional refinement
        friends: string[];
    };

    const john: Person = {
        name: "John Doe",
        address: "123 Main St, Anytown, USA",
        hairColor: "brown",
        eyeColor: "blue",
        income: 60000,
        expense: 20000,
        hobbies: ["reading", "hiking", "coding"],
        familyMembers: 4,
        job: "Software Developer",
        skills: ["TypeScript", "JavaScript", "React"],
        maritalStatus: "married",
        friends: ["Alice", "Bob", "Charlie"]
    };

    console.log(john);

    // ---

    // ### Task 4: Union and Intersection Types

    // **Objective**: Create union and intersection types using interfaces.

    // **Instructions**:

    // - Define interfaces `Book` and `Magazine`.
    // - Create:
    //   - A type that is a **union** of `Book` and `Magazine`.
    //   - A type that is an **intersection** of `Book` and `Magazine`.

    interface Book {
        name: string
    }
    interface Magazine {
        copy: number
    }
    // Union Type
    type Publication = Book | Magazine;

    // Intersection Type
    type CompletePublication = Book & Magazine;

    // Example usage
    const myBook: Publication = { name: "The Great Gatsby" }; // This is a Book
    const myMagazine: Publication = { name: "National Geographic", copy: 120 }; // This is a Magazine

    const myCompletePublication: CompletePublication = {
        name: "Sample Title",
        copy: 1
    }; // This object satisfies both Book and Magazine properties

    // ---

    // ### Task 5: Function Type

    // **Objective**: Write a function that reverses a string.

    // **Instructions**:

    // - Write a function `reverseString` that:
    //   - Takes a single string argument.
    //   - Returns the string in reverse order.
    //   - **Example**:
    //     - Input: `"hello"`
    //     - Output: `"olleh"`

    const reverseString = (x: string): string => {
        return x.split('').reverse().join('');
    }

    // Example usage:
    const reversed = reverseString('Hello');
    console.log(reversed); // Output: "olleH"

    // ---

    // ### Task 6: Spread and Rest Operators, Destructuring

    // **Objective**: Write a function that uses the rest operator for variable-length arguments.

    // **Instructions**:

    // - Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

    const sum = (...numbers: number[]): number => {
        return numbers.reduce((total, num) => total + num, 0);
    }

    // Example usage:
    console.log(sum(1, 2, 3, 4)); // Output: 10
    console.log(sum(5, 10, 15)); // Output: 30
    console.log(sum()); // Output: 0 (no arguments)

    // ---

    // ### Task 7: Type Assertion and Narrowing

    // **Objective**: Write a function that behaves differently based on the input type.

    // **Instructions**:

    // - Create a function that accepts a parameter of type `string | number`.
    // - The function should:
    //   - Return the length if the input is a string.
    //   - Return the square if the input is a number.

    const oho = (x: string | number): number | undefined => {
        if (typeof x === "string") {
            return x.length
        } else if (typeof x === "number") {
            return x * x
        }
    }

    const res1 = oho('sazid') as number
    const res2 = oho('sazid') as number
    // ---

    // ### Task 8: Intersection Types

    // **Objective**: Practice using intersection types.

    // **Instructions**:

    // - Create a type `AdminUser` that is an intersection of:
    //   - `User` with properties `name` and `email`
    //   - `Admin` with property `adminLevel`
    // - Write a function `describeAdmin(user: AdminUser): string` that returns a description of the admin user.

    type User = {
        name: string;
        email: string;
    }

    type Admin = {
        adminLevel: string;
    }

    // Create an intersection type for AdminUser
    type AdminUser = User & Admin;

    // Function to describe the admin user
    const describeAdmin = (user: AdminUser): string => {
        return `Admin User: ${user.name}, Email: ${user.email}, Admin Level: ${user.adminLevel}`;
    }

    // Example usage
    const adminUser: AdminUser = {
        name: "Alice",
        email: "alice@example.com",
        adminLevel: "super"
    };

    console.log(describeAdmin(adminUser)); // Output: Admin User: Alice, Email: alice@example.com, Admin Level: super

    // ---

    // ### Task 9: Optional Chaining

    // **Objective**: Use optional chaining with nested objects.

    // **Instructions**:

    // - Write a function `getEmployeeCity(employee)` that safely retrieves the city of an employee from a nested object using optional chaining.

    interface Employee<X, Y> {
        id: number;
        name: string;
        address: X;
        contact: Y;
    }
    const getEmployeeCity = (employee: Employee<Address, Contact>): string => {
        return employee?.address?.city
    }

    interface Address {
        street: string;
        city: string;
        state: string
    }
    interface Contact {
        email: string;
        phone: string
    }

    const employee = {
        id: 1,
        name: "John Doe",
        address: {
            street: "123 Main St",
            city: "Springfield",
            state: "IL"
        },
        contact: {
            email: "johndoe@example.com",
            phone: "123-456-7890"
        }
    };
    // Example usage
    const city = getEmployeeCity(employee);
    console.log(city); // Output: Springfield
    // ---

    // ### Task 10: Nullish Coalescing

    // **Objective**: Handle null and undefined values using nullish coalescing.

    // **Instructions**:

    // - Write a function `getDisplayName(name: string | null | undefined): string` that returns `"Anonymous"` if `name` is null or undefined.

    const getDisplayName = (name: string | null | undefined): string => {
        return name ?? 'Anonymous'; // Returns name if it's not null or undefined; otherwise returns 'Anonymous'
    };

    // Example usage
    console.log(getDisplayName("Alice"));    // Output: Alice
    console.log(getDisplayName(null));       // Output: Anonymous
    console.log(getDisplayName(undefined));  // Output: Anonymous

    // ---

    // ### Task 11: Unknown Type

    // **Objective**: Handle different types with the `unknown` type.

    // **Instructions**:

    // - Write a function `processData(data: unknown)` that:
    //   - Checks if `data` is a string and returns the uppercased version.
    //   - If `data` is a number, returns the square of it.

    const processData = (data: unknown): string | number | undefined => {
        if (typeof data === "string") {
            return data.toUpperCase(); // Return the uppercased string
        } else if (typeof data === "number") {
            return data * data; // Return the square of the number
        }
        return undefined; // Return undefined if data is neither a string nor a number
    };

    // Example usage
    console.log(processData("hello")); // Output: HELLO
    console.log(processData(4));        // Output: 16
    console.log(processData(true));     // Output: undefined

    // ---

    // ### Task 12: Never Type

    // **Objective**: Use the `never` type for functions that don’t return.

    // **Instructions**:

    // - Write a function `handleError` that:
    //   - Accepts a `message: string`.
    //   - Throws an error with the given message.
    //   - Use the `never` return type to indicate that this function never returns.

    const handleError = (message: string): never => {
        throw new Error(message)
    }
    handleError("wow-error")
    // ---

    // ### Task 13: Generics with Functions and Interfaces

    // **Objective**: Use generics to handle different types.

    // **Instructions**:

    // - Create a generic function that:
    //   - Accepts an array of any type.
    //   - Returns a new array with duplicate values removed.
    // Generic function to remove duplicates from an array of any type
    // Generic arrow function to remove duplicates from an array of any type

    // Generic arrow function to remove duplicates from an array of any type using includes
    const removeDuplicates = <T>(arr: T[]): T[] => {
        const uniqueArray: T[] = [];
        arr.forEach(item => {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        });
        return uniqueArray;
    };

    // Example usage
    const numberArray = [1, 2, 3, 3, 4, 5, 6];
    const uniqueNumbers = removeDuplicates(numberArray);
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

    const stringArray = ["apple", "banana", "apple", "orange"];
    const uniqueStrings = removeDuplicates(stringArray);
    console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]


    // ---

    // ### Task 14: Asynchronous TypeScript and Type Aliases

    // **Objective**: Simulate an asynchronous operation with TypeScript.

    // **Instructions**:

    // - Write an asynchronous function that:
    //   - Simulates fetching user data (containing `name` and `age`).
    //   - Returns the data after a short delay.

    // ---

    // ### Task 15: Type Guards

    // **Objective**: Create custom type guards for more accurate type checking.

    // **Instructions**:

    // - Write a function `isString(value: unknown): value is string` that checks if a value is a string.
    // - Use this in another function `printUpperCase(value: unknown): void` that prints the value in uppercase if it’s a string.

    // ---

    // ### Task 16: Utility Types and Keyof Constraints

    // **Objective**: Access object properties dynamically using `keyof`.

    // **Instructions**:

    // - Create a function that:
    //   - Takes an object and a key.
    //   - Returns the property value from the object based on the provided key.
    //   - Use `keyof` to constrain the key to valid properties of the object.

    // ---

    // Happy coding!
}