import React from 'react'
import { Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../reducer/modalReducer'

export default function SandBox() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.test.data)
  return (
    <>
    <h3>The data is: {data} </h3>
    <Button onClick={() => dispatch(openModal({ 
      modalType: 'TestModal', modalProps: { data }
     }))} content="Open Modal" color="teal" />
    </>
  )
}