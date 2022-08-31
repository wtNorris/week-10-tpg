const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// tests for name, id, email

test("Can assign name", () => {
    const name = "Hesse";
    const newInt = new Intern(name);
    expect(newInt.name).toBe(name);
});

test("Can assign ID", () => {
    const id = 99;
    const newInt = new Intern("Hesse", id);
    expect(newInt.id).toBe(id);
});

test("Can assign email", () => {
    const email = "h@gmail.com";
    const newInt = new Intern("Hesse", 99, email);
    expect(newInt.email).toBe(email);
});

// test for school

test("Can assign school", () => {
    const school = "K-State";
    const newInt = new Intern("Hesse", 99, "h@gmail.com", school);
    expect(newInt.getSchool()).toBe(school);
});

// function test for school

test("can pass school through getSchool function", () => {
    const testSchool = "K-State";
    const newInt = new Intern("Hesse", 99, "h@gmail.com", testSchool);
    expect(newInt.getSchool()).toBe(testSchool);
});

// test role

test("Can return intern role to interns", () => {
    const testIntern = "Intern";
    const newInt = new Intern("Hesse", 99, "h@gmail.com", "K-State");
    expect(newInt.getRole()).toBe(testIntern);
});