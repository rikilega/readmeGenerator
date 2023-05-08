<div style="align-items: center">
<h1 style="font-size: 40px; font-weight: bold; text-align: center;">ReadMe Generator</h1>
<h3 style="font-size: 16px; font-weight: fine; text-align: center;">Richard Aspinall</h3>
<img src=https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg style="align-items: center;">
</div>

## Table of Contents
* [Description](#description) 
* [Installation](#installation) 
* [Usage](#usage)                                    
* [License](#license)                             
* [Contributing](#contributing)                     
* [Tests](#tests)
* [Questions](#questions)
* [Code/Links](#code/links)

## Description 
 This application allows users to quickly and easily create a professional readMe file for their project. The program uses node and takes the user through a series of prompts, utilizing inquirer, to establish what information will be displayed.  After going through all the prompts the application saves  the created readme.md file in the current directory. The readme file will consist of the title of the project and the name of the user at the top of the page. Below the title and name a license badge, chosen by the user, will be displayed. The table of contents is displayed below that, containing the different sections included in the readme as follows: Description, Installation, Usage, License, Contributing, Tests and Questions. Each item in the table of contents will allow the user to navigate directly to that specific section of the readme by clicking on it. Of course, after creating the readme file, changes can still be made, if desired, by editing the readme code directly. This readme you are reading now has been created using this application. In the examples folder you can find another sample readme, or just click [here.](./examples/sample-readme.md) If you would like to watch a video showing how to use the app please click [here.](https://drive.google.com/file/d/1ovokYA87lhXoO7mnx-Ojt2sGoCZ_FLDd/view)

## Installation
This application is designed to run within Node.js and will therefore require Node.js and a CLI to run. If you do not have Node.js, it can be downloaded at nodejs.org/en/download. Be sure to follow the download instructions for your specific platform. 

## Usage 
To run initiate the ReadMe Generator ensure you have downloaded Node.js. Clone this repository to your local machine or download as a zip file and extract it. Open a terminal window and navigate to the directory that you cloned or extracted the repository. Install inquirer package by first typing "npm init" into the terminal, then press enter. Then type "npm i inquirer@8.2.4", then press enter. Once the inquire package has been installed you can initiate the readme generator by typing "node index.js" into the terminal and pressing enter. The program will then take you through a series of questions/prompts. Answer all questions with as much detail as you deem necessary. Once you have completed all prompts, your new readme file will be saved in your current directory. Further editing of the readme can be done within the readme file itself.

## License 
This project is licensed under the Creative Commons license.

## Contributing 
If you wish to contribute to this project please adhere to the following:  Ensure that you start by forking your repository so that you can make changes without affecting the main project. You should then clone the forked repository to your local directory so you can make changes. All new features or fixes should be completed within a new branch to manage pull requests and isolate changes. The core team will review all changes and provide feedback before any pull request can be merged. All contributors please test all of your changes befor submitting a pull request. 

## Tests 
Ensure the application is properly installed by following the installation instructions. If everything is installed correctly, you should be able to run the application from the command line with the node command.  Begin by testing the basic functionality of the application. Enter responses to each prompt and verify that a README file is generated with the provided information. Open the generated README file and ensure that all the information you provided is accurately represented. Test each license option separately. When you select a license, make sure the correct license badge appears in the generated README file. Test the functionality that allows you to select which questions to include in the README file. Make sure that only the selected questions appear in the generated README file.  Test the application's error handling. Try providing invalid input or interrupting the application to see how it handles errors.

## Questions 

### How do I install or use this project?
 Installation instruction are provided in the "Installation" section of this readme.

### I found a bug, what should I do?
 If you are contributing to the project please perform necessary tests to confirm the cause of the issue and notify the core team. Otherwise, you can reach out to us via email: rosedoland33@yahoo.com

### How can I contribute to this project?
 Please refer to the "Contributing" section of this readme for contributing instructions.

### Who maintains this project?
 This project is maintained by rikilega.

If you have any additional questions, you can reach me through my github: [@rikilega](github.com/rikilega) or my email: rosedoland33@yahoo.com
    
## Code/Links
The index.js file can be found [here](index.js) and if you would like to watch a video showing how to use the app please click [here](https://drive.google.com/file/d/1ovokYA87lhXoO7mnx-Ojt2sGoCZ_FLDd/view).