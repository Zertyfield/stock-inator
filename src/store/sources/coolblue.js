export const Coolblue = {

    getStoreName() {
        return 'Coolblue'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://www.coolblue.nl/product/871392/amd-ryzen-9-5950x.html'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://www.coolblue.nl/product/871394/amd-ryzen-9-5900x.html'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://www.coolblue.nl/product/871395/amd-ryzen-7-5800x.html'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://www.coolblue.nl/product/871396/amd-ryzen-5-5600x.html'
            },
            {
                productName: 'PS5 Disk Edition',
                modelNumber: 'PS5DISK',
                productUrl: 'https://www.coolblue.nl/product/865866/playstation-5.html'
            },
            {
                productName: 'PS5 Digital Edition',
                modelNumber: 'PS5DIGITAL',
                productUrl: 'https://www.coolblue.nl/product/865867/playstation-5-digital-edition.html'
            }
        ]
    },

    getSelectors() {
        return [
            '#main-content > div.grid-section-xs--gap-4.grid-section-m--gap-5 > div > div.grid-unit-xs--col-12.grid-unit-m--col-6.grid-unit-xl--col-5.js-sticky-bar-trigger > div > div.grid-section-xs--gap-4.grid-section-m--gap-5.js-order-block > div.js-desktop-order-block > div > form',
            '#main-content > div.grid-section-xs--gap-4.grid-section-m--gap-5 > div > div.grid-unit-xs--col-12.grid-unit-m--col-6.grid-unit-xl--col-5.js-sticky-bar-trigger > div > div.grid-section-xs--gap-4.grid-section-m--gap-5.js-order-block > div.js-desktop-order-block > div > form > div.grid-section-xs--gap-4.hide-until-m > button'
        ];
    }
}