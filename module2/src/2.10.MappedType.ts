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
        // keyof AreaNumber generates a union of all keys in AreaNumber ("height" | "width").
        // [key in keyof AreaNumber] creates a new type by iterating over each key in AreaNumber.
        // For each key, the mapped type assigns a string type, so both height and width become string.
    }


    // mapped type using generics type
    type AreaNumber1 = {
        height: number;
        width: number;
    };

    type Height1 = AreaNumber["height"] // eta re bole lookup type 



    type AreaString1<T> = {
        [key in keyof T]: T[key] // eta lookup kore ber korbe
        //// This will look up each key in T and use its original type
    }

    const area1: AreaString1<{ height: string, width: number }> = {
        height: "100",
        width: 100
    }

}