import { test } from "@playwright/test";
import { HomePage } from "../../page-objects/home_page";
import { StudentRegistrationForm } from "../../page-objects/student_registration_form";

let sr_object, hp_object;

test.use({
    launchOptions: {
        args: ['--start-maximized']
    }
});

test.beforeEach(async ({page}) => {
    sr_object = new StudentRegistrationForm(page);
    hp_object = new HomePage(page);
    hp_object.navigateToHomePage();
    hp_object.selectMenuFromHomePage('Forms')
    await page.getByText('Practice Form').click();
});

test('TC03 - Verify user can submit the form', async() =>{
    await sr_object.fillFormDetails();
});


