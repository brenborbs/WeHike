import React from 'react'
import { useSelector } from 'react-redux'
import TestModal from '../../api/testModal'
import { Login } from '../auth'

function ModalManager() {
  const modalLookup = {
    TestModal,
    Login
  }
  const currentModal = useSelector(state => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />
  }
  return <span>{renderedModal}</span>
}

export { ModalManager }