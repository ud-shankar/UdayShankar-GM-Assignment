import { expect, test } from "@playwright/test";

export class APILibs {
    
    /*
    Description: To do the basic assertions based on the response status code 
    Params: response:any - Response of the request sent
    statuscode:number - Status code expeted by the user for given request
    text:string - Message epected by the user to be asserted fom response body
    Author: Uday Shankar
    Created On: 11th Sept 2023
    Updated On: 11th Sept 2023
    */
    async basicResponseAssertions(response, statusCode, text?) {
        let acc_data;
        if (statusCode != 204){
            acc_data = await response.json();
        }
        
        try {
            switch (statusCode) {
                case 200:
                    expect(await response.ok()).toBeTruthy();
                    break;
                case 201:
                    expect(await response.status()).toBe(201);
                    if(text){
                        expect(acc_data['username']).toBe(text);
                    } 
                    break;
                case 204:
                    expect(await response.status()).toBe(204);
                    break;
                case 400:
                    expect(await response.status()).toBe(400);
                    expect(acc_data['message']).toBe(text);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log('Response code: ' + response.status() + '\n' + 'Failed due to:' + acc_data['message']);
            test.fail();
        }
    }
    
}