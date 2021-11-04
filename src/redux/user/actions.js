import axios from "axios";
import { userAction } from "./types";

const signOutUser = () => {
  return {
    type: userAction.UNAUTHENTICATED
  }
}

export const logout = () => {
  return (dispatch) => {
    axios.put('/auth/logout').then(() => dispatch(signOutUser()))
  }
}

export const getUserInfo = (data) => {
  return {
    type: userAction.AUTHENTICATED,
    payload: data
  }
}
