export const AmazonIT = {

    getStoreName() {
        return 'Amazon IT'
    },

    getProducts() {
        return [
            {
                productName: 'PS5',
                modelNumber: 'PS5',
                productUrl: 'https://www.amazon.it/Playstation-Sony-PlayStation-5/dp/B08KKJ37F7/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation+5&qid=1613069139&s=videogames&sr=1-1'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.amazon.it/Sony-PlayStation%C2%AE5-DualSenseTM-Wireless-Controller/dp/B08H9724CC/ref=sr_1_6?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LNZ4T2RQYVPC&dchild=1&keywords=playstation%2B5%2Bconsole&qid=1613120062&sprefix=playstation%2B5%2Caps%2C180&sr=8-6&th=1'
            }
        ]
    },

    getSelectors() {
        return [
            '#add-to-cart-button'
        ];
    }
}