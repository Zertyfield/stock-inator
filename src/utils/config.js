import dotenv from 'dotenv'
dotenv.config()

export const Config = {

    getProducts() {
        return process.env.PRODUCTS.split(',');
    },

    getStores() {
        return process.env.STORES.split(',');
    },

    getScheduleInterval() {
        return process.env.SCHEDULE_INTERVAL;
    },

    openBrowser() {
        return JSON.parse(process.env.OPEN_BROWSER);
    },

    notify() {
        return JSON.parse(process.env.DESKTOP_NOTIFICATIONS);
    },

    useHeadless() {
        return JSON.parse(process.env.HEADLESS);
    },

    developMode() {
        return JSON.parse(process.env.DEVELOP_MODE);
    }

}