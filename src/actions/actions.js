import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, OPEN_MODAL, CLOSE_MODAL, SIGN_IN, SIGN_OUT } from './constants'

export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    payload: event
  }
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
}

// MODALS
export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

// Sign in and Out
export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload
  }
}
export function signOut() {
  return {
    type: SIGN_OUT,
  }
}
