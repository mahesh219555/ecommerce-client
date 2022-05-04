import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { logout } from '../context/authContext/AuthActions';
import { Button, Tabs, Title, Avatar } from '@mantine/core';
import Transactions from '../components/Transactions';
import ProductList from '../components/Admin/ProductList';
import TransactionsList from '../components/Admin/TransactionsList';
import UserList from '../components/Admin/UserList';

const User = () => {
  const { isFetching, dispatch } = useContext(AuthContext);
  const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  const name = JSON.parse(localStorage.getItem('user')).firstName;
  const profilePic = JSON.parse(localStorage.getItem('user')).profilePic;
  console.log(JSON.parse(localStorage.getItem('user')))

  return (
    <>
    <Helmet>
      <title>Your Account | Apple E-Commerce</title>
      <meta name='description' content='Your Account' />
    </Helmet>
    <div style={{ width: 100 }}>
      <Avatar src={profilePic} alt={name} radius="xl" size={60} />
    </div>
    <Title order={2} style={{ marginBottom: '10px', marginTop: '10px' }}>Welcome to your account, {name} 🤑</Title>
    <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginBottom: '20px', marginRight: '10px' }}>Edit Account</Button>
    <Button type="Submit" variant="light" size="sm" onClick={() => dispatch(logout())} disabled={isFetching} style={{ marginBottom: '20px' }}>Logout</Button>
    {
    admin ?
    <>
    <div style={{ marginBottom: '20px' }}>
      <Title order={2} style={{ marginBottom: '10px' }}>Admin Dashboard</Title>
      <Link to='/account/add-product'>
        <Button type="Submit" variant="light" color="green" size="sm">Add New Product</Button>
      </Link>
    </div>
    <Tabs variant="pills">
      <Tabs.Tab label="Products"><ProductList /></Tabs.Tab>
      <Tabs.Tab label="Transactions"><TransactionsList /></Tabs.Tab>
      <Tabs.Tab label="Users"><UserList /></Tabs.Tab>
    </Tabs>
    </> :
    <Transactions />
    }
    </>
  )
}

export default User