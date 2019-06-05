import * as actionTypes from "./actionTypes";
import axios from "axios";

/***************************************************
----------------------SIGN UP-----------------------
****************************************************/
export const signUpStart = () => {
  return {
    type: actionTypes.SIGN_UP_START
  };
};

export const signUpSuccess = (userId, tokenId) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    userId,
    tokenId
  };
};

export const signUpFail = error => {
  return {
    type: actionTypes.SIGN_UP_FAIL,
    error
  };
};

export const signUp = (name, email, password) => {
  return dispatch => {
    dispatch(signUpStart());
    const user = {
      name,
      email,
      password
    };
    axios
      .post("http://localhost:3003/users", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        dispatch(signUpSuccess(res.data.user._id, res.data.token));
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch(signUpFail(err.response.data));
      });
  };
};

/***************************************************
----------------------SIGN IN-----------------------
****************************************************/

export const signInStart = () => {
  return {
    type: actionTypes.SIGN_IN_START
  };
};

export const signInSuccess = (userId, tokenId) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    userId,
    tokenId
  };
};

export const signInFail = error => {
  return {
    type: actionTypes.SIGN_IN_FAIL,
    error
  };
};

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInStart());
    const user = {
      email,
      password
    };
    axios
      .post("http://localhost:3003/users/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        dispatch(signInSuccess(res.data.user._id, res.data.token));
      })
      .catch(err => {
        dispatch(signInFail(err.response.data));
      });
    setTimeout(() => {
      dispatch(signOut());
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }, 3600 * 1000);
  };
};

/***************************************************
----------------------SIGN OUT-----------------------
****************************************************/

export const signOutSuccess = () => {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS
  };
};

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    dispatch(signOutSuccess());
  };
};

/***************************************************
----------------------AUTO SIGN IN------------------
****************************************************/

export const tryAutoSignIn = () => {
  return dispatch => {
    const userId = localStorage.getItem("userId");
    const tokenId = localStorage.getItem("token");
    dispatch(signInSuccess(userId, tokenId));
  };
};
