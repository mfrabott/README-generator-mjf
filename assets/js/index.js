const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the intended use for your project?',
      name: 'usageInfo',
    },
    {
      type: 'input',
      message: 'How can others contribute to the project?',
      name: 'contribute',
    },
    {
      type: 'list',
      message: 'What are the installation instructions for your project?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])

  .then((response) => {

    const projTitle = response.title
    const projDesc = response.description
    const projInstall = response.installation
    const projUsage = response.usageInfo
    const projLicense = response.license
    const projUsername = response.username
    const projEmail = response.email
    const projContribute = response.contribute
    


    let printREADME = `
  
# ${projTitle}

## Table of Contents

[Project Description](https://github.com/mfrabott/README-generator/mjf#Project-Description)
[Installation Instructions](https://github.com/mfrabott/README-generator/mjf#Installation-Insturctions)
[Usage Information](https://github.com/mfrabott/README-generator/mjf#Usage-Information)
[License](https://github.com/mfrabott/README-generator/mjf#License)
[Contributing](https://github.com/mfrabott/README-generator/mjf#Contributing)
[Tests](https://github.com/mfrabott/README-generator/mjf#Tests)
[Questions](https://github.com/mfrabott/README-generator/mjf#Questions)

## Project Description
${projDesc}

## Installation Instructions
${projInstall}

## Usage Information
${projUsage}

## License
${projLicense}
// TODO: a badge for that license is added near the top of the README and a notice is added to the section of the README

## Contributing
${projContribute}

## Tests 

## Questions
${projUsername}
${projEmail}

`

  fs.appendFile('README.md', printREADME, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
    })
  });