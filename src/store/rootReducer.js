import { combineReducers } from 'redux'
import eventReducer from '../reducer/reducer'
import modalReducer from '../reducer/modalReducer'
import authReducer from '../reducer/authReducer' 

const rootReducer = combineReducers({
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer
})

export default rootReducer