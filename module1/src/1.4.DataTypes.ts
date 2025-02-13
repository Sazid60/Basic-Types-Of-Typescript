//  Data Types in Typescript
// Primitive : number, string, boolean,  null, undefined, symbol
// Non-Primitive : array, tuple, object (in js there is only object types)

// Implicit Data Types :
// Its like ts is automatically defining the data types
// example :
let firstName = "sazid";

// Explicit Data Types :
// It like telling ts to set the data types
// example :
let secondName: string = "shahnawaz";

// ___________________________Primitive Data Type________________

// number
let roll: number = 123;

// boolean
let isAdmin: boolean = true;

//  undefined
let x: undefined = undefined;

// null
let y: null = null;

// ___________________________________________________
let d;
d = 123;
d = "ddd";
d = true;

// This is not right since by default it make any type

// corrected form
let c: number;
c = 123;

// ___________________________Non-Primitive Data Type_____________

// Array
let friends = ["sazid", "maria"];

let koduFriends: string[] = ["fahim", "Nadi"];

let eligibleRollList: number[] = [1, 2, 3, 4];

// Tuple
// what is tuple ?: ita a special kind of array that maintains order

// without applying tuple
let coordinate = [1, 2];

// with tuple
let coordinates: [number, number] = [1, 15];

// without tuple risk thake notun kore assign kore type change kore fela jay like info1[0] = '60
let info1 = [50, "mr.x"];

// with tuple change kore fala jay na
let info: [number, string] = [50, "mr.x"];

// another tuple
let info2: [number, string, boolean] = [50, "mr.x", true];

// tuple modify kora jay na regular niom e since its fixed
