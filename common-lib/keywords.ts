import { Page, expect } from "@playwright/test";

export class keyword {

    page:Page

    constructor(page:Page) {
        this.page = page;
    }

    /*
    Description: To wait untill all dom elemets are attached and then type the input string
    Params: locator:string - locator of the input field
    input:string - User input to be sent
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    focusAndType(locator:string, input:string) {
        this.page.locator(locator).waitFor({state:"attached", timeout:20000});
        this.page.locator(locator).type(input);
    }

    /*
    Description: To wait untill all dom elemets are attached and then fill the input string
    Params: locator:string - locator of the input field
    input:string - User input to be sent
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    focusAndFill(locator:string, input:string) {
        this.page.locator(locator).waitFor({state:"attached", timeout:20000});
        this.page.locator(locator).fill(input);
    }

}