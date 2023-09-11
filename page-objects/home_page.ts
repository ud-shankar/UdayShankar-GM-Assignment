import { Page } from "@playwright/test";

export class HomePage {

    page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('/');
        //Assert page title after successful navigation
        (await (this.page).title()).match('DEMOQA');
    }

    async selectMenuFromHomePage(menu:string) {
        await this.page.getByText(menu).click();
    }

}