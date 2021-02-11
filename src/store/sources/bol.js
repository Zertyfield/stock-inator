export const Bol = {

    getStoreName() {
        return 'Bol.com'
    },

    getProducts() {
        return [
            {
                productName: 'PS5',
                modelNumber: 'PS5',
                productUrl: 'https://www.bol.com/nl/p/sony-playstation-5-console/9300000004162282/?ruleRedirect=1&sI=playstation%205&variants='
            },
            {
                productName: 'Test',
                modelNumber: 'Test',
                productUrl: 'https://www.bol.com/nl/p/cable-guy-halo-infinite-master-chief-phone-controller-holder/9300000013288156/?promo=main_803_VIOT_B3_product_0_&bltgh=i0AGA1Fd71VJTSCoZgNM3A.11_0_1_3.4.ProductImage'
            },
        ]
    },

    getSelectors() {
        return [
            'div.buy-block__options > .btn--buy'
        ];
    }
}