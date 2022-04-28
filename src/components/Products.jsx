import React from 'react'
import ProductCard from './ProductCard'
import { SimpleGrid } from '@mantine/core';

const Products = () => {
  return (
	  <>
    <SimpleGrid cols={4} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 2 },
    ]}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </SimpleGrid>
	  </>
  )
}

export default Products