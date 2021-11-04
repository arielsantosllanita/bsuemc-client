import { userAction } from "./types"

const initialState = {}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case userAction.AUTHENTICATED:
      return { ...state, ...payload }
    case userAction.UNAUTHENTICATED:
      return initialState

    default:
      return state
  }
}

export default userReducer;