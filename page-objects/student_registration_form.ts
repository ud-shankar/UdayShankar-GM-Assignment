import { Page, expect, test } from "@playwright/test";

export class StudentRegistrationForm {

    page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    //Locators for registration form
    stateDropdown = '(//div[@id="stateCity-wrapper"]//input)[1]'
    cityDropdown = '(//div[@id="stateCity-wrapper"]//input)[2]'
    submitButton = '[id="submit"]'
    dateSelector = '[id="dateOfBirthInput"]'
    subjet = '[id="subjectsInput"]'
    firstName = '[id="firstName"]'
    lastName = '[id="lastName"]'
    email = '[id="userEmail"]'
    mobileNumber = '[id="userNumber"]'
    currentAddress = '[id="currentAddress"]'
    fileUpload = "input[type='file']"
    formSubmitModal = '[id="example-modal-sizes-title-lg"]'

    /*
    Description: To fill and submit the student registration form
    Params: data - Passed by user to fill in the data
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async fillFormDetails(data) {
        await this.page.locator(this.firstName).fill(data['firstName']);
        await this.page.locator(this.lastName).fill(data['lastName']);
        await this.page.locator(this.email).fill(data['email']);
        await this.page.evaluate("document.getElementById('gender-radio-1').click();");
        await this.page.locator(this.mobileNumber).fill(data['mobile']);
        await this.page.locator(this.dateSelector).fill(data['DOB']);
        await this.page.waitForLoadState;
        await this.page.locator(this.dateSelector).press('Enter');
        await this.page.locator(this.subjet).type(data['subject']);
        await this.page.setInputFiles(this.fileUpload, data['filepath']);
        await this.page.evaluate("document.getElementById('hobbies-checkbox-1').click();");
        await this.page.locator(this.currentAddress).fill(data['currentAddress']);
        await this.page.locator(this.stateDropdown).fill(data['state']);
        await this.page.locator(this.stateDropdown).press('Enter');
        await this.page.locator(this.cityDropdown).fill(data['city']);
        await this.page.locator(this.cityDropdown).press('Enter');
        await this.page.evaluate("document.getElementById('submit').click();"); 
    }

    /*
    Description: To asset the form is submitted successfully or not
    Params: Nil
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async assertFormSubmittedSuccessfully() {
        try {
            const modalHeading = await this.page.locator(this.formSubmitModal).innerText();
            expect (modalHeading).toBe('Thanks for submitting the form');
        } catch (error) {
            test.fail();
        }  
    }
}