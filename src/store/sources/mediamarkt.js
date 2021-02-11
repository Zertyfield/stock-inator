export const Mediamarkt = {

    getStoreName() {
        return 'Mediamarkt'
    },

    getProducts() {
        return [
            // {
            //     productName: 'PS5 Disk Edition',
            //     modelNumber: 'PS5DISK',
            //     productUrl: 'https://www.mediamarkt.nl/nl/product/_sony-playstation-5-disk-edition-1664768.html?rbtc=tra|con|2134463|ce7aaca779608e4077974d0522305e1f|p|&tduid=ce7aaca779608e4077974d0522305e1f'
            // },
            // {
            //     productName: 'PS5 Digital Edition',
            //     modelNumber: 'PS5DIGITAL',
            //     productUrl: 'https://www.mediamarkt.nl/nl/product/_sony-playstation-5-digital-edition-1665134.html'
            // },
            {
                productName: 'PS5',
                modelNumber: 'PS5',
                productUrl: 'https://www.mediamarkt.nl/nl/category/_playstation-5-consoles-766027.html?ga_query=playstation+5'
            },
            {
                productName: 'Test',
                modelNumber: 'Test',
                productUrl: 'https://www.mediamarkt.nl/nl/search.html?query=samsung&searchProfile=onlineshop&channel=mmnlnl'
            },
        ]
    },

    getSelectors() {
        return [
            'div.box.infobox.availability > ul > li.label-instock'
        ];
    }
}