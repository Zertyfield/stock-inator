export const Alternate = {

    getStoreName() {
        return 'Alternate'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://www.alternate.nl/AMD/Ryzen-9-5950X-3-4-GHz-(4-9-GHz-Turbo-Boost)-socket-AM4-processor/html/product/1685584?event=search'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://www.alternate.nl/AMD/Ryzen-9-5900X-3-7-GHz-(4-8-GHz-Turbo-Boost)-socket-AM4-processor/html/product/1685590?event=search'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://www.alternate.nl/AMD/Ryzen-7-5800X-3-8-GHz-(4-7-GHz-Turbo-Boost)-socket-AM4-processor/html/product/1685585?event=search'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://www.alternate.nl/AMD/Ryzen-5-5600X-3-7-GHz-(4-6-GHz-Turbo-Boost)-socket-AM4-processor/html/product/1685588?event=search'
            }
        ]
    },

    getSelectors() {
        return [
            '#buyProduct > div.productMainContainerTable > div > div.productShort > div.availability > p.stockStatus.available_stock'
        ];
    }
}