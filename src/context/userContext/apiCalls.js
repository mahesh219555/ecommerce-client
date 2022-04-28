import axios from 'axios';
import { 
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  getUsersFailure, 
  getUsersStart, 
  getUsersSuccess 
} from './UserActions';

// GET USERS
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart())
  try {
    const res = await axios.get('https://tranquil-brook-13044.herokuapp.com/api/users', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailure())
  }
}

// DELETE USERS
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart())
  try {
    await axios.delete(`https://tranquil-brook-13044.herokuapp.com/api/users/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteUserSuccess(id))
  } catch (error) {
    dispatch(deleteUserFailure())
  }
}