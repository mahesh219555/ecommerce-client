import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const ProductCard = () => {
  return (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632948875000" height={160} alt="Norway" />
      </Card.Section>
      
      <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
        <Text weight={500}>MacBook</Text>
        <Badge color="green" variant="light">
          $1200
        </Badge>
      </Group>
      
      <Text size="sm" style={{ lineHeight: 1.5 }}>
        product description goes here
      </Text>
      
      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Add to cart
      </Button>
    </Card>
	</div>
  )
}

export default ProductCard