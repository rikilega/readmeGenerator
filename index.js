const fs = require('fs');
const inquirer = require('inquirer')
const questionList = [
    'How do I install or use this project?',
    'I found a bug, what should I do?',
    'I have a feature request or an idea for this project, how can I share it?',
    'How can I contribute to this project?',
    'Can I use this project for commercial purposes?',
    'Is there any support if I face issues or need help?',
    'How can I stay updated with the latest changes or versions?',
    'Who maintains this project?'
    ];

inquirer.
    prompt([
        {
            type: 'input',
            message: 'What is the Title of your project',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'What is your full name?',
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
            message: 'What is your application description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is your application usage information?',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributionGuide',
        },
        {
            type: 'input',
            message: 'What are the test instructions',
            name: 'testInstr',
        },
        {
            type: 'list',
            message: 'Choose a license from the following list',
            name: 'licenseBadge',
            choices: [ 'Creative Commons', 'IPL', 'MPL' ]
        },
        {
            type: 'checkbox',
            message: 'Choose the questions you would like to include in the questions section',
            name: 'questions',
            choices: questionList,
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one question.';
                }
                return true;
            }
        }
    ])

    .then((response) => {
        const selectedQuestions = response.questions;
        const followUpQuestions = selectedQuestions.map((question) => {
            return {
                type: 'input',
                name: question,
                message:  `${question}`,
            };
        });
    
        return inquirer.prompt(followUpQuestions).then((answers) => {
            return {...response, ...answers}; 
        });
    })
        
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
            input.licenseBadgeURL = 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg'
        } else if (input.licenseBadge === 'IPL') {
            input.licenseBadgeURL ='https://img.shields.io/badge/License-IPL_1.0-blue.svg'
        } else {
            input.licenseBadgeURL = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
        }
        const questionsAnswers = input.questions.map(question => {
            return `\n### ${question}\n ${input[question]}`
        }).join("\n")
        let readmeTemplate = `
<div style="align-items: center">
<h1 style="font-size: 40px; font-weight: bold; text-align: center;">${input.projectName}</h1>
<h3 style="font-size: 16px; font-weight: fine; text-align: center;">${input.name}</h3>
<img src=${input.licenseBadgeURL} style="align-items: center;">
</div>

## Table of Contents
* [Description](#description) 
* [Installation](#installation) 
* [Usage](#usage)                                    
* [License](#license)                             
* [Contributing](#contributing)                     
* [Tests](#tests)
* [Questions](#questions)

## Description 
${input.description}

## Installation
${input.installation}

## Usage 
${input.usageInfo}

## License 
This project is licensed under the ${input.licenseBadge} license.

## Contributing 
${input.contributionGuide}

## Tests 
${input.testInstr}

## Questions 
${questionsAnswers}

If you have any additional questions, you can reach me through my github: [@${input.userName}](github.com/${input.userName}) or my email: ${input.emailAddress}
    `;
        return readmeTemplate;
    }