export const AmazonES = {

    getStoreName() {
        return 'Amazon ES'
    },

    getProducts() {
        return [
            {
                productName: 'PS5 Disk Edition',
                modelNumber: 'PS5DISK',
                productUrl: 'https://www.amazon.es/PlayStation-5-Mando-inal%C3%A1mbrico-DualSense/dp/B08KKJ37F7/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation%2B5&qid=1613056716&sr=8-1&th=1'
            },
            {
                productName: 'PS5 Digital Edition',
                modelNumber: 'PS5DIGITAL',
                productUrl: 'https://www.amazon.es/PlayStation-5-Mando-inal%C3%A1mbrico-DualSense/dp/B08KJF2D25/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation%2B5&qid=1613056716&sr=8-1&th=1'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.amazon.es/PlayStation-5-Mando-inal%C3%A1mbrico-DualSense/dp/B08KJPLGLF/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation%2B5&qid=1613056716&sr=8-1&th=1'
            }
        ]
    },

    getSelectors() {
        return [
            '#add-to-cart-button'
        ];
    }
}