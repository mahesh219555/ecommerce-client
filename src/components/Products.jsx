import React, { useContext, useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { TextInput, SimpleGrid, Title } from '@mantine/core';
import { ProductContext } from '../context/productContext/ProductContext';
import { getProducts } from '../context/productContext/apiCalls';
import { Search } from 'tabler-icons-react';

const Products = () => {
  const { products, dispatch } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
	  <>
    <Title order={2} style={{ marginBottom: '10px' }}>Filter Products</Title>
    <TextInput
      size="md"
      placeholder="Search by product name"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
    <Title order={2} style={{marginBottom: '10px'}}>Sort Products</Title>
    <SimpleGrid cols={4} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 2 },
    ]}>
      {
        products
        ?.filter((product) => {
          if(search === ''){
            return true
          } else if(product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((product) => {
          return (
            <ProductCard
            key={product._id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            />
          )
        })
      }
    </SimpleGrid>
	  </>
  )
}

export default Products