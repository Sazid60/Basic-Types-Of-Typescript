{
    // ternary operator || optional chaining || nullish coalescing


    // ternary operator
    const age: number = 18;

    if (age >= 18) {
        console.log('adult')
    } else {
        console.log('not adult')
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({isAdult})

    // nullish coalescing operator
    // joodi null and undefined upor vitti kore kisu krte hoy tahle nulish use korbo. mane null  or undefined upor base kore kuno default value set korte caile use korbo

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated  : 'Guest'; // ternary operator sudhu falsy value er upor base kore kaj kore
    console.log({result1} , {result2})

    type User = {
        name: string;
        address : {
            city : string;
            road :string;
            presentAddress : string;
            permanentAddress ? : string;
        }
    }
    const user : User = {
        name: "sazid",
        address :{
            city : 'ctg',
            road : "13",
            presentAddress : "uttara",
            permanentAddress : "Dhaka"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log(permanentAddress)
}