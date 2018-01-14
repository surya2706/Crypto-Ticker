import React from 'react'
import Notifier from "react-desktop-notification"
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import Title from './title'
import CoinBlock from './coin'
import Filter from './filter'
import { prices } from '../actions/actions'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        var socket = io.connect('http://localhost:4000')
        socket.on('priceValues', priceValues => {
            dispatch(prices(priceValues))
        })
    };

    render() {
        // const { priceReducer, notifier } = this.props;
        const { bitcoin, etherium, ripple, litecoin, bitcoincash, currency, notifyPrice, dispatch } = this.props;
        console.log(currency, notifyPrice)
        let coinPrices = {
            BTC: bitcoin,
            ETH: etherium,
            XRP: ripple,
            LTC: litecoin,
            BCH: bitcoincash
        }
        console.log(parseInt(coinPrices[currency]), parseInt(notifyPrice))
        if (parseInt(coinPrices[currency]) === parseInt(notifyPrice)) {
            Notifier.start("Crypto-Ticker Notification", `${currency} price reached ${notifyPrice}`, 'http://localhost:4000')
        }
        return (
            <div>
                <Title />
                <Card.Group textAlign="center">
                <CoinBlock imagePath='./images/bitcoin.png' coin="Bitcoin" symbol='BTC' price={bitcoin}/>
                <CoinBlock imagePath='./images/ETHERIUM.jpeg' coin="Etherium" symbol='ETH' price={etherium} />
                <CoinBlock imagePath='./images/ripple.jpeg' coin="Ripple" symbol='XRP' price={ripple} />
                <CoinBlock imagePath='./images/LITECOIN.jpeg' coin="Litecoin" symbol='LTC' price={litecoin} />
                <CoinBlock imagePath='./images/BITCOINCASH.png' coin="BitcoinCash" symbol='BCH' price={bitcoincash} />
                <br  />
                <Filter dispatch={dispatch}/>
                </Card.Group>
            </div>
        )
    }   
}

function mapStateToProps(state) {
    const { priceReducer, notifier } = state
    // const { bitcoin, etherium, ripple, litecoin, bitcoincash } = state;
    return {
        bitcoin: priceReducer.bitcoin,
        etherium: priceReducer.etherium,
        ripple: priceReducer.ripple,
        litecoin: priceReducer.litecoin,
        bitcoincash: priceReducer.bitcoincash,
        currency: notifier.currency,
        notifyPrice: notifier.notifyPrice
    }
}

export default connect(mapStateToProps)(App)