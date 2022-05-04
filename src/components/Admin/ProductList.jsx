import React, { useState, useContext, useEffect } from 'react';
import { TextInput, Table, ScrollArea, Button, Image, NativeSelect } from '@mantine/core';
import { ProductContext } from '../../context/productContext/ProductContext';
import { deleteProduct, getProducts } from '../../context/productContext/apiCalls';
import { Search } from 'tabler-icons-react';
import formatDistance from 'date-fns/formatDistance';
import { Pagination } from '@mui/material';

const ProductList = () => {
  const { products, dispatch } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  }

  return (
    <>
    <TextInput
      size="md"
      placeholder="Search by product name"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
    <NativeSelect
      size="md"
      data={['Accessories', 'Desktops', 'Laptops', 'iPhones', 'iPads', 'Watches']}
      onChange={(e) => setCategory(e.target.value)}
      value={category}
      placeholder="Select one"
      label="Filter products by category"
      style={{ marginBottom: '10px' }}
    />
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Added</th>
            <th>Product Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        products
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        ?.filter((product) => {
          if(category === '' && search === ''){
            return true
          }
          if(category !== '' && search !== '' && product.category.includes(category) && product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          if(category !== '' && product.category.includes(category)){
            return true
          }
          if(search !== '' && product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((product) => {
          const dateStr = product.createdAt;
          const str = formatDistance(
            new Date(dateStr),
            new Date()
          );
          return (
            <tr key={product._id}>
            <td>
              <Image
              width={80}
              height={80}
              fit="contain"
              src={product.image}
              />
            </td>
            <td>{str} ago</td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>
              <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }}>Edit</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(product._id)}>Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    <Pagination
      count={(products?.length / 10).toFixed(0)}
      onChange={(_, value) => {
        setPage(value);
        window.scroll(0, 450);
      }}
      style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
    </>
  )
}

export default ProductList