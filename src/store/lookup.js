
import puppeteer from 'puppeteer';
import open from 'open';
import { Print } from '../utils/print.js'
import { Toast } from '../utils/toast.js'
import { Config } from '../utils/config.js';

export class Lookup {

    constructor(storeName, productList, inStockSelectors) {
        this.storeName = storeName;
        this.productList = productList;
        this.inStockSelectors = inStockSelectors;
    }

    start() {
        try {
            (async () => {

                // Init browser settings
                const browser = await puppeteer.launch({
                    headless: Config.useHeadless()
                });

                // Create new page
                const page = await browser.newPage()

                // Only check products that match the ones in .env
                for (const product of this.productList) {
                    for (const confProduct of Config.getProducts()) {
                        if (confProduct === product.modelNumber) {
                            try {
                                // Set extra headers
                                await page.setExtraHTTPHeaders({
                                    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8'
                                });

                                // Set user agent
                                await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

                                // Navigate to product page
                                await page.goto(product.productUrl);

                                // Store in help variable
                                const selectors = this.inStockSelectors;

                                // Check if available
                                const inStock = await page.evaluate((selectors) => {
                                    let inStock;
                                    selectors.forEach(selector => {
                                        if (document.querySelector(selector) != null) {
                                            inStock = selector;
                                            return;
                                        }
                                    });
                                    return inStock;
                                }, selectors);

                                // Do stuff when in stock
                                if (inStock) {

                                    Print.inStock(this.storeName, product.productName);

                                    // Shows toast if configured
                                    if (Config.notify()) {
                                        Toast.show(product.productName, this.storeName);
                                    }

                                    // Opens page if configured
                                    if (Config.openBrowser()) {
                                        open(product.productUrl);
                                    }

                                } else {
                                    Print.outOfStock(this.storeName, product.productName);
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                }
                await browser.close();
            })()
        } catch (error) {
            console.log(error);
        }
    }
}