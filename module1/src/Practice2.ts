{
    // 1. Object Types

    // Task: Define an object type called Product with properties id (number), name (string), price (number), and category (string). Create an instance of Product and assign it appropriate values.

    const product: {
        id: number;
        name: string;
        price: number;
        category: string;
    } = {
        id: 123,
        name: "Sazid",
        price: 30000,
        category: "Dev"
    }

    // Task: Create an object type Address with properties street (string), city (string), zipCode (number), and an optional property state (string). Create a variable of type Address and assign values to it, experimenting with and without the state property.

    type Address = {
        street: string;
        city: string;
        zipCode: number;
        state?: string
    }

    const address: Address = {
        street: "dhk",
        city: "Uttara",
        zipCode: 1230,
    }

    // Task: Define a type called Course with properties title (string), duration (number in hours), and topics (an array of strings). Then, create an array of Course objects representing different courses.

    type Courses = {
        title: string;
        duration: number;
        topics: string[];
    }

    const courses: Courses = {
        title: "Unga Bunga",
        duration: 1200,
        topics: ['s', 'a', 'z', 'i', 'd']
    }

    // 2. Optional Properties

    // Task: Define a type UserProfile with properties username (string), email (string), phoneNumber (string, optional), and birthdate (optional, Date). Create a few UserProfile objects, some with phoneNumber and birthdate, and some without them.

    type UserProfile = {
        userName: string;
        email: string;
        phoneNumber?: string;
        birthDate?: Date;
    }

    const user1: UserProfile = {
        userName: "sazid",
        email: 's@gmail.com',
    }

    // Task: Create an object type BlogPost with properties title (string), content (string), author (string), tags (optional array of strings), and publishedDate (optional Date). Create a variable of type BlogPost and experiment with setting different combinations of properties.

    type BlogPost = {
        title: string;
        content: string;
        author: string;
        tags?: string[];
        publishDate?: Date;
    }

    const blogPost: BlogPost = {
        title: "s",
        content: 'a',
        author: 'c'
    }


    // Task: Define a type Appointment with properties date (Date), time (string), and an optional property location (string). Create an array of Appointment objects with some including location and others without.
    type Appointment = {
        date: Date;
        time: string;
        location?: string;  // The `?` here makes `location` optional
    }

    const appointment: Appointment = {
        date: new Date("2013-12-11"),  // Use new Date(...) for a Date object
        time: "12:13",
        location: "sazid"  // Simply assign the value, no `?` here
    }

    // 3. Literal Types

    // Task: Create a type Role that can only be one of the following values: "admin", "user", or "guest". Define a User object type with properties username (string) and role (of type Role). Create a few User objects with different roles.

    type Role = "admin" | "user" | "guest";

    type User = {
        username: string;
        role: Role; // Use the Role type here
    }

    // Create a few User objects with different roles
    const adminUser: User = {
        username: "Alice",
        role: "admin",
    };

    const normalUser: User = {
        username: "Bob",
        role: "user",
    };

    const guestUser: User = {
        username: "Charlie",
        role: "guest",
    };


    // Task: Define a type Status that can be "success", "error", or "loading". Then, create a function called fetchData that accepts a parameter status of type Status. Inside the function, use a switch statement to print different messages based on the status value.

    type Status = "success" | "error" | "loading";

    function fetchData(status: Status): string {
        if (status === "success") {
            return "Data fetched successfully!";
        } else if (status === "error") {
            return "There was an error fetching the data.";
        } else if (status === "loading") {
            return "Data is currently loading...";
        } else {
            return "Unknown status.";
        }
    }

    // Example usage
    console.log(fetchData("success"));  // Output: Data fetched successfully!
    console.log(fetchData("error"));    // Output: There was an error fetching the data.
    console.log(fetchData("loading"));  // Output: Data is currently loading...

    // Example usage:
    fetchData("success");  // Output: Data fetched successfully!
    fetchData("error");    // Output: There was an error fetching the data.
    fetchData("loading");  // Output: Data is currently loading...

    // Task: Define an object type Order with properties orderId (number), productName (string), quantity (number), and status (which can only be "pending", "shipped", or "delivered"). Create a variable of type Order and assign it values with different status options.

    // Define the Order type
    type OrderStatus = "pending" | "shipped" | "delivered";

    type Order = {
        orderId: number;
        productName: string;
        quantity: number;
        status: OrderStatus;  // Use the OrderStatus type for the status property
    };

    // Create a variable of type Order with different status options
    const order1: Order = {
        orderId: 101,
        productName: "Laptop",
        quantity: 1,
        status: "pending",  // Assigning "pending" status
    };

    const order2: Order = {
        orderId: 102,
        productName: "Smartphone",
        quantity: 2,
        status: "shipped",  // Assigning "shipped" status
    };

    const order3: Order = {
        orderId: 103,
        productName: "Tablet",
        quantity: 3,
        status: "delivered",  // Assigning "delivered" status
    };

    // Example usage
    console.log(order1);
    console.log(order2);
    console.log(order3);


}