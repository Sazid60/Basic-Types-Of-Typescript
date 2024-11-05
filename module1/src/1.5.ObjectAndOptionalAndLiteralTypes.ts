// Ts in Object 

// raw
 const user = {
    firstName : 'Shahnawaz',
    middleName :"s",
    lastName : "Azid"
 }


// with ts

const user1: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Shahnawaz',
    middleName: "s",
    lastName: "Azid"
}


// Optional types

const user2: {
    firstName: string;
    middleName?: string;
    lastName: string;
} = {
    firstName: 'Shahnawaz',
    lastName: "Sazid"
}


// Literal types

const user3: {
    company : "Programming Hero"
    firstName: string;
    middleName?: string;
    lastName: string;
} = {
    company: "Programming Hero",
    firstName: 'Shahnawaz',
    lastName: "Sazid"
}

// user3.company = "PH"
// eta korle error dibe since its not assignable

// Another way of making Literal types

const user4: {
    readonly company : string
    firstName: string;
    middleName?: string;
    lastName: string;
} = {
    company: "Programming Hero",
    firstName: 'Shahnawaz',
    lastName: "Sazid"
}

// user4.company = "PH"
// eta korle error dibe since its not assignable


