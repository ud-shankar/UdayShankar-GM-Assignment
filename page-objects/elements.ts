import { Page, expect } from "@playwright/test";

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

    /*
    Description: To Verify the imgae property 'naturalWidth' to assert the value is 0 for broken images
    Params: locator:string - locator of the image to verify the state of the image
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async VerifyImageState(locator:string) {
        await this.page.waitForLoadState('domcontentloaded');
        const image = await this.page.$$(this.brImage);
        const naturalWidth = await image[0].getProperty('naturalWidth');
        expect (Number(naturalWidth)).toBe(0);
    }

    /*
    Description: To Get the row number from the table for the given email id
    Params: email:string - email id of the user whose row number needs to be identified
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
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

    /*
    Description: To assert names in the table for the given email id
    Params: firstName:string - firstName of the user to assert
    lastName:string - lastName of the user to assert
    email:string - email id of the user whose row number needs to be identified
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async assertNamesInTableView(firstName:string, lastName:string, email:string) {
        let row = await this.getTableRowNumber(email);
        let tableFirstName = await this.page.locator(`(//div[@role="row"])[${row}]/div[1]`).innerText();
        expect(tableFirstName).toBe(firstName);
        let tablelastName = await this.page.locator(`(//div[@role="row"])[${row}]/div[2]`).innerText();
        expect(tablelastName).toBe(lastName);
    }

    /*
    Description: To click the submit button in registration form
    Params: Nil
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async clickFormSubmitButton() {
        await this.page.
        click(this.formSubmit);
    }

    /*
    Description: To click on edit icon from the table for the user with matching email id
    Params: email:string - email id of the user whose row number needs to be identified to click edit button
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async clickOnEditIcon(email:string) {
        let row = await this.getTableRowNumber(email);
        await this.page.click(`//div[@class="action-buttons"]/span[@id="edit-record-${Number(row)-1}"]`);
    }
}
