{
    const student1: {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address: string;
    } = {
        name: "sazd",
        age: 25,
        gender: 'male',
        contactNo: "01623",
        address: "uttara"
    }
}

{
    const student2: {
        name: string;
        age: number;
        gender: string;
        address: string;
    } = {
        name: "sazd",
        age: 25,
        gender: 'male',
        address: "uttara"
    }
}

// alias in object
{
    // in this situation we can create alias to use in multiple places

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "sazd",
        age: 25,
        gender: 'male',
        contactNo: "01623",
        address: "uttara"
    }

    const student2: Student = {
        name: "sazd",
        age: 25,
        gender: 'male',
        address: "uttara"
    }
}

// type alias in string and others

{
    type UserName = string
    type IsAdmin = boolean

    const userName: UserName = "Sazid"
    const isAdmin: IsAdmin = true;

    // type alias in function

    // random method
    const add = (num1: number, num2: number): number => num1 + num2

    // using type alias
    type Add = (num1 :number , num2 :number) => number
    const add1 :Add = (num1, num2) => num1 + num2
}