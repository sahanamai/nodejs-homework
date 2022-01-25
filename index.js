const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
var questions = [
  {
    type: 'input',
    message: "What is your github username?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is your email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your project name ?',
    name: 'project_name',
  },
  {
    type: 'input',
    message: 'please write a short description of your project?',
    name: 'description',
  },
  {
    type: 'list',
    message: 'what kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GNU', 'mozilla public license(MPL) 2.0',]
  },
  {
    type: 'input',
    message: 'what command should be run to install dependencies?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'what command should be run to run test?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'what does the user need to know about using the repo?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'what does the user need to know about contributing to the repo?',
    name: 'contribution',
  },

];
inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response);
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Please try again.')


    fs.writeFile('samplereadme.md', generateMarkdown(response), (err) =>
      err ? console.log(err) : console.log('response written to sample readme file.'));
  });


