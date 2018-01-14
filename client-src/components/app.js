import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import Title from './title'
import CoinBlock from './coin'
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
        const { bitcoin, etherium, ripple, litecoin, bitcoincash } = this.props;
        return (
            <div>
                <Title />
                <Card.Group textAlign="center">
                <CoinBlock imagePath='./images/bitcoin.png' coin="Bitcoin" symbol='BTC' price={bitcoin}/>
                <CoinBlock imagePath='./images/ETHERIUM.jpeg' coin="Etherium" symbol='ETH' price={etherium} />
                <CoinBlock imagePath='./images/ripple.jpeg' coin="Ripple" symbol='XRP' price={ripple} />
                <CoinBlock imagePath='./images/LITECOIN.jpeg' coin="Litecoin" symbol='LTC' price={litecoin} />
                <CoinBlock imagePath='./images/BITCOINCASH.png' coin="BitcoinCash" symbol='BCH' price={bitcoincash} />
                </Card.Group>
            </div>
        )
    }   
}

function mapStateToProps(state) {
    const { bitcoin, etherium, ripple, litecoin, bitcoincash } = state;
    return {
        bitcoin: bitcoin,
        etherium: etherium,
        ripple: ripple,
        litecoin: litecoin,
        bitcoincash: bitcoincash
    }
}

export default connect(mapStateToProps)(App)