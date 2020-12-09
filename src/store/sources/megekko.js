export const Megekko = {

    getStoreName() {
        return 'Megekko'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://www.megekko.nl/product/4278/294821/Socket-AM4-Processoren/AMD-Ryzen-9-5950X-processor'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://www.megekko.nl/product/4278/294822/Socket-AM4-Processoren/AMD-Ryzen-9-5900X-processor'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://www.megekko.nl/product/4278/294823/Socket-AM4-Processoren/AMD-Ryzen-7-5800X-processor'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://www.megekko.nl/product/4278/294824/Socket-AM4-Processoren/AMD-Ryzen-5-5600X-processor'
            }
        ]
    },

    getSelectors() {
        return [
            '#in_winkelmand'
        ];
    }
}