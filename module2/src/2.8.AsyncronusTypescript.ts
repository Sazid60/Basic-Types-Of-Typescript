{
    // promise
    // simulate 
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something';
            // const data : string = null;
            if (data) {
                resolve(data)
            } else {
                reject('Failed to load data')
            }
        });
    };

    // calling create promise function
    const showData = async (): Promise<String> => {
        const data: string = await createPromise();
        console.log(data)
        return data
    }

    showData()


    // another example of promise 
    type Something = { something: string }
    const createPromise1 = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" }

            if (data) {
                resolve(data)
            } else {
                reject('Failed to load data')
            }
        })
    }

    const showData1 = async (): Promise<Something> => {
        const data: Something = await createPromise1();
        console.log(data)
        return data
    }

    
}