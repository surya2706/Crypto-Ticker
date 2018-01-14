export const PRICES = 'PRICES';
export const NOTIFY = 'NOTIFY';

export function prices(priceValues){
    const action = {
        type: PRICES,
        bitcoin: priceValues.bitcoin,
        etherium: priceValues.etherium,
        ripple: priceValues.ripple,
        litecoin: priceValues.litecoin,
        bitcoincash: priceValues.bitcoincash
    };
    return action;
}

export function notify(notifier) {
    const notifyDatas = {
        type: NOTIFY,
        currency: notifier.currency,
        notifyPrice: notifier.notifyPrice
    };
    return notifyDatas;
}
