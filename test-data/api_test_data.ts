import { faker } from "@faker-js/faker";

export class APITestData {

    userName = faker.person.fullName();
    validPassWord = 'Welcome@1234';
    invalidPassword = faker.internet.password();
    invaidPasswordErrorMessage = "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.";
    userId = "3e0a14b3-bdb5-486a-91f5-a39cfda1eb64"
    bookNotFoundErrorMessage = "ISBN supplied is not available in Books Collection!"
    tokenUserName = 'Uday Shankar 2';
    
}