import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext/AuthContext';
import { logout } from '../context/authContext/AuthActions';
import { Button, Title } from '@mantine/core';
import Transactions from '../components/Transactions'

const User = () => {
  const { isFetching, dispatch } = useContext(AuthContext);
  const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  const name = JSON.parse(localStorage.getItem('user')).firstName;
  console.log(JSON.parse(localStorage.getItem('user')))

  return (
    <>
    <Title order={2} style={{ marginBottom: '10px' }}>Welcome to your account, {name} 🤑</Title>
    <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginBottom: '20px', marginRight: '10px' }}>Edit Account</Button>
    <Button type="Submit" variant="light" size="sm" onClick={() => dispatch(logout())} disabled={isFetching} style={{ marginBottom: '20px' }}>Logout</Button>
    {
    admin ?
    <>
    <Title order={2} style={{ marginBottom: '10px' }}>Admin Dashboard</Title>
    <Button type="Submit" variant="light" color="green" size="sm">Add New Product</Button>
    </> :
    <Transactions />
    }
    </>
  )
}

export default User