import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext/ProductContext';
import { getProducts } from '../context/productContext/apiCalls';
import { SimpleGrid, Button, Card, Image, Text, Badge, Group } from '@mantine/core';

const Home = () => {
  const { products, dispatch } = useContext(ProductContext);
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <>
    <SimpleGrid cols={4} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 2 },
    ]}>
    {
      products.map((product) => {
        return (
          <div style={{ width: '100%', margin: 'auto' }}>
          <Card shadow="sm" p="lg">
          <Card.Section>
          <Image src={product.image} height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>{product.title}</Text>
          <Badge color="green" variant="light">
          ${product.price}
          </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }}>
          {product.description}
          </Text>

          <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Add to cart
          </Button>
          </Card>
          </div>
        )
      })
    }
    </SimpleGrid>

    <Link to='/products'>
      <Button type="Submit" variant="light" size="sm" color="violet" style={{ marginTop: '20px', float: 'right' }}>View All Products</Button>
    </Link>
    </>
  )
}

export default Home