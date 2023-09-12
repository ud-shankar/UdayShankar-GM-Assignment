export class BookStoreURI {

    createBooks = String(process.env.product_url) + '/BookStore/' + process.env.api_version + '/Books'
    deleteBook = String(process.env.product_url) + '/BookStore/' + process.env.api_version + '/Book'
    fetchBook = String(process.env.product_url) + '/BookStore/' +  process.env.api_version + '/Book'

}