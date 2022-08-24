//the employee constructor is a parent class of engineer/ intern/ and manager
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//getName getId getEmail and getRole allow you to put input in everything 
    getName () {
        return this.name;
    }
    
    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;