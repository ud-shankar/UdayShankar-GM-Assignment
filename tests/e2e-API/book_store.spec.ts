import { test } from "@playwright/test";
import { APILibs } from "../../common-lib/api_lib";
import { APITestData } from "../../test-data/api_test_data";
import { AccountsURI } from "../../api-end-points/account";
import { BookStoreURI } from "../../api-end-points/book_store";

const apiLibs = new APILibs();
const apiData = new APITestData();
const account_end_point = new AccountsURI();
const book_end_point = new BookStoreURI();
let token;

test.describe('Demo QA Books API', () => {
    test('Create new entry for books and delete after verifying', async ({request}) =>{
        await test.step('Generate token for auth', async () => {
            const response = await request.post(account_end_point.generateToken, {data:{
                "userName": apiData.tokenUserName,
                "password": apiData.validPassWord
            }});
            apiLibs.basicResponseAssertions(response, 200);
            const data = await response.json();
            token = 'Bearer ' + data['token'];
        })

        await test.step('Create a list of new books with post request', async () => {
            const response = await request.post(book_end_point.createBooks, {headers:{"Authorization": token}, 
                data:{
                "userId": apiData.userId,
                "collectionOfIsbns": [
                    {
                    "isbn": "The project called playwright"
                    },
                    {
                    "isbn": "Author of the present"
                    },
                    {
                    "isbn": "The new Era"
                    }
                ]}
            })
            apiLibs.basicResponseAssertions(response, 201);
        });
        
        await test.step('Remove one of the added books', async() => {
            const response = await request.delete(book_end_point.deleteBook, {headers:{"Authorization": token},
            data:{
                "isbn": "Author of the present",
                "userId": apiData.userId
            }});
            apiLibs.basicResponseAssertions(response, 204);
        });

        await test.step('Verify user is able to fetch the delete book', async() => {
            const response = await request.get(book_end_point.fetchBook, {headers:{"Authorization": token}, params:{
                "ISBN":"Author of the present"
            }});
            apiLibs.basicResponseAssertions(response, 400, apiData.bookNotFoundErrorMessage);
        });
    })  
});
