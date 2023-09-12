# UdayShankar-GM-Assignment
## Assignment for automating UI and API Tests using PlayWright - Typescript

## ❗️ Links & Important Resources

- **[Oficial Documentation - Playwright](https://playwright.dev/docs/intro)**
- **[Framework Flow Chart and Documentation](https://docs.google.com/document/d/18gOqv2nCT2B3tSmxk44FpN8BZp2z1YF5xfDnkhEjg6k/edit?usp=sharing)**

## Resources Used
- **Playwright**
- **VS Code**
- **VS Code - extension for PlayWright**
- **Node.Js**

## Steps followed to create the project:
- Install the lastest version of VS code and Node.js in your local machine.
- After successful installation create new folder and name you project.
- Open the folder in VS Code and go to extensions to install the playwright plugin provided by microsoft.
- Install the plugin and restart VS Code. Now open the Command Palette in VS code and type 'Install          Playwright'. Choose the necessary browsers and click ok.
- This will install and initialize playwright in the project folder.
- Additionally for this project we need to install faker used to create random test data. The following command can be run in terminal 'npm install @faker-js/faker --save-dev'.

### Steps to run the project/-scenarios

To Run playwright from terminal:

1. $ npx playwright test -g 'test title'
- To run a set of test cases that has a specific title eg: 'TC02 - Verify broken image'

2. $ npx playwright test 'testfilename'
- To run all test in a single test file

3. $ npx playwright test
- To run all the test files/scenarios in the project

4. We can also make use of the test explorer on using VS Code to run individual test or a group of tests. 

- To open the html report execute the following command:
$ npx playwright show-report
