import { Page, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class Elements {

    page: Page;
    
    constructor(page) {
        this.page = page;
    }

    //Locators for web tables
    formSubmit = '#submit';
    newButton = '#addNewRecordButton';
    firstNameInput = "#firstName";
    lastNameInput = "#lastName";
    departmentInput = "#department";
    salaryInput = "#salary";
    emailInput = "#userEmail";
    ageInput = "#age";

    //Locators for broken Images and links
    brImage = "(//p[text()='Broken image']//parent::div/img)[2]";

    //Verify the imgae property 'naturalWidth' to assert the value is 0 for broken images
    async VerifyImageState(locator:string) {
        await this.page.waitForLoadState('domcontentloaded');
        const image = await this.page.$$(this.brImage);
        const naturalWidth = await image[0].getProperty('naturalWidth');
        expect (Number(naturalWidth)).toBe(0);
    }
    
    focusAndType(locator:string, input:string) {
        this.page.locator(locator).waitFor({state:"attached", timeout:20000});
        this.page.locator(locator).type(input);
    }

    clearAndFill(locator:string, input:string) {
        this.page.locator(locator).waitFor({state:"attached", timeout:20000});
        this.page.locator(locator).fill(input);
    }

    async getTableRowNumber (email:string): Promise<Number> {
        let index = 0;
        const elements = this.page.locator('(//div[@role="row"])/div[4]');
        for (const row of await elements.all()) {
            index +=1;
            if (await row.innerText() == email) {
                return index;
            }
        }
        return index;
    }

    async assertNamesInTableView(firstName:string, lastName:string, email:string) {
        let row = await this.getTableRowNumber(email);
        let tableFirstName = await this.page.locator(`(//div[@role="row"])[${row}]/div[1]`).innerText();
        expect(tableFirstName).toBe(firstName);
        let tablelastName = await this.page.locator(`(//div[@role="row"])[${row}]/div[2]`).innerText();
        expect(tablelastName).toBe(lastName);
    }

    async clickFormSubmitButton() {
        await this.page.click(this.formSubmit);
    }

    async clickOnEditIcon(email:string) {
        let row = await this.getTableRowNumber(email);
        await this.page.click(`//div[@class="action-buttons"]/span[@id="edit-record-${Number(row)-1}"]`);
    }
}