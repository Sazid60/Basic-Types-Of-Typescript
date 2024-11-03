{
    // Problem 1: Musician Interface
    // Define a Generic Interface: Create a generic interface Musician<T, X = null> that describes a musician. It should include:

    // name: string
    // instrument: string
    // experience: number (in years)
    // band?: X
    // equipment: T
    // Define Equipment Types: Create two types:

    interface Musician<T, X = null> {
        name: string;
        instrument: string;
        experience: number;
        band?: X;
        equipment: T
    }
    // Basic equipment type
    type BasicEquipment = {
        instrumentType: string;
        brand: string;
    };

    // Advanced equipment type with additional effects property
    type AdvancedEquipment = {
        instrumentType: string;
        brand: string;
        effects: string[];
    };

    // Basic musician with BasicEquipment
    const basicMusician: Musician<BasicEquipment> = {
        name: 'Alice',
        instrument: 'Guitar',
        experience: 3,
        equipment: {
            instrumentType: 'Acoustic Guitar',
            brand: 'Yamaha'
        }
    };

    // Advanced musician with AdvancedEquipment and a band
    const advancedMusician: Musician<AdvancedEquipment, string> = {
        name: 'Bob',
        instrument: 'Electric Guitar',
        experience: 8,
        band: 'The Rock Stars',
        equipment: {
            instrumentType: 'Electric Guitar',
            brand: 'Gibson',
            effects: ['Distortion', 'Overdrive', 'Reverb']
        }
    };


    // BasicEquipment with properties: instrumentType: string, brand: string
    // AdvancedEquipment with properties: instrumentType: string, brand: string, effects: string[]
    // Create Objects:

    // Create a basicMusician object using BasicEquipment.
    // Create an advancedMusician object using AdvancedEquipment and also include the band property.
    // Problem 2: Student Interface
    // Define a Generic Interface: Create a generic interface Student<T, X = null> with:

    // name: string
    // age: number
    // grade: string
    // hobbies?: X
    // courses: T
    // Define Course and Hobby Types:

    // Create a type BasicCourses with properties: courseName: string, credits: number.
    // Create a type AdvancedCourses with properties: courseName: string, credits: number, project: string.
    // Create a type Hobbies with properties: name: string, duration: number (in hours per week).
    // Create Student Objects:

    // Create a basicStudent object using BasicCourses.
    // Create an advancedStudent object using AdvancedCourses and include hobbies.
    // Problem 3: Vehicle Interface
    // Define a Generic Interface: Create a generic interface Vehicle<T, X = null> that includes:

    // make: string
    // model: string
    // year: number
    // owner?: X
    // features: T
    // Define Feature Types:

    // Create a type BasicFeatures with properties: color: string, transmission: string.
    // Create a type AdvancedFeatures with properties: color: string, transmission: string, gps: boolean, sunroof: boolean.
    // Create Vehicle Objects:

    // Create a basicVehicle object using BasicFeatures.
    // Create an advancedVehicle object using AdvancedFeatures and include an owner property.
    // Problem 4: Employee Interface
    // Define a Generic Interface: Create a generic interface Employee<T, X = null> that includes:

    // name: string
    // position: string
    // salary: number
    // manager?: X
    // benefits: T
    // Define Benefit Types:

    // Create a type BasicBenefits with properties: healthInsurance: boolean, paidTimeOff: number.
    // Create a type AdvancedBenefits with properties: healthInsurance: boolean, paidTimeOff: number, retirementPlan: boolean.
    // Create Employee Objects:

    // Create a basicEmployee object using BasicBenefits.
    // Create an advancedEmployee object using AdvancedBenefits and include a manager property.
}