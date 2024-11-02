{
    // utility types
    // pick
    type Person = {
        name: string;
        age: number;
        email?:string;
        contactNo : string;
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    // omit
    
    type ContactInfo = Omit<Person , "name" | "age">

    // Required
    type PersonRequired =  Required<Person>

    // partial
    type personPartial = Partial<Person>

    // readonly

    type PersonReadOnly = Readonly<Person>
    const person1 : PersonReadOnly = {
        name:"sazid",
        age:200,
        contactNo :"017"
    }
    // person1.name="mr.x"

    // Record

    const EmptyObj : Record<number, unknown> = {}

    // EmptyObj.age=55

    // type MyObj = {
    //     a:string;
    //     b:string;
    // }


    type MyObj = Record<string, string>

    const obj1 : MyObj= {
        a :"a",
        b:"c",
    } 
}