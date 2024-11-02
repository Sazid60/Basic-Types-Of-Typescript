{
    // mapped Type

    // regular method
    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5]

    const arrayOfStrings1: string[] = ['1', '2', '3']

    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString())

    console.log(arrayOfStrings)

    // mapped type
    type AreaNumber = {
        height: number;
        width: number;
    };

    type Height = AreaNumber["height"] // eta re bole lookup type 


    //  type AreaString =  {
    //     height : string;
    //     width : string;
    //  }

    type AreaString = {
        [key in keyof AreaNumber]: string
    }


    // mapped type using generics type
    type AreaNumber1 = {
        height: number;
        width: number;
    };

    type Height1 = AreaNumber["height"] // eta re bole lookup type 



    type AreaString1<T> = {
        [key in keyof T]: T[key] // eta lookup kore ber korbe
    }

    const area1 : AreaString1 <{height :string, width:number}> = {
        height: "100",
        width:100
    }

}