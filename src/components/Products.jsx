import React, { useContext, useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { TextInput, SimpleGrid, Title, NativeSelect } from '@mantine/core';
import { ProductContext } from '../context/productContext/ProductContext';
import { getProducts } from '../context/productContext/apiCalls';
import { Search } from 'tabler-icons-react';

const Products = () => {
  const { products, dispatch } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  
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
    <NativeSelect
      size="md"
      data={['Accessories', 'Desktops', 'Laptops', 'iPhones', 'iPads', 'Watches']}
      onChange={(e) => setCategory(e.target.value)}
      value={category}
      placeholder="Select one"
      label="Filter products by category"
    />
    <Title order={2} style={{marginBottom: '10px', marginTop: '10px' }}>Sort Products By</Title>
    <NativeSelect
      size="md"
      data={['Lowest Price', 'Highest Price']}
      placeholder="Select one"
      label="Select a price range to sort by"
    />
    <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 2 },
    ]}>
      {
        products
        ?.filter((product) => {
          if(category === '' && search === ''){
            return true
          }
          if(category !== '' && search !== '' && product.category.includes(category) && product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          if(category !== '' && product.category.includes(category)){
            return true
          }
          if(search !== '' && product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
        })
        // .sort((product) => {
        // })
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