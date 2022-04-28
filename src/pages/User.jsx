import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext/AuthContext';
import { logout } from '../context/authContext/AuthActions';
import { Button, Title } from '@mantine/core';
import Transactions from '../components/Transactions'

const User = () => {
  const { isFetching, dispatch } = useContext(AuthContext);

  return (
    <>
    <Title order={2} style={{ marginBottom: '10px' }}>Welcome to your account 🤑</Title>
    <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginBottom: '20px', marginRight: '10px' }}>Edit Profile</Button>
    <Button type="Submit" variant="light" size="sm" onClick={() => dispatch(logout())} disabled={isFetching} style={{ marginBottom: '20px' }}>Logout</Button>
    <Transactions />
    </>
  )
}

export default User