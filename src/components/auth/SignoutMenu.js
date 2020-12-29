import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/actions'

function SignOutMenu({setAuthenticated}) {
  const dispatch = useDispatch()
  return (
    <Menu.Item position="right">
      <Button onClick={() => dispatch(openModal({
        modalType: 'Login'
      }))} basic color="grey" content="Login" />
      <Button 
      color="pink" 
      content="Register" 
      style={{ marginLeft: '0.5em' }} 
      />
    </Menu.Item>
  );
}

export { SignOutMenu };
