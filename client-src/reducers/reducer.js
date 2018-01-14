import { PRICES, fetchPrices } from '../actions/actions'

const priceReducer = (state={}, action) => {
    switch(action.type) {
        case PRICES:
            var new_state = {
                ...state,
                bitcoin: action.bitcoin,
                etherium: action.etherium,
                ripple: action.ripple,
                litecoin: action.litecoin,
                bitcoincash: action.bitcoincash
            }
            return new_state
        default:
            return state;
    }
}

export default priceReducer;