// TODO: Include packages needed for this application

const inquirer = require('inquirer'); 
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')


const licenseOptions = [
    "MIT License",
    "GPL 3.0",
    "Apache License 2.0",
    "BSD 3-Clause (New or Revised) License",
    "None",
    
  ];



// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input' , 
        name: 'title' , 
        message: '<Your-Project-Title> What is the title of your project?'
    }, 

    { 
        type: 'input' , 
        name: 'description' , 
        message: 'Description: Provide a short description explaining the what, why, and how of your project.'
    }, 

    
    { 
        type: 'input' , 
        name: 'installationInstructions' , 
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?'
    }, 

    { 
        type: 'input' , 
        name: 'usageInformation' , 
        message: 'Provide instructions and examples for use.'
    }, 
    { 
        type: 'list' , 
        name: 'license' , 
        message: 'If you have a license, choose from the below. If not, simply hit enter.',
        choices: licenseOptions,
    }, 

    { 
        type: 'input' , 
        name: 'contributionGuidelines' , 
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
    }, 

    { 
        type: 'input' , 
        name: 'testInstructions' , 
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    { 
        type: 'input' , 
        name: 'email' , 
        message: 'What is your email address?'
    },
    { 
        type: 'input' , 
        name: 'github' , 
        message: 'What is your GitHub username?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('README.md', generateMarkdown(answers));
        })


}

// Function call to initialize app
init();
