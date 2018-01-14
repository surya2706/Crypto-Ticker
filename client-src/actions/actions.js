export const PRICES = 'PRICES'

export function prices(bitcoin, etherium, ripple, litecoin, bitcoincash){
    const action = {
        type: PRICES,
        bitcoin,
        etherium,
        ripple,
        litecoin,
        bitcoincash
    };
    return action;
}

export function fetchPrices() {
    return dispatch => {
        return fetch("https://koinex.in/api/ticker")
        .then(response => response.json())
        .then(json => {
            let bitcoin = json.prices.BTC
            let etherium = json.prices.ETH
            let ripple = json.prices.XRP
            let litecoin = json.prices.LTC
            let bitcoincash = json.prices.BCH
            return dispatch(prices(bitcoin, etherium, ripple, litecoin, bitcoincash));
        })
    }
}
