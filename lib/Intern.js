const Intern = require("./Employee");

class Intern extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;