import { test } from "@playwright/test";
import { APILibs } from "../../common-lib/api_lib";
import { APITestData } from "../../test-data/api_test_data";
import { AccountsURI } from "../../api-end-points/account";

const apiLibs = new APILibs();
const account_end_point = new AccountsURI();
const apiData = new APITestData();

test('Creation of a new user account', async ({request}) =>{
    const response = await request.post(account_end_point.createUser, {data:{
            "userName": apiData.userName,
            "password": apiData.validPassWord
    }});
    await apiLibs.basicResponseAssertions(response, 201, apiData.userName);
});

test('Verify creation of a new user account with invalid password', async ({request}) => {
    const response = await request.post(account_end_point.createUser, {data:{
        "userName": apiData.userName,
        "password": apiData.invalidPassword
}});
    await apiLibs.basicResponseAssertions(response, 400, apiData.invaidPasswordErrorMessage);
});
