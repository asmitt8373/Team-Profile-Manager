const Employee = require("./Employee");

//employee constructor extends the employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //super allows us to allows us to access all the methods with the same name 
        super (name, id, email);
        this.github = github;
    }
//these functions the get the github info 
    getGithub() {
        return this.github;
    }
//this role get returns that its a engineer in the html
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;