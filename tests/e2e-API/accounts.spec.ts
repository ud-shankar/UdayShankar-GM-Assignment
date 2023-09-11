import { test } from "@playwright/test";
import { APILibs } from "../../common_lib/api_lib";
import { APITestData } from "../../test-data/api_test_data";

const apiLibs = new APILibs();
const apiData = new APITestData();

test('Creation of a new user account', async ({request}) =>{
    const response = await request.post(apiData.createUser, {data:{
            "userName": apiData.userName,
            "password": apiData.validPassWord
    }});
    await apiLibs.basicResponseAssertions(response, 201, apiData.userName);
});

test('Verify creation of a new user account with invalid password', async ({request}) => {
    const response = await request.post(apiData.createUser, {data:{
        "userName": apiData.userName,
        "password": apiData.invalidPassword
}});
    await apiLibs.basicResponseAssertions(response, 400, apiData.invaidPasswordErrorMessage);
});