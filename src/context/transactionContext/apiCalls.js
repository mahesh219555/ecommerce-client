import axios from 'axios';
import { 
  createTransactionStart,
  createTransactionSuccess,
  createTransactionFailure,
  getTransactionsFailure,
  getTransactionsStart,
  getTransactionsSuccess
} from './TransactionActions';

// GET TRANSACTIONS
export const getTransactions = async (dispatch) => {
  dispatch(getTransactionsStart())
  try {
    const res = await axios.get('https://tranquil-brook-13044.herokuapp.com/api/transactions', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getTransactionsSuccess(res.data))
  } catch (error) {
    dispatch(getTransactionsFailure())
  }
}

// CREATE TRANSACTION
export const createTransaction = async (transaction, dispatch) => {
  dispatch(createTransactionStart())
  try {
    const res = await axios.post(`https://tranquil-brook-13044.herokuapp.com/api/transactions/checkout`, transaction, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createTransactionSuccess(res.data))
  } catch (error) {
    dispatch(createTransactionFailure())
  }
}