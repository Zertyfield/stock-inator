export const Caseking = {

    getStoreName() {
        return 'Caseking'
    },

    getProducts() {
        return [
            {
                productName: 'AMD Ryzen 9 5950X',
                modelNumber: '5950X',
                productUrl: 'https://www.caseking.de/en/amd-ryzen-9-5950x-3.4-ghz-vermeer-am4-boxed-without-cpu-cooler-hpam-205.html'
            },
            {
                productName: 'AMD Ryzen 9 5900X',
                modelNumber: '5900X',
                productUrl: 'https://www.caseking.de/en/amd-ryzen-9-5900x-3.7-ghz-vermeer-am4-boxed-without-cpu-cooler-hpam-204.html'
            },
            {
                productName: 'AMD Ryzen 7 5800X',
                modelNumber: '5800X',
                productUrl: 'https://www.caseking.de/en/amd-ryzen-7-5800x-3.8-ghz-vermeer-am4-boxed-without-cpu-cooler-hpam-203.html'
            },
            {
                productName: 'AMD Ryzen 5 5600X',
                modelNumber: '5600X',
                productUrl: 'https://www.caseking.de/en/amd-ryzen-5-5600x-3.7-ghz-vermeer-am4-with-amd-wraith-stealth-cooler-hpam-202.html'
            }
        ]
    },

    getSelectors() {
        return [
            '#basketButton'
        ];
    }
}