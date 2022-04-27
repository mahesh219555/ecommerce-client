import React, { useContext } from 'react';
import { Header, Container, Group, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
  <Header height={60} mb={50}>
    <Container 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '100%' }}
    >
      MyStore
      <Group spacing={5}>
        <Link to='/'>
          <Button type="Submit" variant="light" size="sm" >Home</Button>
        </Link>
        <Link to='/products'>
          <Button type="Submit" variant="light" size="sm" >Products</Button>
        </Link>

        {
        user ? 
        <Link to='/account'>
          <Button variant="light" size="sm">Account</Button>
        </Link> : 
        <Link to='/login'>
          <Button variant="light" size="sm">Login</Button>
        </Link>
        }

        <Link to='/cart'>
          <Button type="Submit" variant="light" size="sm" >Cart (0)</Button>
        </Link>
      </Group>

    </Container>
  </Header>
  )
}

export default NavBar