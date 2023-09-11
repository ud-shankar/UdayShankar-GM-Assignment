import { Page, expect } from "@playwright/test";

export class Widgets {

    page: Page;
    
    constructor(page:Page) {
        this.page = page;
    }

    //Locators progress bar page
    bar = '//div[@role="progressbar"]';
    startButton = '[id="startStopButton"]'
    resetButton = '[id="resetButton"]'

    //Locators tool tips page
    textField = '[id="toolTipTextField"]'
    button = '[id="toolTipButton"]'
    toolTip = '[class="tooltip-inner"]';

    //To verify different states of the progress bar before and after clicking start button
    async VerifyProgressBarState(state:string) {
        await this.page.waitForLoadState('domcontentloaded');
        
        if (state == 'Start') {
            expect(await this.page.locator(this.bar).getAttribute("aria-valuenow")).toBe("0");
        } else if(state == 'Finished') {
            await this.page.locator(this.resetButton).isEditable();
            expect(await this.page.locator(this.bar).getAttribute("aria-valuenow")).toBe("100");
        } else {
            await this.page.locator(this.startButton).click();
            await this.page.waitForTimeout(3000);
            expect(Number(await this.page.locator(this.bar).getAttribute("aria-valuenow"))).toBeGreaterThan(0);
        }
    }

    //To hover over the elements and assert tootltip message
    async verifyToolTip(field:string) {
        
        if (field == 'TextBox') {
            await this.page.hover(this.textField);
            await this.page.waitForTimeout(2000);
            expect(await this.page.locator(this.toolTip).innerText()).toBe('You hovered over the text field');
        } else {
            await this.page.hover(this.button);
            await this.page.waitForTimeout(2000);
            expect(await this.page.locator(this.toolTip).innerText()).toBe('You hovered over the Button');
        }
    }
}