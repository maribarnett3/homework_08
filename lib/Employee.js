// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, school) {
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
    getRole() {
        return "Employee"
    }


    getEmail() {
        return this.email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

}




module.exports = Employee;
