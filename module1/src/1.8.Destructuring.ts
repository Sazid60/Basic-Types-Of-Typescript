// Object Destructuring
{
    const user1 = {
        id: 123,
        name: {
            firstName: 'Shahnawaz',
            middleName: 'S',
            lastName: 'Sazid',
        },
        contactNo: "01622",
        address: "uganda"
    }
    const { contactNo, name: { middleName } } = user1
}

{

    const user2 = {
        id: 123,
        name: {
            firstName: 'Shahnawaz',
            middleName: 'S',
            lastName: 'Sazid',
        },
        contactNo: "01622",
        address: "uganda"
    }
    const { contactNo, name: { middleName : midName } } = user2

}

// Array Destructuring
const myFriends = ['jodu', 'modu', 'kodu', 'podu', 'todu']

const [a,b,bestFriend1] = myFriends

const [, , bestFriend] = myFriends

const [, , , ...rest] = myFriends; // rest would be ['podu', 'todu']