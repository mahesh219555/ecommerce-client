import React, { useContext, useEffect } from 'react';
import { Table, ScrollArea, Button } from '@mantine/core';
import { TransactionContext } from '../../context/transactionContext/TransactionContext';
import { getTransactions } from '../../context/transactionContext/apiCalls';
// import { Search } from 'tabler-icons-react';

const TransactionsList = () => {
  const { transactions, dispatch } = useContext(TransactionContext);

  useEffect(() => {
    getTransactions(dispatch);
  }, [dispatch]);

  return (
    <>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Products ID Ordered</th>
            <th>User ID</th>
            <th>Purchased On</th>
            <th>Delete Transaction</th>
          </tr>
        </thead>
        <tbody>
        {
        transactions
        .map((transaction) => {
          return (
            <tr key={transaction._id}>
            <td>{transaction.cart}</td>
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