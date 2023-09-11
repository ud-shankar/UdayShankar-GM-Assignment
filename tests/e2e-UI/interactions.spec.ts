import { test } from "@playwright/test";
import { PageObjects } from "../object";

let pageObject;

test.beforeEach(async ({page}) => {
    pageObject = new PageObjects(page);
    pageObject.homePage().navigateToHomePage();
    pageObject.homePage().selectMenuFromHomePage('Interactions');
});

test('TC06 - Verify user can drag and drop', async() => {
    await pageObject.homePage().selectSectionFromMenu('Droppable');
    await pageObject.interactions().verifyDragAndDrop();
});
