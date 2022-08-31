const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// tests for name, id, email

test("Can assign name", () => {
    const name = "Ann";
    const newMan = new Manager(name);
    expect(newMan.name).toBe(name);
});

test("Can assign ID", () => {
    const id = 97;
    const newMan = new Manager("Ann", id);
    expect(newMan.id).toBe(id);
});

test("Can assign email", () => {
    const email = "annmarieh@gmail.com";
    const newMan = new Manager("Ann", 97, email);
    expect(newMan.email).toBe(email);
});

// test for office number

test("Can assign office number", () => {
    const officeNum = 1;
    const newMan = new Manager("Ann", 97, "annmarieh@gmail.com", officeNum)
    expect(newMan.officeNumber).toBe(officeNum);
});

// function test for office number

test("Can pass office number through getOfficeNumber function", () => {
    const testOffNum = "1";
    const newMan = new Manager("Ann", 97, "annmarieh@gmail.com", testOffNum);
    expect(newMan.getOfficeNumber()).toBe(testOffNum);
});

// test role

test("Can return manager role to manangers", () => {
    const testManager = "Manager";
    const newMan = new Manager("Ann", 97, "annmarieh@gmail.com", 1);
    expect(newMan.getRole()).toBe(testManager);
});