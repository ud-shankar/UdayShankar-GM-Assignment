export class AccountsURI {

    createUser = String(process.env.product_url) + '/Account/' + process.env.api_version + '/User';
    generateToken = String(process.env.product_url) + '/Account/' + process.env.api_version + '/GenerateToken';
    
}