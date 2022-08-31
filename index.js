// packages needed

const inquirer = require("inquirer");
const fs = require("fs");

// classes needed

const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// html cards needed
const addManaCard = require('./src/ManaCard');
const addIntCard = require('./src/IntCard');
const addEngCard = require('./src/EngCard');
const teamCards = require('./src/teamCards');

const team = [];

const addMana = [
    {
        type: "confirm",
        name: "role",
        message: 'Hit enter to begin building your team.',
        validate: (value) => {if(value){return true} else {return 'You must hit enter to begin'}},
    },
    {
        type: "input",
        name: "name",
        message: 'Name of manager?',
        validate: (value) => {if(value){return true} else {return 'You must enter a name'}},
    },
    {
        type: "input",
        name: "id",
        message: 'Employee Id?',
        validate: (value) => {if(value){return true} else {return 'You must enter a valid Id'}},
    },
    {
        type: "input",
        name: "email",
        message: 'Your email address: ',
        validate: (value) => {if(value){return true} else {return 'You must enter an email address'}},
    },
    {
        type: "input",
        name: "offNumber",
        message: 'You office number?',
        validate: (value) => {if(value){return true} else {return 'You must enter a valid number'}},
    },
    {
        type: "list",
        name: "NextOptions",
        choices: ['Add Intern', 'Add Engineer', 'Team complete'],
        message: 'Add to your team or finish it: ',
        validate: (value) => {if(value){return true} else {return 'You must chose an option'}},
    }
];