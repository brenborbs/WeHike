import React from 'react';
import { Menu, Button } from 'semantic-ui-react'

function SignOutMenu({setAuthenticated}) {
  return (
    <Menu.Item position="right">
      <Button onClick={() => setAuthenticated(true)} basic color="grey" content="Login" />
      <Button 
      color="pink" 
      content="Register" 
      style={{ marginLeft: '0.5em' }} 
      />
    </Menu.Item>
  );
}

export { SignOutMenu };
