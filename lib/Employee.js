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
}

module.exports = Employee;