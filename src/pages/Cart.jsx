import React, { useState, useEffect } from 'react';
import { Title, Text, Table, ScrollArea, Button, Image } from '@mantine/core';
import { CartState } from '../context/cartContext/CartContext';

const Cart = () => {
  const { state: { cart }, dispatch } = CartState();
  const [total, setTotal] = useState();
  
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
    <Title order={2} style={{ marginBottom: '10px' }}>Your shopping cart has {cart.length} items</Title>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove From Cart</th>
          </tr>
        </thead>
        
        <tbody>
          {
            cart.map((product) => {
              return (
              <tr key={product.id}>
                <td>
                  <Image
                  width={80}
                  height={80}
                  fit="contain"
                  src={product.image}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td>
                  <Button type="Submit" variant="light" color="red" size="sm" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product, })}>Remove</Button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
      </ScrollArea>
      <Text size="lg" style={{ marginTop: '20px', marginBottom: '20px', }}>Total ({cart.length}) items: ${total}</Text>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button type="Submit" variant="light" size="sm" color="red" style={{ marginRight: '5px' }}>Empty Cart</Button>
        <Button type="Submit" variant="light" size="sm" color="green">Proceed to Checkout</Button>
      </div>
    </>
  )
}

export default Cart;