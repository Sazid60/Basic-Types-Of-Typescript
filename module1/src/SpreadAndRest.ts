{


    // spread Operator in array
    const bros1: string[] = ["sa", 'az', 'id']
    const bros2: string[] = ["sh", 'ah', 'na']

    bros1.push(...bros2)

    // spread operator in objects
    const mentor1 = {
        typescript : 'shakil',
        redux : 'Mir',
        dbms : 'Mizan'
    }

    const mentor2  = {
        prisma : 'Firoze',
        next : 'Tonmoy',
        cloud : 'Nahid'
    }

    const mentorList  = {
        ...mentor1,
        ... mentor2
    }



    // Rest Operator 
    const greetFriends1 = (friend1 : string, friend2 : string, friend3: string) =>{
        console.log(`Hello Friends ${friend1} ${friend2} ${friend3} Chai Pilo `)
    }
    greetFriends1('sa' , 'zi' , 'd')
    // this come with a problem notun kuno nam ashle ar possible na so rest operator use korbo 


    const greetFriends = (...friends : string[]) =>{
        // console.log(`Hello Friends ${friend1} ${friend2} ${friend3} Chai Pilo `)
        friends.forEach((friend : string) => console.log(`hello ${friend} chai pilo `))
    }
    greetFriends('sa' , 'zi' , 'd')

    // 
}