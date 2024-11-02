{
    // generic constraint with keyof operator 

    type Vehicle = {
        bike: string,
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; //manually

    type Owner2 = keyof Vehicle

    const person1: Owner2 = "car"
    // dekhbo auto suggestion ditye dise



    // another example

    const getPropertyValue =<X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'sazid',
        age: 100,
        address: "dhk"
    }

    const car = {
        model : "Toyota",
        year: 2000
    }

    const result1 = getPropertyValue(user, 'name')
    const result2 = getPropertyValue(car, 'model')

    // obj[key]
} 