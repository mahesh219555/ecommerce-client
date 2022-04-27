import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext/AuthContext';
import { TextInput, Button, Title } from '@mantine/core';
import { At, Eye } from 'tabler-icons-react';
import { login } from "../context/authContext/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch)
    navigate('/account');
  }
  
  return (
  <>
  <Title order={1} style={{ marginBottom: '10px' }}>Login</Title>
  <form>
    <TextInput
    placeholder="Enter your email"
    label="Email"
    id="email"
    onChange={(e) => setEmail(e.target.value)}
    size="lg"
    icon={<At size={14} />}
    required
    />
    <TextInput
    placeholder="Enter your password"
    label="Password"
    id="password"
    onChange={(e) => setPassword(e.target.value)}
    size="lg"
    icon={<Eye size={14} />}
    type="password"
    required
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="md" onClick={handleLogin} disabled={isFetching} style={{ marginRight: '5px' }}>Login</Button>
      <Link to='/register'>
        <Button type="Submit" variant="light" size="md">Not A User?</Button>
      </Link>
    </div>
  </form>
  </>
  )
}

export default Login;