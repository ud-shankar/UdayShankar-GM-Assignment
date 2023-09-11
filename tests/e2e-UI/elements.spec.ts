import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HomePage } from "../../page-objects/home_page";
import { Elements } from "../../page-objects/elements";
import { keyword } from "../../common_lib/keywords";

let element_object, home_object, keyword_object;

test.beforeEach(async ({page}) => {
    element_object = new Elements(page);
    home_object = new HomePage(page);
    keyword_object = new keyword(page);
    home_object.navigateToHomePage();
    home_object.selectMenuFromHomePage('Elements');
});

test('TC01- Scenario A - Verify user can enter new data into the table', async({page}) =>{
    await page.getByText('Web Tables').click();
    let email = faker.internet.email();
    await page.click(element_object.newButton);
    await page.waitForTimeout(5000);
    await keyword_object.focusAndType(element_object.firstNameInput, "Uday");
    await keyword_object.focusAndType(element_object.lastNameInput, "Shankar");
    await keyword_object.focusAndType(element_object.departmentInput, faker.commerce.department());
    await page.waitForTimeout(5000);
    await keyword_object.focusAndType(element_object.salaryInput, "4550");
    await page.waitForTimeout(5000);
    await keyword_object.focusAndType(element_object.emailInput, email);
    await page.waitForTimeout(2000);
    await keyword_object.focusAndType(element_object.ageInput, "28");
    await element_object.clickFormSubmitButton();
    //Assert form successfully created
    await element_object.assertNamesInTableView('Uday', 'Shankar', email);
});

test('TC01- Scenario B - Verify user can edit the row in a table', async({page}) =>{
    await page.getByText('Web Tables').click();
    //Assert names before edit
    await element_object.assertNamesInTableView('Alden', 'Cantrell', 'alden@example.com');
    await element_object.clickOnEditIcon('alden@example.com')
    await page.waitForTimeout(5000);
    await keyword_object.clearAndFill(element_object.firstNameInput, "Gerimedica");
    await page.waitForTimeout(5000);
    await keyword_object.clearAndFill(element_object.lastNameInput, "BV");
    await element_object.clickFormSubmitButton();
    //Assert names are successfully edited
    await element_object.assertNamesInTableView('Gerimedica', 'BV', 'alden@example.com');
});

test('TC02 - Verify broken image', async({page}) =>{
    await page.getByText('Broken Links - Images').click();
    await element_object.VerifyImageState(element_object.brImage);
});

