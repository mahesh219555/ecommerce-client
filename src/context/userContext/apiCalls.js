import axios from 'axios';
import { 
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
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
    const res = await axios.get('https://digitabay.herokuapp.com/', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailure())
  }
}

// UPDATE USER
export const updateUser = async (user, dispatch) => {
  dispatch(updateUserStart())
  try {
    const res = await axios.put('https://digitabay.herokuapp.com/', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    console.log(res.data)
    dispatch(updateUserSuccess(res.data))
  } catch (error) {
    dispatch(updateUserFailure())
  }
}

// DELETE USERS
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart())
  try {
    await axios.delete(`https://digitabay.herokuapp.com/`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteUserSuccess(id))
  } catch (error) {
    dispatch(deleteUserFailure())
  }
}
