const Employee = require("../lib/Employee");

// tests if creates employee
test("Can create a new employee", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object");
});

// tests if name added to employee
test("Can assign name", () => {
    const name = "Molly";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
});

// tests if id assigned
test("Can assign ID", () => {
    const id = 96;
    const newEmp = new Employee("Molly", id);
    expect(newEmp.id).toBe(id);
});

// tests if email assigned
test("Can assign email", () => {
    const email = "mollyannmarieh@gmail.com";
    const newEmp = new Employee("Molly", 96, email);
    expect(newEmp.email).toBe(email);
});

// function testers

test("Can pass name through the getName function", () => {
    const testName = "Molly";
    const newEmp = new Employee(testName);
    expect(newEmp.getName()).toBe(testName);
});

test("Can pass id through getID function", () => {
    const testId = "96";
    const newEmp = new Employee("Molly", testId);
    expect(newEmp.getId()).toBe(testId);
});

test("Can pass email through getEmail function", () => {
    const testEmail = "mollyannmarieh@gmail.com";
    const newEmp = new Employee("Molly", 96, testEmail);
    expect(newEmp.getEmail()).toBe(testEmail);
});

// test role

test("Can return employee role to employees", () => {
    const testEmployment = "Employee";
    const newEmp = new Employee("Molly", 96, "mollyannmarieh@gmail.com");
    expect(newEmp.getRole()).toBe(testEmployment);
});