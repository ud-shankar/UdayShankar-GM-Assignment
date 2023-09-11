import { Page, expect } from "@playwright/test";

export class StudentRegistrationForm {

    page: Page;
    
    constructor(page:Page) {
        this.page = page;
    }

    //Locators
    stateDropdown = '(//div[@id="stateCity-wrapper"]//input)[1]'
    cityDropdown = '(//div[@id="stateCity-wrapper"]//input)[2]'
    submitButton = '[id="submit"]'
    dateSelector = '[id="dateOfBirthInput"]'
    subjet = '[id="subjectsInput"]'

    async fillFormDetails() {
        await this.page.getByPlaceholder('First Name').fill("Gerimedica");
        await this.page.getByPlaceholder('Last Name').fill("BV");
        await this.page.getByPlaceholder('name@example.com').fill("test@test.com");
        //await this.page.locator('#gender-radio-1').click();
        await this.page.getByPlaceholder('Mobile Number').fill("0123456789");
        await this.page.locator(this.dateSelector).fill("15th January 1990");
        await this.page.locator(this.dateSelector).press('Enter');
        await this.page.locator(this.subjet).type("Playwright Assignment");
        await this.page.waitForTimeout(2000);
        
        //await this.page.click('//input[@value="1"]', {force:true});
        await this.page.getByPlaceholder('Current Address').fill("Netherlands");
        await this.page.locator(this.stateDropdown).fill("NCR");
        await this.page.locator(this.stateDropdown).press('Enter');
        await this.page.locator(this.cityDropdown).fill("Delhi");
        await this.page.locator(this.cityDropdown).press('Enter');
        await this.page.locator(this.submitButton).click(); 
    }
}