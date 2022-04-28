import React from 'react';
import { Title, Table, ScrollArea, Button } from '@mantine/core';

const Cart = () => {

  return (
    <>
    <Title order={2} style={{ marginBottom: '10px' }}>Your shopping cart has 0 items in it</Title>
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
            <td>image</td>
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