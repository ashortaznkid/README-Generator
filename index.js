const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

function writeToFile(data) {
    fs.writeFile('./otuput/README.md', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('\nREADME file created!');
        }
    });
}

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the title of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project: ',
        validate: projDescInput => {
            if (projDescInput) {
                return true;
            } else {
                console.log('Please provide a description of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub username: ',
        validate: projDescInput => {
            if (projDescInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
    {
        type: 'confirm',
        name: 'toc',
        message: 'Would you like to include a table of contents? ',
        default: false
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation notes: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage notes: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['MIT', 'GPL v3']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide details on how to contribute: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any test instructions: ',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide common questions and answers: ',
    }
])
.then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    writeToFile(data);
})