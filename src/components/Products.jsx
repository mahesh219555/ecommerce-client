import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { SimpleGrid } from '@mantine/core';
import { ProductContext } from '../context/productContext/ProductContext';
import { getProducts } from '../context/productContext/apiCalls';

const Products = () => {
  const { products, dispatch } = useContext(ProductContext);
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  console.log(products)

  return (
	  <>
    <SimpleGrid cols={4} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 2 },
    ]}>
      {
        products?.map((product) => {
          return (
            <ProductCard
            key={product._id}
            image={product.image}
            title={product.title}
            />
          )
        })
      }
    </SimpleGrid>
	  </>
  )
}

export default Products