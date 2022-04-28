import axios from 'axios';
import { 
  // updateProductStart,
  // updateProductSuccess,
  // updateProductFailure,
  // createProductStart,
  // createProductSuccess,
  // createProductFailure,
  // deleteProductFailure, 
  // deleteProductStart, 
  // deleteProductSuccess, 
  getProductsFailure, 
  getProductsStart, 
  getProductsSuccess 
} from './ProductActions';

// GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart())
  try {
    const res = await axios.get('https://tranquil-brook-13044.herokuapp.com/api/products', {
      headers: {
        token: 'Bearer ' + JSON.stringify(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getProductsSuccess(res.data))
  } catch (error) {
    dispatch(getProductsFailure())
  }
}

// // CREATE PRODUCT (NEED ADMIN CONTROL)
// export const createProject = async (product, dispatch) => {
//   dispatch(createProductStart())
//   try {
//     const res = await axios.post(`/products/create`, product, {
//       headers: {
//         token: 'Bearer ' + JSON.stringify(localStorage.getItem('user')).accessToken,
//       }
//     })
//     dispatch(createProductSuccess(res.data))
//   } catch (error) {
//     dispatch(createProductFailure())
//   }
// }

// // UPDATE PRODUCT (NEED ADMIN CONTROL)
// export const updateProduct = async (product, dispatch) => {
//   dispatch(updateProductStart())
//   try {
//     const res = await axios.put(`/products/update`, product, {
//       headers: {
//         token: 'Bearer ' + JSON.stringify(localStorage.getItem('user')).accessToken,
//       }
//     })
//     dispatch(updateProductSuccess(res.data))
//   } catch (error) {
//     dispatch(updateProductFailure())
//   }
// }

// // DELETE PRODUCT (NEED ADMIN CONTROL)
// export const deleteProduct = async (id, dispatch) => {
//   dispatch(deleteProductStart())
//   try {
//     await axios.delete(`/products/delete/${id}`, {
//       headers: {
//         token: 'Bearer ' + JSON.stringify(localStorage.getItem('user')).accessToken,
//       }
//     })
//     dispatch(deleteProductSuccess(id))
//   } catch (error) {
//     dispatch(deleteProductFailure())
//   }
// }