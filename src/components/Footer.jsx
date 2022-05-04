import React from 'react';
import { Text, Breadcrumbs, Anchor } from '@mantine/core';

const Footer = () => {
  return (
    <div style={{ marginTop: '70px', marginBottom: '70px' }}>
      <hr />
      <div style={{ float: 'left' }}>
        <Text>Built by Austin Flatt</Text>
      </div>
      <div style={{ float: 'right' }}>
        <Breadcrumbs>
          <Anchor href='https://github.com/austindflatt/ecommerce-client' target='_blank'>
            View Source Code
          </Anchor>
          <Anchor href='https://austinflatt.com' target='_blank'>
            View Portfolio
          </Anchor>
        </Breadcrumbs>
      </div>
    </div>
  )
}

export default Footer