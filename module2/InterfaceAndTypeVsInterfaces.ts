{

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    type userWithRole1 = User1 & { role: string }

    type userWithRole2 = User2 & { role: string }

    interface userWithRole3 extends User1 {
        role: string;
    }

    interface userWithRole4 extends User2 {
        role: string;
    }


    const user1: User1 = {
        name: "sazid",
        age: 100,
    }
    const user2: User2 = {
        name: "sazid",
        age: 100,
    }
    const user3: userWithRole1 = {
        name: "sazid",
        age: 100,
        role : "admin"
    }
    const user4: userWithRole2 = {
        name: "sazid",
        age: 100,
        role : "admin"
    }
    const user5: userWithRole3 = {
        name: "sazid",
        age: 100,
        role : "admin"
    }
    const user6: userWithRole4 = {
        name: "sazid",
        age: 100,
        role : "admin"
    }




}