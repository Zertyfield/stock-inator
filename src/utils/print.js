import chalk from 'chalk';
import datetime from 'node-datetime';
import figlet from 'figlet';

export const Print = {

    startUpMessage() {
        figlet('Stock-Inator', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            Print.selectedStores();
            Print.selectedProducts();
        });
    },

    inStock(store, productName) {
        console.log(chalk.hex('#6f7374')(`[${datetime.create().format('d/m/Y H:M:S')}] ${chalk.magenta('info')} :: ${chalk.white('✔')}  [${chalk.hex('#93a0a3')(store)}] [${productName}] :: ${chalk.hex('#8fcb2b')('IN STOCK')}`));
    },

    outOfStock(store, productName) {
        console.log(chalk.hex('#6f7374')(`[${datetime.create().format('d/m/Y H:M:S')}] ${chalk.magenta('info')} :: ${chalk.white('✖')}  [${chalk.hex('#93a0a3')(store)}] [${productName}] :: ${chalk.hex('#ff1368')('OUT OF STOCK')}`));
    },

    selectedStores() {
        console.log(chalk.hex('#6f7374')(`[${datetime.create().format('d/m/Y H:M:S')}] ${chalk.magenta('info')} :: ${chalk.white(`ℹ  Selected stores: ${process.env.STORES.split(',')}`)}`));
    },

    selectedProducts() {
        console.log(chalk.hex('#6f7374')(`[${datetime.create().format('d/m/Y H:M:S')}] ${chalk.magenta('info')} :: ${chalk.white(`ℹ  Selected products: ${process.env.PRODUCTS.split(',')}`)}`));
    }

}