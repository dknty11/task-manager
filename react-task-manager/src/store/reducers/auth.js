import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tokenId: null,
  userId: null,
  error: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        tokenId: action.tokenId,
        userId: action.userId,
        error: null,
        loading: false
      };
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        tokenId: action.tokenId,
        userId: action.userId,
        error: null,
        loading: false
      };
    case actionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        tokenId: null,
        userId: null,
        error: null,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
