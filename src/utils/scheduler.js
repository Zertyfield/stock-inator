import schedule from 'node-schedule'
import { Print } from './print.js';
import { Lookup } from '../store/lookup.js';
import { Config } from './config.js';
import { StoreMapper } from './storemapper.js';

export const Scheduler = {

    start() {
        Print.startUpMessage();

        if (Config.developMode()) {
            for (const store of Config.getStores()) {
                const mappedStore = StoreMapper[store];
                new Lookup(
                    mappedStore.getStoreName(),
                    mappedStore.getProducts(),
                    mappedStore.getSelectors()
                ).start();
            }
        } else {
            schedule.scheduleJob(`*/${Config.getScheduleInterval()} * * * *`, function () {
                for (const store of Config.getStores()) {
                    const mappedStore = StoreMapper[store];
                    new Lookup(
                        mappedStore.getStoreName(),
                        mappedStore.getProducts(),
                        mappedStore.getSelectors()
                    ).start();
                }
            });
        }
    }
}