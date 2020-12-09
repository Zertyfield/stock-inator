export const Amazon = {

    getStoreName() {
        return 'Amazon'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://www.amazon.nl/dp/B0815Y8J9N'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://www.amazon.nl/dp/B08164VTWH'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://www.amazon.nl/dp/B0815XFSGK'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://www.amazon.nl/dp/B08166SLDF'
            }
        ]
    },

    getSelectors() {
        return [
            '#add-to-cart-button',
            '#buybox-see-all-buying-choices-announce'
        ];
    }
}