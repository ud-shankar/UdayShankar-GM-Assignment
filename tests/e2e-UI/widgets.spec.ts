import { test } from "@playwright/test";
import { PageObjects } from "../object";

let pageObject;

test.beforeEach(async ({page}) => {
    pageObject = new PageObjects(page);
    pageObject.homePage().navigateToHomePage();
    pageObject.homePage().selectMenuFromHomePage('Widgets');
});

test('TC04 - Verify the progress bar', async({page}) =>{
    await pageObject.homePage().selectSectionFromMenu('Progress Bar');
    await pageObject.widgets().VerifyProgressBarState('Start');
    await pageObject.widgets().VerifyProgressBarState('In Progress');
    await pageObject.widgets().VerifyProgressBarState('Finished');
});

test('TC05 - Verify the tooltip', async({page}) =>{
    await page.getByText('Tool Tips').click();
    await pageObject.widgets().verifyToolTip('TextBox');
    await pageObject.widgets().verifyToolTip('Button')
});


