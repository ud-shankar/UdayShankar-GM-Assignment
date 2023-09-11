import { test } from "@playwright/test";
import { Widgets } from "../../page-objects/widgets";
import { HomePage } from "../../page-objects/home_page";

let widgets_object, home_object;

test.beforeEach(async ({page}) => {
    widgets_object = new Widgets(page);
    home_object = new HomePage(page);
    home_object.navigateToHomePage();
    home_object.selectMenuFromHomePage('Widgets')
});

test('TC04 - Verify the progress bar', async({page}) =>{
    await page.getByText('Progress Bar').click();
    await widgets_object.VerifyProgressBarState('Start');
    await widgets_object.VerifyProgressBarState('In Progress');
    await widgets_object.VerifyProgressBarState('Finished');
});

test('TC05 - Verify the tooltip', async({page}) =>{
    await page.getByText('Tool Tips').click();
    await widgets_object.verifyToolTip('TextBox');
    await widgets_object.verifyToolTip('Button')
});


