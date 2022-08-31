const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// tests for name, id, email

test("Can assign name", () => {
    const name = "Marie";
    const newEng = new Engineer(name);
    expect(newEng.name).toBe(name);
});

test("Can assign ID", () => {
    const id = 98;
    const newEng = new Engineer("Marie", id);
    expect(newEng.id).toBe(id);
});

test("Can assign email", () => {
    const email = "marieh@gmail.com";
    const newEng = new Engineer("Marie", 98, email);
    expect(newEng.email).toBe(email);
});

// test for github

test("Can assign github", () => {
    const github = "wtNorris";
    const newEng = new Engineer("Marie", 98, "marieh@gmail.com", github);
    expect(newEng.github).toBe(github);
});

// function test for github

test("Can pass github through getGithub function", () => {
    const testGithub = "wtNorris";
    const newEng = new Engineer("Marie", 98, "marieh@gmail.com", testGithub);
    expect(newEng.getGithub()).toBe(testGithub);
})

// test role

test("Can return engineer role to engineers", () => {
    const testEngineer = "Engineer";
    const newEng = new Engineer("Marie", 98, "marieh@gmail.com", "wtNorris");
    expect(newEng.getRole()).toBe(testEngineer);
});