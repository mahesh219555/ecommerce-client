import React from 'react'
import { Title, Text, Table, ScrollArea } from '@mantine/core';

const Transactions = () => {
  const transactions = JSON.parse(localStorage.getItem('user')).transactionHistory;

  return (
    <>
    {
      transactions.length <= 0 ? 
      <>
      <Title order={3} style={{ marginBottom: '10px' }}>You haven't made any purchases yet</Title>
      <Text size="md">If you recently made a purchase, log out then log back in to see your order details</Text>
      </>
      :
      <>
      <Title order={3} style={{ marginBottom: '10px' }}>Your Transactions</Title>
      <Text size="md">Below is a list of your purchase history</Text>
      
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total</th>
              <th>Purchased On</th>
            </tr>
          </thead>
          
          <tbody>
            {
              transactions
              .reverse()
              .map((transaction) => {
                return (
                  <tr key={transaction._id}>
                    <td>{transaction._id}</td>
                    <td>${transaction.total}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </ScrollArea>
      </>
    }
    </>
  )
}

export default Transactions