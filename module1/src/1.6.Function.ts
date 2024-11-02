{
//Learning Functions in Typescript

//  Normal Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 2)

// Arrow Function 
const addArrow = (num1: number, num2: number): number => num1 + num2;

//  Default Value setting
function add2(num1: number, num2: number = 10): number {
    return num1 + num2;
}
add(2, 10)


// Method (kuno object er moddhe jodi function thake tokhon tahke method bole)

const poorUser = {
    name: "Sazid",
    balance: 0,
    addBalance(balance: number): string {
        return `My New Balance : ${this.balance + balance}`
    }
}

// complex playing with array

const array : number[] = [1,2,3,4,5]

const newArray : number [] = array.map(((element : number) : number=> element*element))

}