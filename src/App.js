import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Container } from '@mantine/core';
import { AuthContext } from './context/authContext/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductsPage from './pages/Products';
import User from './pages/User';
import Cart from './pages/Cart';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
    <BrowserRouter>
    <Container>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/account' element={user ? <User /> : <Login />} />
      <Route path='/login' element={user ? <User /> : <Login />} />
      <Route path='/register' element={user ? <Home /> : <Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App