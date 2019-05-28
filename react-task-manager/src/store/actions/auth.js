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
    dispatch(signUpStart());
    const user = {
      name,
      email,
      password
    }
    axios.post('http://localhost:3003/users', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.user._id)
        dispatch(signUpSuccess(res.data.user._id, res.data.token))
      })
      .catch(err => {
        console.log(err.response.data)
        dispatch(signUpFail(err.response.data))
      })
  }
}

export const signInStart = () => {
  return {
    type: actionTypes.SIGN_IN_START
  }
}

export const signInSuccess = (userId, tokenId) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    userId,
    tokenId
  }
}

export const signInFail = (error) => {
  return {
    type: actionTypes.SIGN_IN_FAIL,
    error
  }
}

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInStart());
    const user = {
      email,
      password
    }
    axios.post('http://localhost:3003/users/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.user._id)
        dispatch(signInSuccess(res.data.user._id, res.data.token))
      })
      .catch(err => {
        console.log(err.response.data)
        dispatch(signInFail(err.response.data))
      })
  }
}