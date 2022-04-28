import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { TextInput, Textarea, Title, Button } from '@mantine/core';
import { createProduct } from '../context/productContext/apiCalls';
import { ProductContext } from '../context/productContext/ProductContext';

const AddProduct = () => {
  const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.id]:value })
  }

  const handleSubmit = (e) => {
    createProduct(product, dispatch);
    navigate('/');
  }

  return (
    <>
    {
      admin ? 
      <>
      <TextInput
      label="Image"
      placeholder='http://website.com/image.jpg'
      id="image"
      size="md"
      required
      onChange={handleChange}
      />
      <TextInput
      label="Product Title"
      placeholder='Title of product'
      id="title"
      size="md"
      required
      onChange={handleChange}
      />
      <Textarea
      label="Description"
      id="description"
      size="md"
      required
      onChange={handleChange}
      />
      <TextInput
      placeholder="Category"
      label="Category"
      id="category"
      size="md"
      required
      onChange={handleChange}
      />
      <TextInput
      placeholder="0"
      label="Price"
      id="price"
      size="md"
      required
      onChange={handleChange}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" onClick={handleSubmit}>Add Product</Button>
      </div>
    </>
      :
    <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}><Title order={3}>You do not have permission to access this</Title></div>
    }
    </>
  )
}

export default AddProduct