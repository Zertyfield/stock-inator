export const Azerty = {

    getStoreName() {
        return 'Azerty'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://azerty.nl/4368016'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://azerty.nl/4368017'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://azerty.nl/4368018'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://azerty.nl/4368019'
            }
        ]
    },

    getSelectors() {
        return [
            '#detail > div > div > div.columnrow.detail > div.columns.four.specs > div.border_pdp > div > div.pdpordering > div > div > a'
        ];
    }
}