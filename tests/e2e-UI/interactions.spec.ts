import { test } from "@playwright/test";
import { HomePage } from "../../page-objects/home_page";
import { Interaction } from "../../page-objects/interactions";

let interaction_object, home_object;

test.beforeEach(async ({page}) => {
    interaction_object = new Interaction(page);
    home_object = new HomePage(page);
    home_object.navigateToHomePage();
    home_object.selectMenuFromHomePage('Interactions')
});

test('TC06 - Verify user can drag and drop', async({page}) =>{
    await page.getByText('Droppable').click();
    await interaction_object.verifyDragAndDrop();
});
