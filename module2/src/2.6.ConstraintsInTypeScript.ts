{
    // constrains
    // adding something new to an object
    const addCourseToStudent = <T extends { id: number; name: string; email: string; devType:string }>(student: T) => {
        // this means the mentioned property should be present do not care about others
        const course = "Next Level Web Dev"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ id: 123, name: 'Mr X', email: 'x@gmail.com', devType: 'new' })


    const student2 = addCourseToStudent({ id: 123, name: 'Mr X', email: 'x@gmail.com', devType: 'new', hasWatch: true })

}