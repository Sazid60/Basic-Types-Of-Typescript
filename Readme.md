# Typescript- Basic to advance

##  What is Typescript?

- TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static typing. It’s often described as a superset of JavaScript because any valid JavaScript code is also valid TypeScript code. TypeScript essentially extends JavaScript's capabilities, making it a favorite for larger projects or complex applications.

## Why Typescript is necessary ?
- Static Typing: TypeScript introduces static typing, which helps catch errors at compile time rather than runtime. This reduces the number of bugs that occur when the code is executed, as type errors can be detected before the code even runs.

- Improved Code Readability and Maintainability: By defining types, TypeScript makes code more predictable and easier to read, particularly in large projects where multiple developers may work on the same codebase.

- Enhanced IDE Support: TypeScript provides richer support in editors (like Visual Studio Code), including features such as autocompletion, refactoring tools, and inline documentation. This leads to faster development and reduces errors.

- Scalability: TypeScript makes it easier to manage and scale large applications, thanks to features like interfaces, enums, and access modifiers. These tools help developers create robust and maintainable codebases, which can be crucial as an application grows.

- Backward Compatibility with JavaScript: Since TypeScript is a superset of JavaScript, developers can gradually transition to TypeScript without needing to rewrite an entire codebase. TypeScript files compile to plain JavaScript, which makes it compatible with any JavaScript environment.

## Key Differences Between JavaScript and TypeScript

| Feature                    | JavaScript (JS)                                | TypeScript (TS)                                |
|----------------------------|-----------------------------------------------|------------------------------------------------|
| **Typing**                 | Dynamically typed, no explicit types          | Statically typed, uses types like `string`, `number`, `boolean` |
| **Error Detection**        | Errors are caught at runtime                  | Errors are caught at compile time              |
| **Interfaces & Types**     | Not supported                                 | Supports interfaces, enums, type aliases       |
| **Object-Oriented Features** | Limited support, uses prototypal inheritance | Full support with classes, inheritance, access modifiers (public, private, protected) |
| **Development Experience** | Standard code editor support                  | Enhanced IDE support, autocompletion, refactoring |
| **Code Readability**       | No enforced structure                         | Types add clarity, making code more readable   |
| **Compilation**            | No compilation needed                         | Compiles to JavaScript before execution        |




## Types in TypeScript

In TypeScript, "types" define the structure and type of data used in the code, enabling **type checking** at compile-time. This helps catch errors early and improves code readability and maintainability. TypeScript includes several built-in types, along with the ability to define custom types for specific use cases.

---

## Common Types in TypeScript

### 1. Basic Types
- These are the primitive types, similar to JavaScript, but explicitly defined in TypeScript.

- **`string`**: For text data.
  ```typescript
  let name: string = "Alice";

- **`number`**: For all numeric values, including integers and floating-point number 
```typescript
  let age: number = 25;

- **`boolean`**: For true or false values
```typescript
 let isActive: boolean = true;

- **`null & undefined`**: For explicitly defined empty values
```typescript
 let data: null = null;
 let notInitialized: undefined = undefined;



## 2. Array Types
- Arrays store a list of values of a specific type. There are two syntaxes to declare arrays:

type[] syntax
Array<type> syntax
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["one", "two", "three"];
3. Tuple Types
Tuples define arrays with fixed lengths and specific types for each position.

let person: [string, number] = ["Alice", 25];
4. Enum Types
Enums are used for defining a set of named constants, which can be used as a collection of related values.

enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
5. Any Type
The any type can hold values of any type, similar to regular JavaScript variables. This type disables type-checking, so it should be used sparingly.

let anything: any = "text";
anything = 42; // No error
6. Void Type
The void type is used for functions that do not return a value.

function logMessage(message: string): void {
  console.log(message);
}
7. Union Types
Union types allow a variable to hold values of multiple types.

let value: string | number;
value = "Hello";
value = 42;
8. Custom Types and Interfaces
Custom types and interfaces help define complex object structures and allow reuse across the codebase.

Type Alias
typescript
Copy code
type Point = { x: number; y: number };
let coordinates: Point = { x: 10, y: 20 };
Interface
typescript
Copy code
interface Person {
  name: string;
  age: number;
}
let user: Person = { name: "Alice", age: 25 };
9. Literal Types
Literal types define a variable with specific, fixed values, rather than general types.

let direction: "left" | "right" | "up" | "down";
direction = "left";
