import { SIGN_IN, SIGN_OUT } from '../actions/constants'

const initialState = {
  authenticated: false,
  currentUser: null
}

export default function authReducer(state= initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: '/assets/user.png',
        },
      };
    case SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        currentUser: null
      }
      default:
        return state;
  }
}