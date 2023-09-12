import { test } from "@playwright/test";
import { PageObjects } from "../object";

let pageObject;

test.beforeEach(async ({page}) => {
    pageObject = new PageObjects(page);
    pageObject.homePage().navigateToHomePage();
    pageObject.homePage().selectMenuFromHomePage('Elements');
});

test('TC01- Scenario A - Verify user can enter new data into the table', async({page}) =>{
    await pageObject.homePage().selectSectionFromMenu('Web Tables');
    await page.click(pageObject.elements().newButton);
    await page.waitForTimeout(5000);
    await pageObject.keyword().focusAndType(pageObject.elements().firstNameInput, pageObject.elementData().inputName);
    await page.waitForTimeout(3000);
    await pageObject.keyword().focusAndType(pageObject.elements().lastNameInput, pageObject.elementData().inputLastName);
    await pageObject.keyword().focusAndType(pageObject.elements().departmentInput, pageObject.elementData().inputDepartment);
    await page.waitForTimeout(5000);
    await pageObject.keyword().focusAndType(pageObject.elements().salaryInput, pageObject.elementData().inputSalary);
    await page.waitForTimeout(5000);
    await pageObject.keyword().focusAndType(pageObject.elements().emailInput, pageObject.elementData().inputEmail);
    await page.waitForTimeout(2000);
    await pageObject.keyword().focusAndType(pageObject.elements().ageInput, pageObject.elementData().inputAge);
    await pageObject.elements().clickFormSubmitButton();
    //Assert form successfully created
    await pageObject.elements().assertNamesInTableView(pageObject.elementData().inputName, pageObject.elementData().inputLastName, pageObject.elementData().inputEmail);
});

test('TC01- Scenario B - Verify user can edit the row in a table', async({page}) =>{
    await pageObject.homePage().selectSectionFromMenu('Web Tables');
    //Assert names before edit
    await pageObject.elements().assertNamesInTableView(pageObject.elementData().userNameToEdit, pageObject.elementData().userLastNameToEdit, pageObject.elementData().userEmailToEdit);
    await pageObject.elements().clickOnEditIcon(pageObject.elementData().userEmailToEdit)
    await page.waitForTimeout(5000);
    await pageObject.keyword().focusAndFill(pageObject.elements().firstNameInput, pageObject.elementData().editedName);
    await page.waitForTimeout(5000);
    await pageObject.keyword().focusAndFill(pageObject.elements().lastNameInput, pageObject.elementData().editedLastName);
    await pageObject.elements().clickFormSubmitButton();
    //Assert names are successfully edited
    await pageObject.elements().assertNamesInTableView(pageObject.elementData().editedName, pageObject.elementData().editedLastName, pageObject.elementData().userEmailToEdit);
});

test('TC02 - Verify broken image', async({page}) =>{
    await pageObject.homePage().selectSectionFromMenu('Broken Links - Images');
    await pageObject.elements().VerifyImageState(pageObject.elements().brImage);
});

