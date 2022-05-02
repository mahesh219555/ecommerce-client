import axios from 'axios';
import { 
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