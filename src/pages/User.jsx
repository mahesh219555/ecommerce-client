import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext/AuthContext';
import { logout } from '../context/authContext/AuthActions';
import { Link } from 'react-router-dom';
import { Button, Title } from '@mantine/core';

const User = () => {
  const { isFetching, dispatch } = useContext(AuthContext);

  return (
    <>
    <Title order={1} style={{ marginBottom: '10px' }}>Welcome </Title>
    <Link to='/account'>
      <Button type="Submit" variant="light" size="sm" onClick={() => dispatch(logout())} disabled={isFetching} style={{ marginBottom: '20px' }}>Logout</Button>
    </Link>
    </>
  )
}

export default User