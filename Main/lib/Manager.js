const Employee = require("./Employee");
//the extend lets you access employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
// this is the input for the office number 
    getOfficeNumber() {
        return this.officeNumber;
    }
// input to if person is a manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;