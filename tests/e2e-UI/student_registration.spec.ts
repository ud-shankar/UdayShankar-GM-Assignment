import { test } from "@playwright/test";
import { PageObjects } from "../object";

let pageObject;

test.beforeEach(async ({page}) => {
    pageObject = new PageObjects(page);
    pageObject.homePage().navigateToHomePage();
    pageObject.homePage().selectMenuFromHomePage('Forms');
});

test('TC03 - Verify user can submit the form', async() =>{
    await pageObject.homePage().selectSectionFromMenu('Practice Form');
    await pageObject.studentRegistration().fillFormDetails();
});
