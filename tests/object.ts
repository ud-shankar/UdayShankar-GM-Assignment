import { Page } from "@playwright/test";
import { ElementsData } from "../test-data/elements_data";
import { HomePage } from "../page-objects/home_page";
import { keyword } from "../common_lib/keywords";
import { Elements } from "../page-objects/elements";
import { Interaction } from "../page-objects/interactions";
import { Widgets } from "../page-objects/widgets";
import { StudentRegistrationForm } from "../page-objects/student_registration_form";

export class PageObjects {

    page:Page;
    element_data_object:ElementsData;
    home_object:HomePage;
    keyword_object:keyword;
    element_object:Elements;
    interaction_object:Interaction;
    widgets_object:Widgets;
    student_registration_object:StudentRegistrationForm;

    constructor(page:Page) {
        this.page = page;
    }

    studentRegistration():StudentRegistrationForm {
        return this.student_registration_object = new StudentRegistrationForm(this.page);
    }

    widgets():Widgets {
        return this.widgets_object = new Widgets(this.page);
    }

    interactions():Interaction {
        return this.interaction_object = new Interaction(this.page);
    }

    elements():Elements {
        return this.element_object = new Elements(this.page);
    }

    elementData():ElementsData {
        return this.element_data_object = new ElementsData();
    }

    homePage():HomePage {
        return this.home_object = new HomePage(this.page);
    }

    keyword():keyword {
        return this.keyword_object = new keyword(this.page);
    }

}