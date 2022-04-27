import React, { useState } from 'react';
import { Header, Container, Group } from '@mantine/core';

const NavBar = () => {

  return (
  <Header height={60} mb={100}>
    <Container 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '100%' }}
    >
      MyStore
      <Group spacing={5}>
        <a
        key={null}
        href='/'
        >
          Home
        </a>
        <a
        key={null}
        href='/add-product'
        >
          Products
        </a>
        <a
        key={null}
        href='/'
        >
          Admin
        </a>
        <a
        key={null}
        href='/'
        >
          Login/Register
        </a>
      </Group>

    </Container>
  </Header>
  )
}

export default NavBar