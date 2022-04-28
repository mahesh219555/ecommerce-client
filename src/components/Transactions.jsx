import React from 'react'
import { Button, Title, Text } from '@mantine/core';

const Transactions = () => {
  const transactions = JSON.parse(localStorage.getItem('user')).transactionHistory;

  return (
    <>
    <Title order={3} style={{ marginBottom: '10px' }}>Your Transactions</Title>
    <Text size="md">Below is a list of your purchase history</Text>
    </>
  )
}

export default Transactions