import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Table, ScrollArea, Button } from '@mantine/core';
import { TransactionContext } from '../../context/transactionContext/TransactionContext';
import { getTransactions } from '../../context/transactionContext/apiCalls';
import { Search } from 'tabler-icons-react';

const TransactionsList = () => {
  const { transactions, dispatch } = useContext(TransactionContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getTransactions(dispatch);
  }, [dispatch]);

  return (
    <>
    <TextInput
      size="md"
      placeholder="Search by User ID"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Purchased On</th>
            <th>Delete Transaction</th>
          </tr>
        </thead>
        <tbody>
        {
        transactions
        ?.filter((transaction) => {
          if(search === ''){
            return true
          } else if(transaction.user.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((transaction) => {
          return (
            <tr key={transaction._id}>
            <td>{transaction._id}</td>
            <td>{transaction.user}</td>
            <td>{transaction.createdAt}</td>
            <td>
              <Button type="Submit" variant="light" color="red" size="sm">Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    </>
  )
}

export default TransactionsList