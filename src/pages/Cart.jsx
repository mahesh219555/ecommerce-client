import React from 'react';
import { Title, Table, ScrollArea, Button, Image } from '@mantine/core';

const Cart = () => {

  return (
    <>
    <Title order={2} style={{ marginBottom: '10px' }}>Your shopping cart has 1 items in it</Title>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Delete From Cart</th>
          </tr>
        </thead>
        
        <tbody>
          <tr key={null}>
            <td>
              <Image
              width={80}
              height={80}
              fit="contain"
              src="https://cdn11.bigcommerce.com/s-xt5en0q8kf/images/stencil/500x659/products/11078/25698/iphone13mid__04681.1650984221.jpg?c=2"
              />
            </td>
            <td>title</td>
            <td>a laptop</td>
            <td>electronics</td>
            <td>
              <Button type="Submit" variant="light" color="red" size="sm" >Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </ScrollArea>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button type="Submit" variant="light" size="sm" color="red" style={{ marginRight: '5px' }}>Empty Cart</Button>
        <Button type="Submit" variant="light" size="sm" color="green">Checkout</Button>
      </div>
    </>
  )
}

export default Cart