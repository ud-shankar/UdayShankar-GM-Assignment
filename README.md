# UdayShankar-GM-Assignment
## Assignment for automating UI and API Tests using PlayWright - Typescript

- Playwright is used to perform browser automation for both front end and backend automation.
- Typescript is used as the scripting language for this framework.
- The Test Automation Framework is created for automating the scenarios in DemoQA site for UI and the accounts, book store APIs available in DemoQA swagger docs. 
- The framework is designed based on Page Object model with code modularity and maximum reuseability.
- The reporting feature of playwright handles generation of reports with each run and configured to capture screenshots only for failed test cases.
- Browsers are run in headless mode as this is will come in handy while integrating the test in CI/CD pipelines.
- The framework is designed to run on all browsers supported by playwright.
- The global configuration required on the test are done in playwright.config.ts files including the baseurl, browser settings, reporting etc.
- The page level test are independent and can be run in parallel to attain faster results. 

### Folder Structure

The Test Automation Suite is having below folders.

- **common-lib** : The common-lib folder houses all the common functions and common steps which are used across the project. It maily contains two files one is keywords.ts that contains all the common function useful for UI automation and api_lib.ts that contains helper methods for API automation.
- **page-objects** : This folder has been used to save the locators and methods for each page in case of front end automation. Each file corresponds to each page in the UI and contains classes which groups the locators and necessary methods corresponding to that page which are used in test cases. Emphasis has been kept to reuse the codes wherever possible using file level methods.
- **test-data** : All the test data files required for both UI and API auotmation can be stored here. The test data is stored at page level in case of UI.
- **tests** : The test data folder has two parts:
- ***e2e-UI***: This folder consists of all the UI test files based on each module.
- ***e2e-API***: This folder consists of all the API test files based on each module.

The object.ts file handles creation of all objects for different classes used in the page-object foder. This helps in avoiding importing multiple classes and creation of multiple objects in test files.

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

1. $ npx playwright test -g <test title> 
To run a set of test cases that has a specific title eg: 'TC02 - Verify broken image'

2. $ npx playwright test <testfilename>
To run all test in a single test file

3. $ npx playwright test
To run all the test files/scenarios in the project

We can also make use of the test explorer on using VS Code to run individual test or a group of tests. 

To open the html report execute the following command:
$ npx playwright show-report

## Enchancements that can be considered for the framework (Future Scope or Roadmap in framework architecture)

1. Add input files like csv or excel/ json files to fetch more test data that will bring in a more efficient data drive approach to the framework. 
2. Add more helper files/ methods that can be used across the framework to improve resuablity.
3. Integrate with Ci/Cd pipeline to schedule jobs and trigger the suite periodically. 
4. The framework can be integrated with third party tools like Jira or test rail etc to run cases specific to the test cycle or test suites and save the reports.