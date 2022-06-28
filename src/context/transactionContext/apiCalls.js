import axios from 'axios';
import { 
  deleteTransactionStart,
  deleteTransactionSuccess,
  deleteTransactionFailure,
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
    const res = await axios.get('https://digitabay.herokuapp.com/', {
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
    const res = await axios.post(`https://digitabay.herokuapp.com/`, transaction, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createTransactionSuccess(res.data))
  } catch (error) {
    dispatch(createTransactionFailure())
  }
}

// DELETE TRANSACTION
export const deleteTransaction = async (id, dispatch) => {
  dispatch(deleteTransactionStart())
  try {
    await axios.delete(`https://digitabay.herokuapp.com/`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteTransactionSuccess(id))
  } catch (error) {
    dispatch(deleteTransactionFailure())
  }
}
