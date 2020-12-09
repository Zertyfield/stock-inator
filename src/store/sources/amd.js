export const AMD = {

    getStoreName() {
        return 'AMD'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://www.amd.com/en/direct-buy/5450881400/nl'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://www.amd.com/en/direct-buy/5450881500/nl'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://www.amd.com/en/direct-buy/5450881600/nl'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://www.amd.com/en/direct-buy/5450881700/nl'
            },
            {
                productName: 'AMD RX6800 XT',
                modelNumber: 'RX6800XT',
                productUrl: 'https://www.amd.com/en/direct-buy/5458372800/nl'
            }
        ]
    },

    getSelectors() {
        return [
            '.btn-shopping-cart'
        ];
    }
}