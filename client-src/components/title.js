import React from 'react'
import { render } from 'react-dom'
import { Header, Icon } from 'semantic-ui-react'


const Title = () => {
    return (
        <Header as='h2' icon textAlign='center'>
            <Icon name='money' circular />
            <Header.Content>
                Crypto-Ticker
            </Header.Content>
    </Header>  
    ) 
}

export default Title;