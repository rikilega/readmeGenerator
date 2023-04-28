const fs = require('fs');
const inquirer = require('inquirer')

inquirer.
    prompt([
        {
            type: 'input',
            message: 'What is the Title of your project',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'What is your application description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is your application usage information',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines',
            name: 'contributionGuide',
        },
        {
            type: 'input',
            message: 'What are the test instructions',
            name: 'testInstr',
        },
        {
            type: 'list',
            message: 'What license do you want to use',
            name: 'license',
            choices: [ 'MIT', 'Public', 'Copyright' ],
        },
        {
            type: 'list',
            message: 'choose your method of communication from the following list',
            name: 'communicationMethod',
            choices: [ 'email', 'phone', 'fax' ],
        },
        {
            type: 'list',
            message: 'Choose a license from the following list',
            name: 'licenseBadge',
            choices: [ 'Creative Commons', 'IPL', 'MPL' ]
        }
    ])
    .then((response) => {
        console.log(response)
        console.log('github.com/' + response.userName)
        const readmeContent = generateReadme(response);
        fs.writeFile('readme.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Success!');
            }
        });
    });

    function generateReadme(input) {
        if (input.licenseBadge === 'Creative Commons') {
            input.licenseBadge = 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg'
        } else if (input.licenseBadge === 'IPL') {
            input.licenseBadge ='https://img.shields.io/badge/License-IPL_1.0-blue.svg'
        } else {
            input.licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
        }
        let readmeTemplate = `
<div style="align-items: center">
<h1 style="font-size: 40px; font-weight: bold; text-align: center;">${input.projectName}</h1>
<img src=${input.licenseBadge}>
</div>

## Description 
${input.description}

## Table of Contents
* [Usage](#usage)

## Usage 
${input.usageInfo}
    
## Contribution Guidelines 
${input.contributionGuide}
    
## Test Instructions 
${input.testInstr}
    
## License 
This project is licensed under the ${input.license} license.
    
## Questions 
If you have any questions, you can reach me through my github: [@rikilega](github.com/${input.userName}) or my email: ${input.emailAddress}
    `;
        return readmeTemplate;
    }