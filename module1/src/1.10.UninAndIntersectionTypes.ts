{
    // union types
    type FrontendDeveloper = "Fakibaz" | "Jr.Developer"
    type FullstackDeveloper = "Froontend Developer" | "Fullstack Developer"

    type newDeveloper = FrontendDeveloper | FullstackDeveloper

    type User = {
        name: string;
        email?: string;
        gender: "Male" | "Female";
        bloodGroup: "O+" | "B+" | "C+";
    }

    const user1: User = {
        name : "Sazid",
        email : "s@gmail.com",
        gender : "Male",
        bloodGroup : "O+"
    }

}

{

    // Intersection Types
    type FrontendDeveloper  =  {
        skill : string [];
        designation1 : 'Frontend Developer'
    }
    type BackendDeveloper  =  {
        skill : string [];
        designation2 : 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper ={
        skill: ['HTML', 'CSS', 'JS'],
        designation1 : 'Frontend Developer',
        designation2 : 'Backend Developer'
    }
}

