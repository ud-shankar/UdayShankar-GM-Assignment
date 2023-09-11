import { Page, expect } from "@playwright/test";

export class Interaction {

    page: Page;
    
    constructor(page:Page) {
        this.page = page;
    }

    //Locators droppable page
    dropElement = '//div[@id="draggable"]';
    dropBoxElement = '//div[@id="droppable"]';
    dropBoxElementText = '//div[@id="simpleDropContainer"]//div[@id="droppable"]/p'

    //To drag and drop element and verify state change by asserting the inner text
    async verifyDragAndDrop() {
        await this.page.dragAndDrop(this.dropElement, this.dropBoxElement);
        expect(await this.page.locator(this.dropBoxElementText).innerText()).toBe('Dropped!');
    }
}