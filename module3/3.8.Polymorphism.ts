{
    // 4 piller of oop
    // inheritance,polymorphism, encapsulation,  abstraction, encapsulation

    // sthan kal patro vede manush er rup change hoye jay. thik temni kuno akta class er kuno akata method jodi sthan kal patro vede jodi change hoye jay tahle tare polymorphism bole

    class Person {
        getSleep() {
            console.log('I am sleeping for 8 hours per day')
        }
    }

    class Student extends Person {
        getSleep() {
            console.log('I am sleeping for 7 hours per day')
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log('I am sleeping for 6 hours per day')
        }
    }

    const getSleepInHours = (param: Person) => {
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepInHours(person1)
    getSleepInHours(person2)
    getSleepInHours(person3)

    // get sleep different rup dekhacche

    // another example
    class Shape {
        getArea(): number {
            return 0
        }
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super()
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius
        }
    }
    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super()
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.height * this.width
        }
    }

    const getShapeArea = (param: Shape) =>{
        console.log(param.getArea());
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(10,20)

    getShapeArea(shape3)
    getShapeArea(shape1)
    getShapeArea(shape2)
}