"use strict";
//  Data Types in Typescript
// Primitive : number, string, boolean,  null, undefined, symbol 
// Non-Primitive : array, tuple, object (in js there is only object types)
// Implicit Data Types : 
// Its like ts is automatically defining the data types
// example :
var firstName = 'sazid';
// Explicit Data Types :
// It like telling ts to set the data types
// example :
var secondName = 'shahnawaz';
// ___________________________Primitive Data Type_____________
// number 
var roll = 123;
// boolean
var isAdmin = true;
//  undefined
var x = undefined;
// null 
var y = null;
// ___________________________________________________
var d;
d = 123;
d = 'ddd';
d = true;
// This is not right since by default it make any type
// corrected form 
var c;
c = 123;
// ___________________________Non-Primitive Data Type_____________
// Array
var friends = ['sazid', 'maria'];
var koduFriends = ['fahim', 'Nadi'];
var eligibleRollList = [1, 2, 3, 4];
// Tuple
// what is tuple ?: ita a special kind of array that maintains order
// without applying tuple
var coordinate = [1, 2];
// with tuple
var coordinates = [1, 15];
// without tuple risk thake notun kore assign kore type change kore fela jay like info1[0] = '60
var info1 = [50, 'mr.x'];
// with tuple change kore fala jay na 
var info = [50, 'mr.x'];
// another tuple
var info2 = [50, 'mr.x', true];
// tuple modify kora jay na regular niom e since its fixed
