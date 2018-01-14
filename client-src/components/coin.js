import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CoinBlock = (props) => (
    <Card centered>
      <Card.Content>
        <Image floated='right' size='mini' src={props.imagePath} />
        <Card.Header>
          {props.coin}
        </Card.Header>
        <Card.Meta>
          {props.symbol}
        </Card.Meta>
        <Card.Description>
            {`${props.symbol}/INR: ${props.price}`}
        </Card.Description>
      </Card.Content>
      </Card>
);

export default CoinBlock;