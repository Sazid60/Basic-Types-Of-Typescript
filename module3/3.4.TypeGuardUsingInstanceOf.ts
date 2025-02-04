{
    // oop te type guard

    // instance of guard
    class Animal {
        name:string;
        species:string;

        constructor(name:string, species:string){
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making Sound")
        }
    }

    class Dog extends Animal {
        constructor(name:string, species:string){
            super(name,species)
        }
        makeBark(){
            console.log("i am barking")
        }
    }
    class Cat extends Animal {
        constructor(name:string, species:string){
            super(name,species)
        }
        makeMeaw(){
            console.log("i am meawing")
        }
    }

    // smart way 
    const isDog = (animal :Animal): animal is Dog =>{
        return animal instanceof Dog
        // true/false return korbe

        // animal is Dog is the type predicate, which indicates that if the function returns true, TypeScript should consider animal to be of type Dog within any code that relies on this check.
    }

    const isCat = (animal :Animal) : animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal = (animal :Animal) =>{
        // if(animal instanceof Dog){
        //     // bole dite hobe kiser instance tahle child er property gula pabe 
        //     animal.makeBark();
        // } else if(animal instanceof Cat){
        //     animal.makeMeaw()
        // }else{
        //     animal.makeSound()
        // }

        // if else diye kisu lekha mane type narrwing korlam 
        
        // smart way
        if(isDog(animal)){
            animal.makeBark();
        } else if(isCat(animal)){
            animal.makeMeaw()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog("Dog Bhai", "dog")
    // dog.makeBark()
    const cat = new Cat("Cat Bhai", "Cat")
    // cat.makeMeaw()

    getAnimal(dog)
}