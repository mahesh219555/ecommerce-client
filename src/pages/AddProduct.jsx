import React, { useState, useContext } from 'react';
import { TextInput, Textarea, Button } from '@mantine/core';
import { createProduct } from '../context/productContext/apiCalls';
import { ProductContext } from '../context/productContext/ProductContext';

const AddProduct = () => {
  const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(ProductContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.id]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product, dispatch);
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
      onChange={handleChange}
      />
      <TextInput
      placeholder="Price"
      label="Price"
      id="price"
      size="md"
      onChange={handleChange}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="md" onClick={handleSubmit}>Add Product</Button>
      </div>
    </>
      : 
      <>You don't have permission</>
    }
    </>
  )
}

export default AddProduct