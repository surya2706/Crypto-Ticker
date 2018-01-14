import { combineReducers } from 'redux'
import { bake_cookie, read_cookie } from "sfcookies";
import { PRICES, NOTIFY } from '../actions/actions'

const priceReducer = (state={}, action) => {
    state = read_cookie("prices");
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
            bake_cookie("prices", new_state);
            return new_state
        default:
            return state;
    }
}

const notifier = (state={}, action) => {
    // state = read_cookie("notifier")
    switch(action.type) {
        case NOTIFY:
            console.log(action);
            var notifyDatas = {
                ...state,
                currency: action.currency,
                notifyPrice: action.notifyPrice
            }
            // bake_cookie("notifier", notifyDatas)
            return notifyDatas
        default:
            return state
    }
}


const reducer = combineReducers({
    priceReducer,
    notifier
})

export default reducer;