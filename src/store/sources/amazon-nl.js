export const AmazonNL = {

    getStoreName() {
        return 'Amazon NL'
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
            },
            {
                productName: 'PS5 Disk Edition',
                modelNumber: 'PS5DISK',
                productUrl: 'https://www.amazon.nl/Sony-PlayStation-PlayStation%C2%AE5-Digital-Edition/dp/B08H93ZRK9/ref=sr_1_1?dchild=1&pd_rd_r=f6caa0d9-8a23-49ca-b538-fcfa848ce6e1&pd_rd_w=Uq6zz&pd_rd_wg=GuPNl&pf_rd_p=77407219-c937-4a14-85ff-6ad2a54ebbc8&pf_rd_r=0B7J5W2XBYR19Q1DW8E9&qid=1613048158&s=videogames&sr=1-1&th=1'
            },
            {
                productName: 'PS5 Digital Edition',
                modelNumber: 'PS5DIGITAL',
                productUrl: 'https://www.amazon.nl/Sony-PlayStation-PlayStation%C2%AE5-Digital-Edition/dp/B08H98GVK8/ref=sr_1_1?dchild=1&pd_rd_r=f6caa0d9-8a23-49ca-b538-fcfa848ce6e1&pd_rd_w=Uq6zz&pd_rd_wg=GuPNl&pf_rd_p=77407219-c937-4a14-85ff-6ad2a54ebbc8&pf_rd_r=0B7J5W2XBYR19Q1DW8E9&qid=1613048158&s=videogames&sr=1-1'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.amazon.nl/Sony-PlayStation-9399506-PlayStation%C2%AE5-Controller/dp/B08H99BPJN/ref=sr_1_3?__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=playstation%2B5&qid=1613120148&sr=8-3&th=1'
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