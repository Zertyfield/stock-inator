export const AmazonDE = {

    getStoreName() {
        return 'Amazon DE'
    },

    getProducts() {
        return [
            {
                productName: 'PS5 Disk Edition',
                modelNumber: 'PS5DISK',
                productUrl: 'https://www.amazon.de/-/nl/dp/B08H93ZRK9/ref=sr_1_1?__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation%2B5&qid=1613056253&rnid=1703609031&s=videogames&sr=1-1&th=1'
            },
            {
                productName: 'PS5 Digital Edition',
                modelNumber: 'PS5DIGITAL',
                productUrl: 'https://www.amazon.de/-/nl/dp/B08H98GVK8/ref=sr_1_1?__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation%2B5&qid=1613056253&rnid=1703609031&s=videogames&sr=1-1&th=1'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.amazon.de/-/nl/dp/B0143UM4TC/ref=sr_1_3?__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=ram&qid=1613119912&quartzVehicle=29-1429&sr=8-3'
            }
        ]
    },

    getSelectors() {
        return [
            '#add-to-cart-button'
        ];
    }
}