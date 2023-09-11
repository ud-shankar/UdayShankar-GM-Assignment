import { expect, test } from "@playwright/test";

export class APILibs {
    
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