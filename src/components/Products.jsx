import React from 'react'
import ProductCard from './ProductCard'
import { SimpleGrid } from '@mantine/core';

const Products = () => {
  return (
	  <>
    <SimpleGrid cols={3} spacing='sm'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </SimpleGrid>
	  </>
  )
}

export default Products