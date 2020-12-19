import React, { useState } from 'react'
import { Menu, Container, Button  } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom'
import { SignOutMenu, SignInMenu } from '../auth'

export default function Header({setFormOpen}) {
  const history = useHistory()
  const [authenticated, setAuthenticated] = useState(false)

  function handleSignOut() {
    setAuthenticated(false)
    history.push('/')
  }

  return (
    <Menu fixed="top" id="fonts">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          WeHIKE
        </Menu.Item>
        <Menu.Item as={NavLink} to="/hikes" name="Hikes" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createHike">
            <Button positive content="Create" />
          </Menu.Item>
        )}
        {authenticated 
        ? <SignInMenu signOut={handleSignOut} /> 
        : <SignOutMenu setAuthenticated={setAuthenticated} />
        }
      </Container>
    </Menu>
  );
}