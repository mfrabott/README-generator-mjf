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
      message: 'What is the url of your repository?',
      name: 'repository',
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
      type: 'input',
      message: 'What are the instructions for testing the application?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'What are the installation instructions for your project?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v2.0', 'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
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
    const projTest = response.test
    const projRepo = response.repository
    let badge = ''

    switch(projLicense){
      case 'Apache License 2.0':
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'BSD 3-Clause License':
        badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        break;
      case 'BSD 2-Clause License':
        badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
        break;
      case 'GNU General Public License v2.0':
        badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        break;
      case 'MIT License':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'Mozilla Public License 2.0':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'The Unlicense':
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        break;
      case 'Boost Software License 1.0':
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      default:
        badge = '';
    }

    let printREADME = `
  
# ${projTitle}

${badge}

## Table of Contents

[Project Description](${projRepo}#Project-Description)

[Installation Instructions](${projRepo}#Installation)

[Usage Information](${projRepo}#Usage)

[License](${projRepo}#License)

[Contributing](${projRepo}#Contributing)

[Tests](${projRepo}#Tests)

[Questions](${projRepo}#Questions)

## Project Description
${projDesc}


## Installation
${projInstall}

## Usage
${projUsage}

## License

This project is covered under the ${projLicense}.

## Contributing

${projContribute}

## Tests 
${projTest}

## Questions

Find more of my work at: https://github.com/${projUsername}

For any questions, please contact me at: ${projEmail}

`
  fs.appendFile('README.md', printREADME, (err) => {
        err ? console.error(err) : console.log('README Created!')
    })
  });