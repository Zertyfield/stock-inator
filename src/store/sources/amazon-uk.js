export const AmazonUK = {

    getStoreName() {
        return 'Amazon UK'
    },

    getProducts() {
        return [
            {
                productName: 'PS5 Disk Edition',
                modelNumber: 'PS5DISK',
                productUrl: 'https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/ref=sr_1_1?dchild=1&keywords=playstation+5&qid=1613056509&sr=8-1'
            },
            {
                productName: 'PS5 Digital Edition',
                modelNumber: 'PS5DIGITAL',
                productUrl: 'https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H97NYGP/ref=sr_1_1?dchild=1&keywords=playstation%2B5&qid=1613056509&sr=8-1&th=1'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.amazon.co.uk/dp/B08H99BPJN/ref=twister_B08J4RCVXW?_encoding=UTF8&psc=1'
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