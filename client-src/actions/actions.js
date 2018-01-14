export const PRICES = 'PRICES'

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
