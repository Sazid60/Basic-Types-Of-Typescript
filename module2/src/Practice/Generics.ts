{
    // Explanation of Generics in TypeScript
    // Generics in TypeScript allow you to create reusable components or functions that can work with any data type. This enables you to build components that are more flexible and can operate on a variety of types without sacrificing type safety. Generics are useful for creating functions, classes, and interfaces that can operate on multiple types while still keeping track of the types involved.

    // Here’s a breakdown of the key concepts in your example:

    // Generic Type Alias:

    // You define a generic type alias like GenericArray<T>, which can be used to create an array of any type T.

    type GenericArray<T> = Array<T>
    // Using Generic Types:

    // You can instantiate the generic type with specific types, like GenericArray<number>, GenericArray<string>, or GenericArray<boolean>.
    const rollNumbers: GenericArray<number> = [1, 2, 3, 4];
    const mentors: GenericArray<string> = ['a', 'z', 'a', 'd'];
    const boolArray: GenericArray<boolean> = [true, false, true];
    // Generic Tuple:

    // You can also create tuples using generics. The GenericTuple<x, y> type allows you to define a tuple with two different types.

    type GenericTuple<x, y> = [x, y];
    const manush: GenericTuple<string, string> = ['x-men', 'x-women'];
    // Generics with Interfaces:

    // You can use generics with interfaces to create flexible and reusable data structures.

    interface User {
        name: string;
        age: number;
    }
    const user1: GenericArray<User> = [
        { name: "sazid", age: 100 },
        { name: "sazid", age: 100 },
        { name: "sazid", age: 100 },
    ];

    // Benefits of Using Generics
    // Type Safety: Generics provide compile-time type checking, ensuring that the types are correct throughout your code.
    // Reusability: You can write a function or class once and use it with different data types without rewriting code.
    // Flexibility: Generics allow you to handle data types dynamically, giving you more power to create adaptable code structures.
    // Questions/Problems for Practice
    // Here are some practice problems related to generics in TypeScript:

    // Generic Function: Create a generic function called identity that takes an argument of any type and returns the same type.
    // Generic function identity
    function identity<T>(arg: T): T {
        return arg;
    }

    // Example usage
    const numberIdentity = identity<number>(42); // numberIdentity is of type number
    console.log(numberIdentity); // Outputs: 42

    const stringIdentity = identity<string>("Hello, TypeScript!"); // stringIdentity is of type string
    console.log(stringIdentity); // Outputs: Hello, TypeScript!

    const booleanIdentity = identity<boolean>(true); // booleanIdentity is of type boolean
    console.log(booleanIdentity); // Outputs: true

    const arrayIdentity = identity<number[]>([1, 2, 3]); // arrayIdentity is of type number[]
    console.log(arrayIdentity); // Outputs: [1, 2, 3]



}