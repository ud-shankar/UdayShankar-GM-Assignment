import { Page } from "@playwright/test";

export class HomePage {

    page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    //Navigate to home page and assert title
    async navigateToHomePage() {
        await this.page.goto('/');
        //Assert page title after successful navigation
        (await (this.page).title()).match('DEMOQA');
    }

    //Select option from home page menu cards
    async selectMenuFromHomePage(menu:string) {
        await this.page.getByText(menu).click();
    }

    //Select section fom the menu
    async selectSectionFromMenu(section:string) {
        await this.page.getByText(section).click();
    }

}