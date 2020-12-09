import toast from 'powertoast';

export const Toast = {

    show(productName, store) {
        toast({
            appID: 'Stock-Inator',
            title: productName,
            message: `In stock at ${store}`,
            wait: true
        }).catch(err => console.error(err));
    }

}