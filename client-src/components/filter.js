import React from 'react'
import { notify } from '../actions/actions'
import { Container, Input, Select, Button } from 'semantic-ui-react'

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]

const Filter = ({ dispatch }) => {
    let input;
    let currency;
    const handleClick = (e) => {
        e.preventDefault();
        let notifiers = {
            currency: (currency ? currency.value : 'BTC'),
            notifyPrice: input.value
        }
        console.log(notifiers)
        dispatch(notify(notifiers))
    }
    return (
        <Container fluid textAlign="center">
            <Input type='text' placeholder='Enter Price to notify...' action>
                <input ref={node => {input = node}}/>            
                <Select options={currencyOptions} defaultValue='BTC' onChange={(node, data) => {currency = data}}/>
                <Button type='button' onClick={handleClick}>Notify</Button>
            </Input>
        </Container>
    )
}

let currencyOptions = [
    {
        key: 'Bitcoin',
        text: 'BTC',
        value: 'BTC'
    },
    {
        key: 'Etherium',
        text: 'ETH',
        value: 'ETH',
    },
    {
        key: 'Ripple',
        text: 'XRP',
        value: 'XRP',
    },
    {
        key: 'Litecoin',
        text: 'LTC',
        value: 'LTC'
    },
    {
        key: 'BitcoinCash',
        text: 'BCH',
        value: 'BCH'
    },
]

export default Filter;