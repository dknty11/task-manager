import * as actionTypes from './actionTypes';
import axios from 'axios';

export const signUpStart = () => {
  return {
    type: actionTypes.SIGN_UP_START
  }
}

export const signUpSuccess = (userId, tokenId) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    userId,
    tokenId
  }
}

export const signUpFail = (error) => {
  return {
    type: actionTypes.SIGN_UP_FAIL,
    error
  }
}

export const signUp = (name, email, password) => {
  return dispatch => {
    signUpStart();
    const user = {
      name,
      email,
      password
    }
    axios.post('http://localhost:3003/users', user)
      .then(res => {
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('userId', res.data.user._id)
        dispatch(signUpSuccess(res.data.user._id, res.data.token))
      })
      .catch(err => {
        console.log(err.response.data)
        dispatch(signUpFail(err.response.data))
      })
  }
}