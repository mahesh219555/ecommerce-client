import axios from 'axios';
import { getUsersFailure, getUsersStart, getUsersSuccess } from './UserActions';

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

// DELETE USERS (IN PROGRESS)