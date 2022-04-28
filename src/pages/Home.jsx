import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import { TextInput, Button, Title } from '@mantine/core';

const Home = () => {
  return (
    <>
    <Products />
    <Link to='/products'>
      <Button type="Submit" variant="light" size="sm" color="violet" style={{ marginTop: '20px', float: 'right' }}>View All Products</Button>
    </Link>
    </>
  )
}

export default Home