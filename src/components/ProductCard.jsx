import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const ProductCard = (props) => {
  return (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={props.image} height={160} alt="Norway" />
      </Card.Section>
      
      <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
        <Text weight={500}>{props.title}</Text>
        <Badge color="green" variant="light">
          {props.price}
        </Badge>
      </Group>
      
      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {props.description}
      </Text>
      
      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Add to cart
      </Button>
    </Card>
	</div>
  )
}

export default ProductCard