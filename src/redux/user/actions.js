// import axios from "axios";
import { userAction } from "./types";

export const signOutUser = () => {
  return {
    type: userAction.UNAUTHENTICATED
  }
}

// export const logout = () => {
//   return (dispatch) => {
//     axios
//       .put('/auth/logout')
//       .then(() => dispatch(signOutUser()))
//       .catch((err) => console.log("signout err", err))
//   }
// }

export const getUserInfo = (data) => {
  return {
    type: userAction.AUTHENTICATED,
    payload: data
  }
}
