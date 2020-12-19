import { combineReducers } from 'redux'
import eventReducer from '../reducer/reducer'

const rootReducer = combineReducers({
  event: eventReducer
})

export default rootReducer