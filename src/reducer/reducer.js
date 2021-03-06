import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actions/constants'
import { sampleData } from '../api/sampleData'

const initialState = {
  events: sampleData
}

export default function eventReducer(state = initialState, {type, payload}) {
  switch(type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload]
      };
    case UPDATE_EVENT:
      return {
        ...state,
        // return array except for the one we are updating
        events: [...state.events.filter(evt => evt.id !== payload.id), payload]
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== payload)]
      };
      default:
        return state;
  }
}