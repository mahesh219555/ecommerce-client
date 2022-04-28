import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ProductContextProvider } from './context/productContext/ProductContext';
import { UserContextProvider } from './context/userContext/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);