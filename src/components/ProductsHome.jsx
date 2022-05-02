import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { SimpleGrid } from '@mantine/core';
import { ProductContext } from '../context/productContext/ProductContext';
import { getProducts } from '../context/productContext/apiCalls';

const ProductsHome = () => {
  const { products, dispatch } = useContext(ProductContext);
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
	  <>
    <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 1 },
    ]}>
      {
        products
        .slice(0,12)
        .map((product) => {
          return (
            <ProductCard
            key={product._id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            id={product._id}
            />
          )
        })
      }
    </SimpleGrid>
	  </>
  )
}

export default ProductsHome;