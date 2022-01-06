import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading
} from "@wp-g2/components";


export function BaseCard(props) {
  const { children } = props

  return <div className="BasicCard">{children}</div>
}

const CardBlock = (props) => {
  const { title, content, footer } = props;

  return (
    <Card isRounded={true}>
      <CardHeader>
        <Heading size={4}>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
      </CardBody>
      {footer && <CardFooter>
        <Text>{footer}</Text>
      </CardFooter>}
    </Card>  
  )
}

export default CardBlock;
