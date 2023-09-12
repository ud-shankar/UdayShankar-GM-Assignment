import { Page } from "@playwright/test";

export class HomePage {

    page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    /*
    Description: To Navigate to Demo QA home page and assert title
    Params: Nil
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async navigateToHomePage() {
        await this.page.goto(String(process.env.product_url));
        (await (this.page).title()).match(String(process.env.home_page_title));
    }

    /*
    Description: To select option from home page menu cards
    Params: menu:string - User input to select
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async selectMenuFromHomePage(menu:string) {
        await this.page.getByText(menu).click();
    }

    /*
    Description: To select sub-section fom the menu
    Params: section:string - User input to select the sub section
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async selectSectionFromMenu(section:string) {
        await this.page.getByText(section).click();
    }

}