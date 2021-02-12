export const Nedgame = {

    getStoreName() {
        return 'Nedgame'
    },

    getProducts() {
        return [
            {
                productName: 'PS5 Disk Edition',
                modelNumber: 'PS5DISK',
                productUrl: 'https://www.nedgame.nl/playstation-5/playstation-5-disc-version-bundel/9820628451/'
            },
            {
                productName: 'PS5 Digital Edition',
                modelNumber: 'PS5DIGITAL',
                productUrl: 'https://www.nedgame.nl/playstation-5/playstation-5-digital-edition-bundel/6481373393/'
            },
            {
                productName: 'TEST',
                modelNumber: 'TEST',
                productUrl: 'https://www.nedgame.nl/nintendo-switch/nintendo-switch--2019-upgrade----red-blue/9976999126/'
            }
        ]
    },

    getSelectors() {
        return [
            'div.button.koopbutton'
        ];
    }
}