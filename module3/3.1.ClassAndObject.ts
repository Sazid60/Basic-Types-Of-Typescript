{

    //What is a Class?
    // A class is a blueprint for creating objects. It encapsulates data for the object (called properties or attributes) and defines behaviors (called methods) that the object can perform. A class allows you to create multiple instances (objects) that share the same structure but may have different values for their attributes.
    
    // oop-class
    // Define a class named 'Animal'
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // parameter properties :
        //bar bar property define kora lagbe na. ak jaygay public lekhe dfeine kolei hobe. Ts auto niye nibe
        // public name: string; this.name = name; e 2 ta comment kore dibo

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        // method use korlam and normal function use korlam because arrow function e.this kaj kore na
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }


    const dog = new Animal("Kutta", "Bangla", "Gew Gew");
    console.log(dog.sound);
    const cat = new Animal("Bilai", "Deshi", "Mew Mew");
    console.log(cat.species);
    cat.makeSound()

}