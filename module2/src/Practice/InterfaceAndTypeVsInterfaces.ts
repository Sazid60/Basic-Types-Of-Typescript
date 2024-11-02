{
    // Differences Between Type Aliases and Interfaces

    // Type Alias:

    type User1 = {
        name: string;
        age: number;
    };
    // Interface:

    interface User2 {
        name: string;
        age: number;
    }
    // Extensibility:

    // Interfaces can be extended using the extends keyword, allowing you to create new interfaces based on existing ones. They can also merge declarations:

    interface User2 {
        email: string;
    }
    // // User2 now has email property in addition to name and age
    // Type Aliases cannot be merged. You can create new types based on existing ones using intersection (&) but not via declaration merging:

    type userWithRole1 = User1 & { role: string }; // Creates a new type
    // Usage:

    // Interfaces are generally preferred for object shapes and class definitions because of their extensibility and declaration merging capabilities.
    // Type Aliases are often used for primitive types, union types, tuples, and more complex combinations of types.
    // Implementation:

    // Both can be used to define function types:

    type Add1 = (num1: number, num2: number) => number;
    interface Add2 {
        (num1: number, num2: number): number;
    }

    // Simple Problems
    // Here are some problems that you can solve to practice the differences between type aliases and interfaces:


    // Define a Type and an Interface: Create a Product type using both a type alias and an interface that has properties for name (string), price (number), and inStock (boolean).

    type Product = {
        name: string;
        price: number;
        isStock: boolean;
    }

    interface Product1 {
        name: string;
        price: number;
        isStock: boolean;
    }

    const product: Product1 = {
        name: "sq",
        price: 23,
        isStock: true
    }

    // Extending Types: Create an interface called AdminUser that extends from the User2 interface you defined earlier and adds a property permissions (string array).
    // Existing User2 interface
    interface User6 {
        name: string;
        age: number;
    }

    // Extending User2 to create AdminUser with a permissions property
    interface AdminUser1 extends User6 {
        permissions: string[]; // Changed from role to permissions (string array)
    }

    // Creating an object of type AdminUser
    const uUser: AdminUser1 = {
        name: "sazid",
        age: 300,
        permissions: ['read', 'write', 'delete'] // Providing a string array for permissions
    };


    // Using Type Aliases with Union Types: Define a type alias called Response that can be either a string or an Error object.

    // Define a type alias called Response that can be either a string or an Error object
    type Response = string | Error;

    // Example usage:
    const successResponse: Response = "Operation successful!";
    const errorResponse: Response = new Error("Something went wrong.");


    // Function Type: Define a function type called Multiply using a type alias that takes two numbers and returns a number. Then, define the same function type using an interface.


    // Define the function type using a type alias
    type Multiply1 = (x: number, y: number) => number;

    // Implementation of the multiply function using the type alias
    const multiply1: Multiply1 = (x, y) => {
        return x * y;
    };

    // Define the function type using an interface
    interface Multiply2 {
        (x: number, y: number): number;
    }

    // Implementation of the multiply function using the interface
    const multiply2: Multiply2 = (x, y) => {
        return x * y;
    };

    // Example usage
    console.log(multiply1(5, 10)); // Outputs: 50
    console.log(multiply2(3, 4));   // Outputs: 12


    // Object Merging: Create an interface for Shape with properties sides (number) and area (number). Then, create another interface called Polygon that extends Shape and adds a property vertices (number).
    // Define the Shape interface with properties sides and area
    interface Shapes {
        sides: number; // Changed 'side' to 'sides' for clarity
        area: number;
    }

    // Define the Polygon interface that extends Shapes and adds vertices
    interface Polygon extends Shapes {
        vertices: number;
    }

    // Example usage
    const triangle: Polygon = {
        sides: 3,
        area: 15,
        vertices: 3
    };

    const square: Polygon = {
        sides: 4,
        area: 25,
        vertices: 4
    };

    // Example of logging the polygon objects
    console.log(triangle); // Outputs: { sides: 3, area: 15, vertices: 3 }
    console.log(square);   // Outputs: { sides: 4, area: 25, vertices: 4 }




    // Array Definition: Create a type alias for an array of strings called StringArray. Then, create an interface that describes an object containing a property tags, which is of type StringArray.

    // Define a type alias for an array of strings
    type StringArray = string[];

    // Define an interface that describes an object with a property tags
    interface TagContainer {
        tags: StringArray; // Using the StringArray type alias
    }

    // Example usage
    const myTags: TagContainer = {
        tags: ["typescript", "javascript", "programming"]
    };

    // Logging the tags
    console.log(myTags); // Outputs: { tags: ["typescript", "javascript", "programming"] }




    // Merging Interfaces: Define an interface Car with properties make (string) and model (string). Define another interface ElectricCar that extends Car and adds a property batteryLife (number).
    // Define the Car interface with properties make and model
    interface Car {
        make: string;   // The manufacturer of the car
        model: string;  // The specific model of the car
    }

    // Define the ElectricCar interface that extends Car and adds batteryLife
    interface ElectricCar extends Car {
        batteryLife: number; // The battery life in hours
    }

    // Example usage of Car and ElectricCar
    const tesla: ElectricCar = {
        make: "Tesla",
        model: "Model S",
        batteryLife: 24
    };

    // Logging the ElectricCar object
    console.log(tesla); // Outputs: { make: "Tesla", model: "Model S", batteryLife: 24 }

    // Read-Only Properties: Create an interface Person with properties name (string) and age (number). Modify it to include a read-only property id (string).
    // Define the Person interface with properties name and age
    interface Person {
        name: string;  // The name of the person
        age: number;   // The age of the person
    }

    // Modify the Person interface to include a read-only property id
    interface PersonWithId extends Person {
        readonly id: string; // A read-only unique identifier for the person
    }

    // Example usage of PersonWithId
    const person1: PersonWithId = {
        name: "Alice",
        age: 28,
        id: "P001" // This property can be set but not modified later
    };

    // Attempting to change the id property will result in an error
    // person1.id = "P002"; // Uncommenting this line will cause a TypeScript error

    // Logging the person object
    console.log(person1); // Outputs: { name: "Alice", age: 28, id: "P001" }

}