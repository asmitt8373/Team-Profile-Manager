const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // allows us to access all the methods with the same name 
        super (name, id, email);
        this.school = school;        
    }
// this will be the input for what school 
    getSchool() {
        return this.school;
    }
// this will be the input for intern
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;