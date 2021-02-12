export const BCC = {

    getStoreName() {
        return 'BCC'
    },

    getProducts() {
        return [
            {
                productName: 'PS5',
                modelNumber: 'PS5',
                productUrl: 'https://www.bcc.nl/gaming/playstation/playstation-5-console'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.bcc.nl/gaming/playstation'
            },
        ]
    },

    getSelectors() {
        return [
            '#lister-content > div > div.col-xs-12.col-md-9.pull-right.category-products > div:nth-child(1) > div > nav > ul > li.active > span > span'
        ];
    }
}