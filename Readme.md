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

### Primitive Types

- 1. Number types 
```typescript
let roll : number = 123;
```
- 2. Boolean Types
```typescript
let isAdmin : boolean = true;
```
- 3. Undefined & null Types
 ```typescript
let x: undefined = undefined;
let y : null= null;
```
- 4. String Types 
```typescript
let y : let firstName = 'sazid';
```

### Non-Primitive Types

- 1. Array Types 
```typescript
let friends = ['sazid', 'maria'];

let koduFriends : string[] = ['fahim', 'Nadi'];

let eligibleRollList: number[] = [1,2,3,4]
```
- 2. Tuple Types : Ita a special kind of array that maintains order
```typescript
let coordinate = [1,2]

let coordinates :[number, number] = [1,15]

let info1 = [50, 'mr.x']

let info : [number, string]= [50, 'mr.x']
```

- 3. Objects Types
```typescript

const user: {
    company : "Programming Hero"  // literal types
    firstName: string;
    middleName?: string; // optional types
    lastName: string;
} = {
    company: "Programming Hero",
    firstName: 'Shahnawaz',
    lastName: "Sazid"
}
```

- 4. Function Types
```typescript
//  Normal Function               
                              // default value
function add2(num1: number, num2: number = 10): number {
    return num1 + num2;
}
add(2, 10)

// Arrow Function 
const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(20,39)

// methods
const poorUser = {
    name: "Sazid",
    balance: 0,
    addBalance(balance: number): string {
        return `My New Balance : ${this.balance + balance}`
    }
}
```
